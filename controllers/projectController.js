const mongoose = require('mongoose');
const Project = mongoose.model('Project');

/**
 * Method to create projects by converting htmls as strings
 */
exports.createProject = async (req, res) => {
  const payload = new Project(req.body);
  try {
    const project = await payload.save();
    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(400).json(error).end();
  }
  return res;
};


/**
 * Method to fetch the projects from the DB
 */
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().select('title subtitle customUrlSlug displayDate');
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json(error).end();
  }
  return res;
};


/**
 * Method to retrieve a project store from the database
 */
exports.getProjectDetails = async (req, res, next) => {
  console.log(req.params);
  try {
    const response = await Project.findOne({ customUrlSlug: req.params.id });
    res.json(response);
  } catch (error) {
    res.status(400).json(error).end();
  }
};
