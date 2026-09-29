const mongoose = require('mongoose')

async function dbConnection() {
    try {
        await mongoose.connect(process.env.DB_STRING)
        console.log("DB Connected");

    }
    catch (e) {
        console.error("Couldn't connect to DB")
        process.exit(1)
    }
}
module.exports = dbConnection