const db = require('./db');

const Service = {
  getAll: (callback) => {
    const query = 'SELECT * FROM services';
    db.query(query, callback);
  }
};

module.exports = Service;
