'use strict';

const db = require('./db.js')();

db.query(`
  INSERT INTO SystemUser (Login, Password, FullName)
  VALUES ('mao', 'nopassword', 'Mao Zedong')
`);
