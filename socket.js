const io = require('socket.io')(9000);
const handlers = require('./core/handlers/document');

const documentChannel = ({ socketId, socket }) => async ({ type, action }) => {
  if (typeof handlers[type] === 'function') {
    const result = await handlers[type](action);
    console.log({ result });
    if (result) socket.emit(action.id, result);
  }
};

const cncChannel = ({ socketId }) => (data) => {
  const { type, action } = JSON.parse(data);
};

io.on('connection', (socket) => {
	const socketId = socket.id;

	// attach document channel
	socket.on('document', documentChannel({ socketId, socket }));

	// attach cnc channel
  socket.on('cdc', cncChannel({ socketId, socket }));
});

io.on('disconnect', (socket) => {
	socket.broadcast.emit('disconnect', {
		data: 'You have disconnected!'
	});
});

console.log(`Socket listening on 9000`);
