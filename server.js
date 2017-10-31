const io = require('socket.io');
const { PORT } = process.env;

// listen on 9000 for socket
io.listen(PORT || 9000);
