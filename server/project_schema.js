var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var projectSchema = new Schema(
  {
    name: String,
    description: String,
    tech: String
  },
  { collection: "project" }
);

module.exports = mongoose.model("Project", projectSchema);
