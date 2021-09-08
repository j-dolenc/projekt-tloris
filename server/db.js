var Pool = require("pg").Pool;
var pool = new Pool({
    user: "jurij",
    password: "jurij",
    host: "localhost",
    port: 5432,
    database: "irgodb"
});
module.exports = pool;
