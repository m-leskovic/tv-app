const { dbConnect, dbRef } = require("./db");

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

let db

dbConnect(cb => {
    !cb &&
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    db = dbRef();
});

app.get("/brands", (req, res) => {
    db.collection("brands").find().toArray((err, result) => {
        if(err) throw err;
        res.json({brand: result});
    }) 
});

app.get("/models", (req, res) => {
    db.collection("models").find().toArray((err, result) => {
        if(err) throw err;
        res.json({model: result});
    }) 
});