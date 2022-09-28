const db = require('../userModel');
const jwt = require('jsonwebtoken');
const loginControllers = {};

//Create a new user
loginControllers.createUser = (req, res, next) => {
  const { username } = req.body;

  //check that all fields are not empty
  if(!username) return next({
    log: 'Express Error handler caught in createUser err',
    status: 500,
    message: { err: 'field is empty' },
  });

  //signup user
  const sql_userInsert = 'INSERT INTO users (username) VALUES ($1)' ;
  db.query(sql_userInsert, [username])
    .then((result) => {
      res.locals.userCreated = 'user has been created';
      return next(); 
    })
    .catch(err => {
      return next({
        log: 'Express Error handler caught in createUser err',
        status: 500,
        message: { err: 'user already exists' },
      });
    });
};


//Verify the user by checking the database
loginControllers.verifyUser = (req, res, next) => {
  const { username } = req.body;
  const sqlVerify = 'SELECT username FROM users WHERE username = $1';
  db.query(sqlVerify, [username])
    .then((result) => {
      res.locals.username = result.rows[0];
      return next(); 
    })
    .catch(err => {
      return next({
        log: 'Express Error handler caught in verifyUser err',
        status: 500,
        message: { err: 'wrong username' },
      });
    });
};


//Create a token to give authorization.
loginControllers.createToken = (req, res, next) => {
  const { username } = req.body;
  jwt.sign({username}, process.env.JWT_SECRET, { expiresIn: '72h'}, (err, token) => {
    res.locals.token = {token};
    res.cookie('authorization', token, { HttpOnly: true});
    return next();
  })
}


//Verify token and send username.
loginControllers.verifyToken = (req, res, next) => {
  const token = req.cookies.authorization;
  if(token !== undefined) {
    res.locals.token = token;
  } else {
    return next({
      log: 'Express error handler caught in loginControllers.verifyToken middleware error',
      status: 401,
      message: { err: 'Could not connect to the protected route' },
    });
  }
  jwt.verify(res.locals.token, process.env.JWT_SECRET, (err, authorizedData) => {
    if(err){
      return next({
        log: 'Express error handler caught in loginControllers.verifyToken middleware error',
        status: 401,
        message: { err: 'Could not connect to the protected route' },
      });
    } else {
      //If token is successfully verified, we can send the autorized data 
      res.locals.username = authorizedData.username;
      return next();
    }
  });
}





module.exports = loginControllers;