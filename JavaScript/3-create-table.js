'use strict';

const db = require('./db.js')();

db.query(`
  CREATE TABLE SystemUser (
    Id        serial,
    Login     varchar(64) NOT NULL,
    Password  varchar(64) NOT NULL,
    FullName  varchar(255)
  )
`);
