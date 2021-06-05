const Pool = require("pg").Pool 

// connect database dengan setting berikut
const pool = new Pool({
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432, 
    database: process.env.DB_NAME || "kosutan"
})

module.exports = pool