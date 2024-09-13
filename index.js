const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product.route.js")
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/products", router);

const connection_string = "mongodb://admin:admin@ac-9iokada-shard-00-00.6vogyyz.mongodb.net:27017,ac-9iokada-shard-00-01.6vogyyz.mongodb.net:27017,ac-9iokada-shard-00-02.6vogyyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-qi9hpj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connection_string).then(() => {
    console.log("Connected to db");
    app.listen(3000, () => console.log("APP LISTENS NOW"));
}).catch((e) => console.log(e));

app.get('/', (req, res) => res.send("GET API WORKED"));
