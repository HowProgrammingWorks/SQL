'use strict';

const db = require('./db.js')();

db.query(`
  ALTER TABLE SystemUser
  ADD CONSTRAINT pkSystemUser
  PRIMARY KEY (Id)
`);
