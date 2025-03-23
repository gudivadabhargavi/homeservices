const Service = require('../models/serviceModel');

exports.getAllServices = (req, res) => {
  Service.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
