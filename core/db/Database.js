const fs = require('fs');
const util = require('util');
const path = require('path');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

class Database {
  constructor(dbPath, defaultDocument) {
    this.directory = dbPath;
    this.defaultDocument = defaultDocument || "Edit your document";
  }

  _getDocumentPath(id) {
    return path.resolve(this.directory, id);
  }

  async createDocument(id, document) {
    console.log("Path", this._getDocumentPath(id));
    return await writeFile(this._getDocumentPath(id), document || this.defaultDocument);
  }

  async readDocument(id) {
    return (await readFile(this._getDocumentPath(id))).toString('utf8');
  }

  async updateDocument(id, data) {
    return new Promise((resolve, reject) => {
      try {
        const fd = fs.openSync(this._getDocumentPath(id), 'w+');
        fs.writeSync(fd, data);
        fs.fsyncSync(fd)
        fs.closeSync(fd);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = Database;