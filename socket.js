const io = require('socket.io')

const documentChannel = ({ socketId }) => (data) => {
	const dataJSON = JSON.parse(data);
});

const cncChannel = ({ socketId })) => (data) => {
	const dataJSON = JSON.parse(data);
});


io.on('connection', (socket) => {
	const socketId = socket.id;

	// attach document channel
	socket.on('document', documentChannel({ socketId }));

	// attach cnc channel
	socket.on('cdc', cncChannel({ socketId }));
}

io.on('disconnect', (socket) => {
	socket.broadcast.emit('disconnect', {
		data: 'You have disconnected!'
	});
});


export.default = io;
