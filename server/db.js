const { MongoClient } = require("mongodb");

let dbName

let url = "mongodb+srv://guest_user:uwp7fkbv6BSdb35@cluster0.x4nyzl2.mongodb.net/?retryWrites=true&w=majority"

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