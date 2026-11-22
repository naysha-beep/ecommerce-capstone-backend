let io;

const initSocket = (server) => {

    io = require("socket.io")(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {
        console.log("User Connected");
    });

};

const getIO = () => io;

module.exports = {
    initSocket,
    getIO
};