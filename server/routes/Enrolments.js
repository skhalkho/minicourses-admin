const express = require('express');
const router = express.Router();
const Enrolment = require('../models/Enrolment');

// GET /api/enrolments - Fetch all enrolments
router.get('/', async (req, res) => {
  try {
    const enrolments = await Enrolment.find();
    res.json(enrolments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch enrolments' });
  }
});

module.exports = router;