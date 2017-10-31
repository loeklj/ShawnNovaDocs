const { PORT } = process.env;
const io = require('socket.io');
const handlers = require('./core/handlers/document');

const documentChannel = ({ socketId }) => async (data) => {
  const { type, action } = JSON.parse(data);
  if (typeof handlers[type] === 'function') {
    await handlers[type](action);
  }
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

module.exports = io;
