let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let port = 9090;

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

io.on("connection", (socket) => {
    socket.on("chat", (json) => {
        var j = JSON.parse(json);
        var name = j.name;
        var msg = j.msg;
        console.log(`Hello: ${name}\nYour: ${msg}`)
    });
});
http.listen(port);