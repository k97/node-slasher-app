const express = require('express');
const router = express.Router();

const journalController = require('../controllers/journalController');
const projectController = require('../controllers/projectController');
const authController = require('../controllers/authController');


router.post('/journals', journalController.getJournals);
router.get('/journals/:id', journalController.getJournalDetails);
router.post('/journal/create', journalController.createJournal);

router.get('/project/:id', projectController.getProjectDetails);
router.post('/project/create', projectController.createProject);


router.post('/passphrase/login', authController.login);

module.exports = router;
