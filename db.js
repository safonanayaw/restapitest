const Pool = require('pg').Pool;
const pool = new Pool({
    user: "healien",
    host: "localhost",
    database: "students",
    password: "Godfirst17$",
    port: 5432,
})

module.exports = pool;