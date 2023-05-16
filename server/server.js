const { dbConnect, dbRef } = require("./db");
const { ObjectId } = require("mongodb");

const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;

let db;

dbConnect((cb) => {
  !cb &&
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  db = dbRef();
});

app.get("/brands", (req, res) => {
  let page = req.query.p || 1;
  let limit = req.query.limit || 5;
  let skip = limit * (page - 1);
  let sortBy = {};
  let sort = req.query.sort;

  if (sort === "asc") {
    sortBy = { brandName: 1 };
  } else if (sort === "desc") {
    sortBy = { brandName: -1 };
  } else null;

  db.collection("brands")
    .find()
    .sort(sortBy)
    .skip(skip)
    .limit(limit)
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

app.get("/brands/count", (req, res) => {
  db.collection("brands")
    .countDocuments({})
    .then((result) => res.json(result));
});

app.get("/models", (req, res) => {
  let page = req.query.p || 1;
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

  db.collection("models")
    .find(filter)
    .skip(skip)
    .limit(limit)
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

app.get("/models/count", (req, res) => {
  db.collection("models")
    .countDocuments({})
    .then((result) => res.json(result));
});

app.get("/models/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("models")
      .findOne({ _id: ObjectId(req.params.id) })
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ err: "Could not find the model" })
      );
  } else {
    res.status(500).json({ err: "Invalid document id" });
  }
});

app.post("/models", (req, res) => {
  const model = req.body;
  db.collection("models")
    .insertOne(model)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create a new model" });
    });
});

app.patch("/models/:id", (req, res) => {
  const update = req.body;
  if (ObjectId.isValid(req.params.id)) {
    db.collection("models")
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: update })
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ err: "Could not update the model" })
      );
  } else {
    res.status(500).json({ err: "Invalid document id" });
  }
});

app.delete("/models/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("models")
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ err: "Could not delete the model" })
      );
  } else {
    res.status(500).json({ err: "Invalid document id" });
  }
});
