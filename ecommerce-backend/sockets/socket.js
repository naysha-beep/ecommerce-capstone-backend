let io;

const initializeSocket = (server) => {

    io = require("socket.io")(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {

        console.log("User Connected");

        socket.on("disconnect", () => {
            console.log("User Disconnected");
        });

    });

};

const getIO = () => io;

module.exports = {
    initializeSocket,
    getIO
};