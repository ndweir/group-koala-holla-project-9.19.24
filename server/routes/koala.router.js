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
// name	favorite_color	age	ready_to_transer	notes

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    const newKoala = req.body

    const queryText = `
        INSERT INTO "koalas"("name", "favorite_color", "age", "ready_to_transfer", "notes") 
        VALUES
            ($1, $2, $3, $4, $5);
    `    

    let params = [newKoala.name, newKoala.favorite_color, newKoala.age, newKoala.ready_to_transfer, newKoala.notes]
    console.log("queryText for POST /koalas", queryText)

  //  res.sendStatus(200);

    pool.query(queryText, params)
        .then((result) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log("Error making POST query for new song", err)
            res.sendStatus(500)
        })

});



// PUT


// DELETE

module.exports = router;