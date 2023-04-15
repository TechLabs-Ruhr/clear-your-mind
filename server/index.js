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
    origin: "http://localhost:3002",
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
            return res.json("Insert to post was succesfull!");
        }
    });
})

app.post('/register', (req, res ) => {
    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
    ]
    
    db.query("INSERT INTO users (username, email, password) VALUES (?)", [values], (err, result) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json("Insert to users was successufull!")
        }

    })
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email + " " + password);
    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({err: err});
            }
            if (result) {
                res.send(result.length > 0);
                console.log("success")

            } else {
                res.send({message: "Wrong username/password combination!"});
            }
        }
    )
})


app.get('/api/get', (req, res) =>{
    const sqlSelect = "SELECT * FROM post"
    db.query(sqlSelect, (err, result) => {
       console.log(result);
       res.send(result);
    })
});




app.listen(3001, () => {
    console.log("Running on port 3001");
})
