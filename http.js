var http = require  ('http');

http.get(process.argv[2], callback);

function callback(response) {
  response.setEncoding('utf8');
  response.on("data", httpData);
  response.on("error", httpError);
  response.on("end", httpEnd);
}

function httpData(data) {
  console.log(data);
}

function httpError(err) {
  console.error(err);
}

function httpEnd() {
  //do  nothing
}
