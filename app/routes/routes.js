const { Router } = require("express");
const app = Router();

const todoAppRoutes = require("../controller/todoappController");

app.post("/setTodoList", todoAppRoutes.setTodoNotes);
app.get("/getTodoData", todoAppRoutes.getTodoData);
app.get("/getTodoDataBySearch", todoAppRoutes.getTodoDataBySearch);

module.exports = app;
