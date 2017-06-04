const express = require('express');
const router = express.Router();

const journalController = require('../controllers/journalController');


router.get('/journals', journalController.getJournals);
router.get('/journals/:id', journalController.getJournalDetails);
router.post('/journal/create', journalController.createJournal);

module.exports = router;
