const express = require('express');
const { userRouter } = require('./Routes/user.js');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use(express.json())
app.use("/", userRouter)

async function main() {
    await mongoose.connect(process.env.DB_STRING)
    console.log("DB Connected");
    app.listen(process.env.PORT, () => {
        console.log("App is running in the port  http://localhost:" +process.env.PORT)
    })
}

main()
