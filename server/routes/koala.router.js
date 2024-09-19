const express = require('express');
const router = express.Router();

const pool = require('../module/pool.js')

// DB CONNECTION


// GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM koalas ORDER BY "name";';
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
        .catch(error => {
            console.log('error getting koalas', error);
            res.sendStatus(500);
        });
});

// POST


// PUT


// DELETE

module.exports = router;