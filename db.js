const pgPromise = require("pg-promise")();
const user = 'postgres';
const pswd = 'password'
const db = pgPromise({
    "host":"localhost",
    "port": 5432,
    "database":"mosaic",
    "user": `${user}`,
    "password": `${pswd}`,
})
module.exports = db;