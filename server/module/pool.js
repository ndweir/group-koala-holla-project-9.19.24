const pg = require('pg')

const pool = new pg.pool({
    database: 'koala_database',
    host: 'localhost',
    port: 5432
})

module.exports = pool;