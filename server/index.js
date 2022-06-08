const express = require('express')
const app = express();
const mysql = require('mysql');
const bodyParser = require("body-parser");
// const Cors = require("cors");
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'spotify'
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
    
app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM listing";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.post("/api/insert", (req, res) => {
    const song = req.body.song;
    const dateofrelease = req.body.dateofrelease
    const artists = req.body.artists

    const sqlInsert = "INSERT INTO listing (song, dateofrelease, artists) VALUES (?,?,?);";
    db.query(sqlInsert, [song, dateofrelease, artists], (err, result) => {
        console.log(result)
    });
});

app.listen(3001, () => {
    console.log('ruuning on port 3001');
});