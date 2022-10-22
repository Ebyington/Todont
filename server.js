const express = require('express');
const app = express();
const sequelize = require("./config/connection");
const controllers = require("./controllers");

const Model = require("./models");

const PORT = 4201

app.get('/pika', (req, res) => {
    res.json("hi");

});

app.use("/api", controllers); 

sequelize.sync().then(() => {
app.listen(PORT, () => {
    console.log("I'm running");
});
});