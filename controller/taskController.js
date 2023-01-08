const Tasks = require("../model/taskModel");


const getTasks = async(req, res) => {
    try {
        const tasks = await Tasks.find();
        res.status(200).json({data: tasks});
    } catch (error) {
        // res.status(500).json({message: "Error occured"});
        console.log(error);
    }
};


    const createTask = async(req, res) => {
    try {
        const task = await Tasks.create(req.body);
        res.status(201).json({message: "New task added", data: task});
    } catch (error) {
        // res.status(500).json({message: "Error occured"});
        console.log(error);
    }
};

const getSingleTask = async (req, res) => {
    try {
        const{taskId} = req.params;
        const task = await Tasks.findById({ _id: taskId});
        res.status(200).json({data: task});
    } catch (error) {
        // res.status(500).json({message: "Error occured"});
        console.log(error);
    }
};

const deleteTask = async(req, res) =>{
    try {
        const{taskId} = req.params;
        const task = await Tasks.findByIdAndDelete({ _id: taskId});
        res.status(201).json({message: "Task has been deleted"});
    } catch (error) {
        console.log(error);
    }
};

const updateTask = async(req, res) => {
    try {
        const{taskId} = req.params;
        const task = await Tasks.findByIdAndUpdate({ _id: taskId},
        req.body, {new: true, runValidators: true});
        res.status(200).json({message: "Task updated", data: task}); 
    } catch (error) {
        console.log(error);
    }
};


module.exports = {getTasks, createTask, getSingleTask, deleteTask, updateTask};