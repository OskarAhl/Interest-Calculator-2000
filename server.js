var express = require('express');
var app = express();

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/src'));

app.get("/", function(req,res) {
  res.render("index.html");
})


app.listen(process.env.PORT || 3000, function(){
  console.log("listening on port 3000")
});
