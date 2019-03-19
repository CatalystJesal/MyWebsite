const Project = require("../models/project_schema");

exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.projects_list = function(req, res) {
  var documents = Project.find({}, function(err, docs) {
    if (err) throw err;
    res.send(docs);
    return docs;
  });
};

exports.project_create = function(req, res) {
  let project = new Project({
    name: req.body.name,
    description: req.body.description,
    tech: req.body.tech
  });

  project.save(function(err, project) {
    if (err) {
      console.log("Unsuccessful");
    }
    console.log("Saved!");
  });
};
