const Project = require("../../server/project_schema");



try {
    module.exports = (req, res) => {
      Project.find((err, projects) => {
    
        res.send(projects);
      });
    };
  } catch (ex) {
    console.log("API Error", ex);
  }