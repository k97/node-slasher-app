const mongoose = require("mongoose");
const Journal = mongoose.model("Journal");

/**
 * Method to fetch the journals from the DB
 */
exports.getProjects = async (req, res) => {
  const page = req.body.page || 1;
  const limit = req.body.limit || 6;
  const skip = page * limit - limit;
  const type = req.body.type || {};
  const journalsPromise = Journal.find(type).skip(skip).limit(limit).select('title customUrlSlug blurb tags type');
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
exports.getProjectDetails = async (req, res, next) => {
  console.log(req.params);
  try {
    const response = await Journal.findOne({ customUrlSlug: req.params.id });
    res.json(response);
  } catch (error) {
    res.status(400).json(error).end();
  }
};
