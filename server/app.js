/**
 * Created by lukedowell on 7/31/15.
 */
var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

//Set images
app.use(express.static("public/assets/images"));

//Set port
app.set('port', (process.env.PORT || 3000));

//Routing
app.use('/', index);

//Web server
app.listen(app.get('port'), function() {
    console.log("Now listening on port: " + app.get("port"));
});

module.exports = app;