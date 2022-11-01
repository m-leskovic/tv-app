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
    let page = req.query.page || 1;
    let limit = req.query.limit || 5;
    let skip = limit * (page - 1);
    let sortBy = {};
    let sort = req.query.sort;
    if (sort === "asc") {
        sortBy = { brandName: 1 }
    } else if (sort === "desc") {
        sortBy = { brandName: -1 }
    } else null;
    db.collection("brands").find().sort(sortBy).skip(skip).limit(limit).toArray((err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

app.get("/models", (req, res) => {
    let page = req.query.page || 1;
    let limit = req.query.limit || 10;
    let skip = limit * (page - 1);
    let filter = {};
    let model = req.query.model;
    let screenRange = req.query.screenRange;
    let resolution = req.query.resolution;
    let technology = req.query.technology;
    let refreshRate = req.query.refreshRate;
    if (model) filter.model = model;
    if (screenRange) filter.screenRange = screenRange;
    if (resolution) filter.resolution = resolution;
    if (technology) filter.technology = technology;
    if (refreshRate) filter.refreshRate = refreshRate;
    db.collection("models").find(filter).skip(skip).limit(limit).toArray((err, result) => {
        if(err) throw err;
        res.json(result);
    })
});
