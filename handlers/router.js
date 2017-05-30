const express = require('express');
const router = express.Router();

const async = require('async');

router.get('/journal/:jid', (req, res) => {
  request
    .get('host/journal/' + req.params.id)
    .end((err, response) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(200).json(response.body);
    });
});

module.exports = router;
