const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
  console.log('user connected');
});

server.listen(3000, () => {
  console.log('SErver running on port 3000');
});
