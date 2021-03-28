const knexfile = require('./knexfile');
const pgPromise = require("pg-promise")();
const user = 'postgres';
const db = pgPromise({
    "host":"localhost",
    "port": 5432,
    "database":"mosaic",
    "user": `postgres`,
    "password": "password",
})
module.exports = db;