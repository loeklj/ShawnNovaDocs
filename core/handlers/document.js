const Database = require('../db/Database');
const db = new Database('~/.doc_db', 'Hello World');

module.exports = {
  create: async (action, doc) => {
    return await db.createDocument(action.id, doc);
  }
};