// routes/express/routing/simple-route.js

const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
        res.send('this is a simple route!');
});

module.exports = router;

