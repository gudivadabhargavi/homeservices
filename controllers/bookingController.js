const Booking = require('../models/bookingModel');

exports.bookService = (req, res) => {
  const { userId, serviceId, date } = req.body;

  Booking.create(userId, serviceId, date, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Service booked successfully' });
  });
};
