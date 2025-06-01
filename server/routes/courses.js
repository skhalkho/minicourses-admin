const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../models/Course');

// Model for Coursedetail
const Coursedetail = mongoose.model('Coursedetail', new mongoose.Schema({}, { strict: false }), 'Coursedetail');

// ✅ Model for Courselist (this is what the list page needs)
const Courselist = mongoose.model('Courselist', new mongoose.Schema({}, { strict: false }), 'Courselist');

// ✅ Route to get all courses from Courselist
router.get('/', async (req, res) => {
  try {
    const courses = await Courselist.find();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ Route to get a single Coursedetail by ID
router.get('/detail/:id', async (req, res) => {
  try {
    const detail = await Coursedetail.findById(req.params.id);
    if (!detail) {
      return res.status(404).json({ error: 'Course detail not found' });
    }
    res.json(detail);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;





