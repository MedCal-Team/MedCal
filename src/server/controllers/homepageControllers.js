const db = require('../userModel');

const homepageControllers = {};

homepageControllers.getPrescriptions = (req, res, next) => {
  const username = res.locals.username;
  // const {username} = req.body;
  console.log('entered getpresc', username);
  const sqlPrescription = 'SELECT * FROM pilltaker WHERE username = $1';
  db.query(sqlPrescription, [username])
    .then((result) => {
      res.locals.prescriptions = result.rows;
      console.log(result.rows);
      return next(); 
    })
    .catch(err => {
      console.log('entered error');
      return next({
        log: 'Express Error handler caught in getPrescriptions err',
        status: 500,
        message: { err: 'no cookie/error' },
      });
    });
};

homepageControllers.createPrescription = (req, res, next) => {
  const username = res.locals.username;
  const {description, frequency, taketime, startdate, quantity, title} = req.body;
  // const {username} = req.body;
  console.log('entered postpresc', username);
  const sqlPrescription = 'INSERT INTO pilltaker(username, description, frequency, taketime, startdate, quantity, title) VALUES($1,$2,$3,$4,$5,$6,$7)';
  db.query(sqlPrescription, [username, description, frequency, taketime, startdate, quantity, title])
    .then((result) => {
      res.locals.prescriptions = result.rows;
      console.log(result.rows);
      return next(); 
    })
    .catch(err => {
      console.log('entered error');
      return next({
        log: 'Express Error handler caught in postPrescriptions err',
        status: 500,
        message: { err: 'no cookie/error' },
      });
    });
};

homepageControllers.updatePrescription = (req, res, next) => {
  const username = res.locals.username;
  const {description, frequency, taketime, startdate, quantity, title} = req.body;
  // const {username} = req.body;
  console.log('entered postpresc', username);
  const sqlPrescription = 'UPDATE pilltaker SET description = $2, frequency = $3, taketime = $4, startdate = $5, quantity= $6, title = $7 WHERE username = $1';
  db.query(sqlPrescription, [username, description, frequency, taketime, startdate, quantity, title])
    .then((result) => {
      res.locals.prescriptions = result.rows;
      console.log(result.rows);
      return next(); 
    })
    .catch(err => {
      console.log('entered error');
      return next({
        log: 'Express Error handler caught in updatePrescriptions err',
        status: 500,
        message: { err: 'no cookie/error' },
      });
    });
};

homepageControllers.deletePrescription = (req, res, next) => {
  const username = res.locals.username;
  const { title } = req.body;
  // const {username} = req.body;
  console.log('entered deletepresc', username);
  const sqlPrescription = 'DELETE FROM pilltaker WHERE username = $1 AND title = $2';
  db.query(sqlPrescription, [username, title])
    .then((result) => {
      res.locals.prescriptions = result.rows;
      console.log(result.rows);
      return next(); 
    })
    .catch(err => {
      console.log('entered error');
      return next({
        log: 'Express Error handler caught in updatePrescriptions err',
        status: 500,
        message: { err: 'no cookie/error' },
      });
    });
};
module.exports = homepageControllers;