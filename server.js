const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {

    console.log("Request at : " + req.url);


    if(req.url.startsWith("/static/")) {
        debugger;
        fs.readFile(req.url.substr(1), (err, data) => {
            if(err){
                console.log("File not found")
                res.statusCode = 404;
                res.end();
                return;
            }

            res.end(data);
        });
        return;
    }


    res.end("NodeJs server responded.");

}).listen(3000, "127.0.0.1", () => {
    console.log("server started on port localhost:3000");
});
