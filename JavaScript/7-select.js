'use strict';

const db = require('./db.js')();

db.query('SELECT * FROM SystemUser');
