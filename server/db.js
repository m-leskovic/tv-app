const { MongoClient } = require("mongodb");

let dbName

/* Replace <username> and <password> with your own MongoDB information */
let url = "mongodb+srv://<username>:<password>@cluster0.x4nyzl2.mongodb.net/?retryWrites=true&w=majority"

module.exports = {
    dbConnect: async (cb) => {
        try {
            let client = await MongoClient.connect(url);
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