const Project = require("./project_schema");

exports.projects_list = function(req, res) {
  Project.find({}, function(err, projects) {
    if (err) throw err;
    res.send(projects);
    return projects;
  });
};

// exports.project_create = function(req, res) {
//   let project = new Project({
//     name: req.body.name,
//     description: req.body.description,
//     tech: req.body.tech
//   });

//   project.save(function(err, project) {
//     if (err) {
//       console.log("Unsuccessful");
//     }
//     console.log("Saved!");
//   });
// };
