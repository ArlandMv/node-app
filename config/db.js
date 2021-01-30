const mongoose = require('mongoose');
//0.0.0.0 whitelisted
const connectDB = async () => {
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false    
        })
        console.log(`MongoDB Host: ${conn.connection.host}`);
    } catch (error) {
        console.log('db.js error');
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB

/*https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);*/