const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deletetask,
} = require("../controllers/tasks");
const router = express.Router();

// router.get('/', getAllTasks);
// router.post('/', createTask);

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deletetask);

module.exports = router;
