const express = require('express');
const app = express();
const port = 1337;
let http = require("http").Server(app);

const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});

app.set("port",port);
app.use(cors());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');

    next();
});

io.on("connection", function (socket) {
   
  
});

const server = http.listen(port, function () {
    console.log("listening on *:1337");
});