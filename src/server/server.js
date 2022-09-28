const express = require('express');
require('dotenv').config()
const path = require('path');
const PORT = process.env.PORT || 3001;
// const cors = require('cors');
const passport = require('passport');

const cookieSession = require('cookie-session');
const loginControllers = require('./controllers/loginControllers');
const homepageControllers = require('./controllers/homepageControllers');
require('./passport');

const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/signup', loginControllers.createUser, (req, res) => {
  console.log('entered');
  return res.status(200).send('registered!');  //redirect to login
});

// this is the endpoint for logging in
app.post('/login', loginControllers.verifyUser, loginControllers.createToken, (req, res) => {
  console.log('leaving login');
  return res.status(200).redirect('/homepage');
});



app.get('/homepage', loginControllers.verifyToken, homepageControllers.getPrescriptions, (req, res) => {
  return res.status(200).send(`homepage! ${res.locals.prescriptions[0]}`);
})

app.post('/homepage', loginControllers.verifyToken, homepageControllers.createPrescription, (req, res) => {
  return res.status(200).send(`homepage! posted!`);
});

app.delete('/homepage', loginControllers.verifyToken, homepageControllers.deletePrescription, (req, res) => {
  return res.status(200).send(`homepage! deleted!`);
});

app.patch('/homepage', loginControllers.verifyToken, homepageControllers.updatePrescription, (req, res) => {
  return res.status(200).send(`homepage! updated!`);
});

// app.get('*', (req, res) => {
//   console.log('entered all');
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error in unknown middleware error',    
    status: 500,
    message: {err: 'An err has occurred'}  };
    const errObj = Object.assign({}, defaultErr, err);
    return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});