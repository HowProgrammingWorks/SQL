'use strict';

const db = require('./db.js')('application');

db.query('SELECT * FROM SystemUser');
