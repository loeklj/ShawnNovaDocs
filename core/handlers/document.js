const Database = require('../db/Database');
const db = new Database('~/.doc_db', 'Hello World');

module.exports = {
  create: async ({ id, doc }) => {
    return await db.createDocument(id, doc);
  },
  read: async ({ id }) => {
    return await db.readDocument(id, doc);
  },
  update: async ({ id, doc }) => {
    return await db.updateDocument(id, doc);
  }
};