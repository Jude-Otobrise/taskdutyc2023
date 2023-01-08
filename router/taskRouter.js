const { getTasks, createTask, getSingleTask, deleteTask, updateTask } = require("../controller/taskController");

const router = require("express").Router();


router.route("/").get(getTasks).post(createTask);
router.route("/:taskId").get(getSingleTask).delete(deleteTask).patch(updateTask);

// const {getTasks, createTask, getSingleTask, deleteTask, updateTask} = require("../controller/taskController");
// router.get("/tasks", getTasks);
// router.post("/tasks", createTask);
// router.get("/tasks/:taskId", getSingleTask);
// router.delete("/tasks/:taskId", deleteTask);
// router.patch("/tasks/:taskTag", updateTask);

module.exports = router;