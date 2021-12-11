const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "09121290",
    database: "praks",
    host: "localhost",
    port: "5432"
});
module.exports = pool;
