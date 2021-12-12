const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "pgsql",
    database: "praks",
    host: "localhost",
    port: "5432"
});
module.exports = pool;
