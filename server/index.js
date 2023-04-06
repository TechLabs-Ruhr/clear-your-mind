const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'clearYourMind391',
    database: 'cruddatabase'
})

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200 
  }));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));


app.post("/api/insert", (req, res)=> {
    const values = [
        req.body.username,
        req.body.postTime,
        req.body.title,
        req.body.description
    ];


    const sqlInsert = "INSERT INTO post (username, postTime, title, description) VALUES (?)"; 
    db.query(sqlInsert, [values], (err, result) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json("Insert was succesfull!");
        }
    });
})


/*
app.get('/', (req, res) =>{
    const sqlInsert = "INSERT INTO post (userid, username, postTime, title, description) VALUES ('1'), ('bob'), ('2023-04-06'), ('test'), ('lorem ipsum')"
    db.query(sqlInsert, (err, result) => {
        res.send("Hello world");
    })
});
*/


app.listen(3001, () => {
    console.log("Running on port 3001");
})
