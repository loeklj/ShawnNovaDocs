const io = require('socket');
const { PORT } = process.env;

// listen on 9000 for socket
io.listen(PORT || 9000);
