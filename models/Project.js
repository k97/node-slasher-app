const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: "Please enter project title"
	},
  customUrlSlug:{
    type: String,
		trim: true,
    required: "Please enter a custom url to display"
  },
  blurb:{
		type: String,
		trim: true,
		required: "Please enter project blurb for listing page"
  },
	content: {
		type: String,
		time: true,
    required: "Please enter a project content"
	},
	displayDate: {
		type: Date,
    required: "Please enter the project date to display"
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Project', projectSchema);
