'use strict';

const db = require('./db.js')();

db.query(`
  CREATE UNIQUE INDEX akSystemUserLogin
  ON SystemUser (Login)
`);
