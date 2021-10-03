var express = require("express");
var app = express();
var path = require("path");
var port = 5000;

// serve the static files
app.use(express.static("../build"));
app.get("*", (req, res) => {
  var htmlFilePath = path.join(__dirname, "../", "build", "index.html");
  res.sendFile(htmlFilePath);
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`running on port: ${port}`);
});
