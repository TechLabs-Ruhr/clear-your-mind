const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Deadrazer3',
    database: 'cruddatabase'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));


app.post("/api/insert", (req, res)=> {
    
    const id = req.body.id;
    const userid = req.body.username;
    const postTime = req.body.postTime
    const username = req.body.userName;
    const title = req.body.title;
    const description = req.body.description;

    const sqlInsert = "INSERT INTO post (id, userid, username, postTime, title, description) VALUES (?,?)"; 
    db.query(sqlInsert, [id, userid, username, postTime, title, description], (err, result) => {
        console.log(result);
        console.log(err);
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