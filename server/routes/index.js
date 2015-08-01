/**
 * Created by lukedowell on 8/1/15.
 */
var express = require('express');
var path = require('path');
var peopleData = require('../public/data/prime');

var router = express.Router();

//Requests prime student data
router.get('/prime', function(req, res) {
    res.send(peopleData);
});

//Catch-all
router.get('/*', function(req, res) {
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});


module.exports = router;