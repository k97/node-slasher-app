const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const journalSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: "Please enter journal title"
	},
	customUrlSlug: {
		type: String,
		time: true,
    required: "Please enter a custom url to display"
	},
	tags: [String],
	created: {
		type: Date,
		default: Date.now
	},
	displayDate: {
		type: String,
    required: "Please enter a date to display"
	},
  type: {
    type: String,
    requried: "Please select a journal type"
  },
  blurb: {
    type: String,
    required: "Please enter a blurb for list page"
  },
  summary: {
    type: String
  },
  content: {
    type: String
  },
  "published": {
    type: Boolean
  }
});

//Stored schema methods
journalSchema.statics.getTagsList = function(){
	return this.aggregate([
		{ $unwind: '$tags' },
		{ $group: { _id: '$tags', count: { $sum : 1 } } },
		{ $sort: {count: -1} }
	]);
}

module.exports = mongoose.model('Journal', journalSchema);
