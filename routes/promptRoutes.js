const express = require('express');
const router = express.Router();
const { aiAnswer, upload } = require('../controllers/promptController');

router.post('/', upload.single('file'), aiAnswer);

module.exports = router;