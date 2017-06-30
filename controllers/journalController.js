const mongoose = require('mongoose');
const Journal = mongoose.model('Journal');

/**
 * Method to create Journal posts
 */
exports.createJournal = async (req, res) => {
  const payload = new Journal(req.body);
  try {
    const journalRes = await payload.save();
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
  const page = req.body.page || 1;
  const limit = req.body.limit || 6;
  const skip = page * limit - limit;
  const type = req.body.type || {};
  const journalsPromise = Journal.find(type).sort('-displayDate').skip(skip).limit(limit).select('title customUrlSlug blurb tags type displayDate');
  const countPromise = Journal.find(type).count();
  try {
    const [journals, count] = await Promise.all([
      journalsPromise,
      countPromise
    ]);
    const pages = Math.ceil(count / limit);
    const retVal = { journals, pages, pages, count };
    res.status(200).json(retVal);
  } catch (error) {
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
  } catch (error) {
    res.status(400).json(error).end();
  }
};
