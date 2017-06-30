const express = require('express');
const router = express.Router();

const journalController = require('../controllers/journalController');
const projectController = require('../controllers/projectController');


router.post('/journals', journalController.getJournals);
router.get('/journals/:id', journalController.getJournalDetails);
router.post('/journal/create', journalController.createJournal);

router.get('/project/:id', projectController.getProjectDetails);
router.post('/project/create', projectController.createProject);

module.exports = router;
