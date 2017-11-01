# ShawnNovaDocs
NovaDocs

## Running socket.io
```
npm start
```

Navigate to `localhost:3000`.

In the console of the browser run:
```
let socket = io('localhost:9000');

// Create a doc
socket.emit('document', { type: 'create', action: { id: "test", doc: "Hello World" } });

// Update a doc
socket.emit('document', { type: 'update', action: { id: "test", doc: "Hello World and everyone else" } });

// Read the doc
socket.on('test', (...args) => console.log(...args));

socket.emit('document', { type: 'read', action: { id: "test"} });

// Output: Hello World and everyone else
```