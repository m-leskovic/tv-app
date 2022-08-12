const { MongoClient } = require("mongodb");
require("dotenv").config();

let dbName

module.exports = {
    dbConnect: async (cb) => {
        try {
            let client = await MongoClient.connect(process.env.DB_URL);
            console.log("Connected to MongoDB");
            dbName = client.db("tvDB");
            return cb();
        }
        catch(err) {
            console.log(err);
            return cb(err);
        }
    },
    dbRef: () => dbName
}