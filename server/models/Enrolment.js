// server/models/Enrolment.js
const mongoose = require('mongoose');

const enrolmentSchema = new mongoose.Schema({
  courseId: String,
  courseTitle: String,
  userEmail: String,
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Enrolment', enrolmentSchema);