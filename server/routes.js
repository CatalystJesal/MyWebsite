const express = require("express");
const router = express.Router();

const project_controller = require("./project_controller");

router.get("/projects", project_controller.projects_list);

module.exports = router;
