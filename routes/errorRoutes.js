const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('error', {title: "Error"});
});

module.exports = router;