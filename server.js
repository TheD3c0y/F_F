var express = require("express");
var body = require("body-parser");

var PORT = 8080;

var app = express();


app.use(body.urlencoded({ extended: true }));

app.use(body.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




app.listen(PORT, function() {
    console.log("Server is on", PORT);
})

