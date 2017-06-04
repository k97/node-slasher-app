const mongoose = require('mongoose');
const Journal = mongoose.model('Journal');

/**
 * Method to create Journal posts
 */
exports.createJournal = async (req, res) => {
  const payload = new Journal(req.body);
  try {
	  const journalRes = await (payload).save();
    res.json(journalRes);
  } catch (error) {
    console.log(error);
    res.status(400).json(error).end();
  }
  return res;
 };


/**
 * Method to fetch the journals from the DB
 */
exports.getJournals = async (req, res) => {
  const page = req.params.page || 1;
  const limit = req.params.limit || 6;
  const skip = (page * limit) - limit;
  try {
    const journalsPromise = Journal
      .find()
      .skip(skip)
      .limit(limit);
    const countPromise = Journal.count();
    const [journals, count] = await Promise.all([journalsPromise, countPromise]);
    const pages = Math.ceil(count/limit);
    const retVal = { journals, pages, pages, count };
    res.json(retVal);
  } catch(error) {
    res.status(400).json(error).end();
  }

  return res;
};



/**
 * Method to retrieve a store from the database
 */
exports.getJournalDetails = async (req, res, next) => {
  console.log(req.params);
  try {
    const response = await Journal.findOne({ customUrlSlug: req.params.id });
    res.json(response);
  } catch(error) {
    res.status(400).json(error).end();
  }
}
