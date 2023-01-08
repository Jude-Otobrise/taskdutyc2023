const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    tag:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        required: true,
    },
}, {timestamps: true}
);

module.exports = mongoose.model("Task", taskSchema);