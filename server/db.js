var Pool = require("pg").Pool;
var pool = new Pool({
    user: "juri",
    password: "aaa",
    host: "192.168.38.181",
    port: 5432,
    database: "irgodb"
});
module.exports = pool;
