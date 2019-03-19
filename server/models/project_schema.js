var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProjectSchema = new Schema(
  {
    name: String,
    description: String,
    tech: String
  },
  { collection: "project" }
);

module.exports = mongoose.model("Project", ProjectSchema);
