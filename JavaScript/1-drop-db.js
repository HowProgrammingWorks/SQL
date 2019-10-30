'use strict';

const db = require('./db.js')({ database: 'postgres' });

db.query(`
  DROP DATABASE application
`);
