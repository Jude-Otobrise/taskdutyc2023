const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const taskRouter = require("./router/taskRouter");
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Router
app.use("/tasks", taskRouter);

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    app.listen (PORT, () => {
        console.log(`app is listening on port ${PORT} and database connected`)
    });
})
.catch ((err) => {
    console.log (err);
});

app.use((req, res) => {
   res.send(`Route not found, try "/tasks"`) 
})