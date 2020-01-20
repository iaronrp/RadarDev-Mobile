import socketio from "socket.io-client";

const socket = socketio("http://192.168.1.33:3333", {
  autoConnect: false
});

function subscribeToNewDevs(subscribeFuynction) {
  socket.on("new-dev", subscribeFuynction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
