const db = require('./db');

const Booking = {
  create: (userId, serviceId, date, callback) => {
    const query = 'INSERT INTO bookings (userId, serviceId, date) VALUES (?, ?, ?)';
    db.query(query, [userId, serviceId, date], callback);
  }
};

module.exports = Booking;
