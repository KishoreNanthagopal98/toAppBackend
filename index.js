const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const todoRoutes = require("./app/routes/routes");
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb", parameterLimit: 100000 }));
app.listen(port, () => {
    console.log(`Todo app Started in ${port}`);
});

app.use("/todo", todoRoutes);
