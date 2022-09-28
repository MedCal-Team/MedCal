const db = require('../userModel');
const jwt = require('jsonwebtoken');

const loginControllers = {};

loginControllers.createUser = (req, res, next) => {
  const { username } = req.body;
  console.log(username);

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


//INPUT: object => {user: 'string'}
//OUTPUT: 1)if not a user then send status 200 and redirect.  2) send object with user info {name, ect...} to next middleware.
loginControllers.verifyUser = (req, res, next) => {
  console.log('entered verifyUser');
  const { username } = req.body;
  const sqlVerify = 'SELECT username FROM users WHERE username = $1';
  db.query(sqlVerify, [username])
    .then((result) => {
      res.locals.username = result.rows[0];
      return next(); 
    })
    .catch(err => {
      console.log('entered errror')
      return next({
        log: 'Express Error handler caught in verifyUser err',
        status: 500,
        message: { err: 'wrong username' },
      });
    });
};


loginControllers.createToken = (req, res, next) => {
  console.log('entered create token');
  const { name } = req.body;
  jwt.sign({name}, process.env.JWT_SECRET, { expiresIn: '72h'}, (err, token) => {
    res.locals.token = {token};
    console.log(token);
    res.cookie('authorization', token, { HttpOnly: true});
    next();
  })
}


loginControllers.verifyToken = (req, res, next) => {
  console.log('entered verify token');
  //check for token
  console.log('part2');
  console.log(res.cookies);
  console.log('authorization', res.cookie.authorization);
  const token = res.cookie.authorization;
  if(typeof token !== 'undefined') {
    req.locals.token = token;
  } else {
    console.log('cookie is undefined')
    return next({
      log: 'Express error handler caught in loginControllers.verifyToken middleware error',
      status: 401,
      message: { err: 'Could not connect to the protected route' },
    });
  }

  jwt.verify(req.locals.token, process.env.JWT_SECRET, (err, authorizedData) => {
    if(err){
      console.log('ERROR: Could not connect to the protected route');
      return next({
        log: 'Express error handler caught in loginControllers.verifyToken middleware error',
        status: 401,
        message: { err: 'Could not connect to the protected route' },
      });
    } else {
      console.log('at the end.... check res.locals.username')
      //If token is successfully verified, we can send the autorized data 
      res.locals.username = authorizedData.name;
      console.log('SUCCESS: Connected with data');
      return next();
    }
  });
}





module.exports = loginControllers;