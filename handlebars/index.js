var express = require('express');
var exphbs  = require('express-handlebars');
const sequelize = require("./config/config");

var app = express();
app.use(express.static("public"))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/pictures', function (req, res) {
    res.render('pic');
});

/// create route for creating a user

app.listen(3000)


/// user.