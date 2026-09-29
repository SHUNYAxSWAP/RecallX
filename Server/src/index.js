require("dotenv").config({
    path: "../.env"
});
const express = require('express');
const { userRouter } = require('./routes/auth.js');

const app = express();
const dbConnetion = require('./config/db.js')

app.use(express.json())
app.use("/", userRouter)

app.listen(process.env.PORT, () => {
    console.log("App is running in the port  http://localhost:" + process.env.PORT)
})
dbConnetion();
