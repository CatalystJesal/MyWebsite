var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var projectSchema = new Schema(
  {
    name: String,
    description: String,
    tech: String
  },
  { collection: "Projects" }
);


module.exports =  mongoose.model("Project") || mongoose.model("Project", projectSchema);
