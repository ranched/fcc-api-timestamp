// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/timestamp/:date_string?", function (request, response) {
  const urlDateString = request.params.date_string || new Date();
  const resObj = {
    "unix": urlDateString.getTime(),
    "utc": urlDateString.toUTCString()
  };
  
  response.send(JSON.stringify(resObj));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
