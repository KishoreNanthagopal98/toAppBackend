const todoModel = require("../model/todoappModel");

async function setTodoNotes (req, res) {
    try {
        const param = req.body;
        const getResponse = await todoModel.todoSet(param);
        res.status(200).send(getResponse);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

async function getTodoData (req, res) {
    const param = req.query;
    const response = await todoModel.getTodoData(param);
    res.status(200).send(response);
}


module.exports = { setTodoNotes, getTodoData };

