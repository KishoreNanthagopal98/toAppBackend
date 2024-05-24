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
    try {
        const param = req.query;
        const response = await todoModel.getTodoData(param);
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

async function getTodoDataBySearch (req, res) {
    try {
        const param = req.query;
        const response = await todoModel.getTodoDataBySearch(param);
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports = { setTodoNotes, getTodoData, getTodoDataBySearch };
