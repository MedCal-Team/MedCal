const db = require('../userModel');

const homepageControllers = {};

// grab all prescription events, and return the info in res.locals.prescriptions
homepageControllers.getPrescriptions = (req, res, next) => {
  const username = res.locals.username;
  const sqlPrescription = 'SELECT * FROM pilltaker WHERE username = $1';
  db.query(sqlPrescription, [username])
    .then((result) => {
      res.locals.prescriptions = result.rows;
      return next(); 
    })
    .catch(err => {
      return next({
        log: 'Express Error handler caught in getPrescriptions err',
        status: 500,
        message: { err: 'no cookie/error' },
      });
    });
};

// create a prescription in the DB using the json object sent from the frontend, don't return anything
homepageControllers.createPrescription = (req, res, next) => {
  const username = res.locals.username;
  const {description, frequency, taketime, startdate, quantity, title, prescription} = req.body;
  console.log('entered postpresc', [username, description, frequency, taketime, startdate, quantity, title]);
  const sqlPrescription = 'INSERT INTO pilltaker(username, description, frequency, taketime, startdate, quantity, title, prescription) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
  db.query(sqlPrescription, [username, description, frequency, taketime, startdate, quantity, title])
    .then((result) => {
      return next(); 
    })
    .catch(err => {
      return next({
        log: 'Express Error handler caught in postPrescriptions err',
        status: 500,
        message: { err: 'no cookie/error' },
      });
    });
};

// @EXAMPLE POST FORM
// {
//   "description": "testpresc",
//   "frequency": ["MO","WE","FR"],
//   "taketime": "07:00:00-12:00:00",
//   "startdate": "2022-09-28",
//   "quantity":"270",
//   "prescription": "expresc",
//   "title":"testpresc"
// }
// update a prescription event and return nothing but a success msg
homepageControllers.updatePrescription = (req, res, next) => {
  const username = res.locals.username;
  const {description, frequency, taketime, startdate, quantity, title, prescription} = req.body;
  const sqlPrescription = 'UPDATE pilltaker SET description = $2, frequency = $3, taketime = $4, startdate = $5, quantity= $6, title = $7, prescription = $8 WHERE username = $1';
  db.query(sqlPrescription, [username, description, frequency, taketime, startdate, quantity, title, prescription])
    .then((result) => {
      return next(); 
    })
    .catch(err => {
      return next({
        log: 'Express Error handler caught in updatePrescriptions err',
        status: 500,
        message: { err: 'no cookie/error' },
      });
    });
};

// delete a prescription event from the DB and return nothing
homepageControllers.deletePrescription = (req, res, next) => {
  const username = res.locals.username;
  const { title } = req.body;
  const sqlPrescription = 'DELETE FROM pilltaker WHERE username = $1 AND title = $2';
  db.query(sqlPrescription, [username, title])
    .then((result) => {
      return next(); 
    })
    .catch(err => {
      return next({
        log: 'Express Error handler caught in updatePrescriptions err',
        status: 500,
        message: { err: 'no cookie/error' },
      });
    });
};
module.exports = homepageControllers;