var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var NodeAPI = require("easynodeapi")

http.createServer(function (req, res) {
    var API = NodeAPI(req,res);
    API.OnUrl("GET","/",function(){
        API.View("./index.html");
    })
    API.OnUrl("GET","/time",function(data){

        API.View("./static/time.html")
    })
    API.Default(function(){
        API.File("./static/" + req.url);
    })
    API.Server();
}).listen(3000);