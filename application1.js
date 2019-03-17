const fs = require('fs');
var request = require('request');
var FormData = require('form-data');

var form = new FormData();
form.append("folder_id", "0");
form.append("file", fs.createReadStream('IMG_4318.JPG'));

form.getLength(function(err, length){
  if (err) {
    return requestCallback(err);
  }

  var r = request.post("http://localhost:8080/profile/file", requestCallback);
  r._form = form;     

});

function requestCallback(err, res, body) {
  console.log(body);
}