const express = require('express');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const loginControllers = require('./controllers/loginControllers');
const homepageControllers = require('./controllers/homepageControllers');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// endpoint to post user and password into DB signup
app.post('/api/signup', loginControllers.createUser, (req, res) => {
  return res.status(200).send('registered!');  //redirect to login
});

// this is the endpoint for logging in
app.post('/api/login', loginControllers.verifyUser, loginControllers.createToken, (req, res) => {
  return res.status(200).send('logged in!');
});

// getting all user relevant prescription event data @ homepage endpoint
app.get('/api/homepage', loginControllers.verifyToken, homepageControllers.getPrescriptions, (req, res) => {
  return res.status(200).json(res.locals.prescriptions);
});

// posting a prescription event form @ homepage endpoint
app.post('/api/homepage', loginControllers.verifyToken, homepageControllers.createPrescription, (req, res) => {
  return res.status(200).send(`homepage posted`);
});

// deleting a prescription event form @ homepage endpoint
app.delete('/api/homepage', loginControllers.verifyToken, homepageControllers.deletePrescription, (req, res) => {
  return res.status(200).send(`homepage deleted`);
});

// updating a prescription event @ homepage endpoint
app.patch('/api/homepage', loginControllers.verifyToken, homepageControllers.updatePrescription, (req, res) => {
  return res.status(200).send(`homepage updated`);
});

// catch all stray endpoints that don't match and send them to entry point of app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// global default err handler for middleware errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error in unknown middleware error',    
    status: 500,
    message: {err: 'An err has occurred'}  };
    const errObj = Object.assign({}, defaultErr, err);
    return res.status(errObj.status).json(errObj.message);
});

// verify port has been initialized and server is running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});