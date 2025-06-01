const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const courseRoutes = require('./routes/courses');
const Enrolment = require('./models/Enrolment');
const app = express();
const PORT = 5000;
const enrolmentRoutes = require('./routes/Enrolments');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/DemosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


// Example: POST /api/enrolments
app.post('/api/enrolments', async (req, res) => {
  const { courseId, courseTitle, userEmail } = req.body;

  if (!courseId || !userEmail) {
    return res.status(400).json({ error: 'Missing course ID or user email' });
  }

  try {
    // Optionally: save to MongoDB
    const newEnrolment = {
      courseId,
      courseTitle,
      userEmail,
      enrolledAt: new Date()
    };

    // Save to DB (assuming a Mongo collection)

await Enrolment.create(newEnrolment);

    res.status(201).json({ message: 'Enrolment successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.use('/api/courses', courseRoutes);
app.use('/api/Enrolments', enrolmentRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

