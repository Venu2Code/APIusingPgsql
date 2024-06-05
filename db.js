const Pool = require('pg').Pool;

const pool = new Pool({
    user : "vc",
    host : "localhost",
    database : "parkinglotsys",
    password :"",
    port : 5432,
});

module.exports = pool;
