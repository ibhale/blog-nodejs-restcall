// nodejs script to make call to REST endpoints, this can be integrated in Node.js RESTful service or bash scripts or consumed directly as a REST client

const fs = require('fs');
var request = require('request');
var FormData = require('form-data');

var form = new FormData();
form.append("folder_id", "0");
form.append("file", fs.createReadStream('userdata.csv'));

// post method rest call to upload a file
form.getLength(function(err, length){
  if (err) {
    return requestCallback(err);
  }

  var r = request.post("http://localhost:8080/profile/file", requestCallback);
  r._form = form;

});
// get method rest call to retrieve the data
var r = request.get("http://localhost:8080/profile/contact", requestCallback);

function requestCallback(err, res, body) {
  console.log(body);
}