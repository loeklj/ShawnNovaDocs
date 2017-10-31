const DB = require('./Database');
const db = new DB('./', 'Hello World');

(async () => {
  await db.createDocument('test');
  console.log(await db.readDocument('test'));
  await db.updateDocument('test', 'Test 2');
})();