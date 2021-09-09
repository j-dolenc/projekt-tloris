const Pool = require("pg").Pool;
const pool = new Pool({
    user:"jurij",
    password:"jurij",
    host:"192.168.38.181",
    port:5432,
    database:"irgodb"
})

module.exports= pool;
