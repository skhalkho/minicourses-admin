const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String },
  reviews: [{ title: String, content: String }],
  details_id:{type: String}
}, { timestamps: true });

// Make sure this collection name matches your actual collection (case-sensitive)
module.exports = mongoose.model('Course', courseSchema, 'Courselist');