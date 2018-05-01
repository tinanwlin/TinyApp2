var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.end("Hellooo");
});



app.listen(PORT, () => {
  console.log(`TinyApp2 listening on port ${PORT}`);
});