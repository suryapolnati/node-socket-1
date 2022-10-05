const { Server } = require("socket.io");

const io = new Server();

io.on("connection", (socket) => {
    io.emit('connected', 'client connected');
});

io.listen(1337);