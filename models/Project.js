const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: "Please enter project title"
	},
  subtitle:{
		type: String,
		trim: true,
		required: "Please enter project subtitle"
  },
	content: {
		type: String,
		time: true,
    required: "Please enter a project content"
	},
	created: {
		type: Date,
		default: Date.now,
    required: "Please enter the project date to display"
	}
});

module.exports = mongoose.model('Project', projectSchema);
