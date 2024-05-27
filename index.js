const express = require("express");
const dotenv = require("dotenv");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
dotenv.config();
const todoRoutes = require("./app/routes/routes");
const port = process.env.PORT;
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("App is running..");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb", parameterLimit: 100000 }));
app.listen(port, () => {
    console.log(`Todo app Started in ${port}`);
});

app.use("/.netlify/functions/app/todo", todoRoutes);

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);
