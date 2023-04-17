const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");
const bcrypt = require('bcrypt')
const saltRounds = 10

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
            return res.json("Insert to post was succesfull!");
        }
    });
})

app.post('/register', (req, res ) => {
    
    const password = req.body.password;
    const username = req.body.username;
    const email =  req.body.email;
    
    console.log(password);

    bcrypt.hash(password, saltRounds, (err, hash) => { // Move the closing parenthesis to the end of the callback function
       if (err) {
        console.log(err)
       }

       db.query("INSERT INTO users (username, email, password) VALUES (?,?,?)", [username, email, hash], (err, result) => {
            if (err) {
                console.log("Something went wrong");
                return res.json(err);
            } else {
                console.log("It works");
            }
        });
    }); // Close bcrypt.hash() function call with a closing parenthesis
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    db.query(
        "SELECT * FROM users WHERE email = ?;",
        [email],
        (err, result) => {
            if (err) {
                res.send({err: err});
                console.log("smt went wrong")
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        res.send({message: "You've logged in successfully "});
                    } else {
                        res.send({message: "Wrong username/password combination!"});
                    }
                })
            } else {
                res.send({message: "User doesn't exist"});
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
