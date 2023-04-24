const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5011;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));
const pool = require('./modules/pool.js')

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    console.log(`POST;`, req.body);
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [
        req.body.feelings, 
        req.body.understandings, 
        req.body.supports, 
        req.body.comments
    ]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in POST: ${error}`);
        res.sendStatus(500);
    })
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});