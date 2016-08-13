var express = require('express');

var app = module.exports = express();

app.set('views', __dirname + '/app');
app.set('view engine', 'jade');
app.locals.basedir = __dirname;

app.get('/', function (req, res) {
  res.render('index', {myVar: {asdf: 'global var'}});
});

var port = 5000;
app.listen(port, () => console.log('running on ' + port));
