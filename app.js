var express = require('express');

var app = module.exports = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/app');

app.get('/var', function (req, res) {
  res.render('var/index', {myVar: 'global var'});
});
app.get('/block', function (req, res) {
  res.render('block/index', {myVar: { foo: 'bar' }});
});
app.get('/test', function (req, res) {
  res.render('test/layout', {myVar: { foo: 'bar' }});
});

var port = 5000;
app.listen(port, () => console.log('running on ' + port));
