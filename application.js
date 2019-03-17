const fs = require('fs');
var request = require('request');  
var r = request.get("http://localhost:8080/profile/contact", requestCallback);
function requestCallback(err, res, body) {
  console.log(body);
}