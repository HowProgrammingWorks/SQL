'use strict';

const db = require('./db.js')({ database: 'postgres', user: 'postgres' });

db.query(`
  CREATE DATABASE application
  OWNER marcus
`);
