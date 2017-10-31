const io = require('socket.io')(9000);

const documentChannel = ({ socketId }) => (data) => {
  const { type, action } = JSON.parse(data);
  console.log({ type });
};

const cncChannel = ({ socketId }) => (data) => {
  const { type, action } = JSON.parse(data);
};

io.on('connection', (socket) => {
	const socketId = socket.id;

	// attach document channel
	socket.on('document', documentChannel({ socketId }));

	// attach cnc channel
  socket.on('cdc', cncChannel({ socketId }));
});

io.on('disconnect', (socket) => {
	socket.broadcast.emit('disconnect', {
		data: 'You have disconnected!'
	});
});
