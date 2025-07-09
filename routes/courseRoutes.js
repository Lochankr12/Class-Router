// routes/courseRoutes.js

const express = require('express');
const router = express.Router();

// In-memory data
const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// Route to get all courses
// GET /courses
router.get('/', (req, res) => {
  const courseNames = courses.map(c => c.name).join(', ');
  res.send(`Courses: ${courseNames}`);
});

// Route to get a single course by ID
// GET /courses/:id
router.get('/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);

  if (course) {
    res.send(`Course: ${course.name}, Description: ${course.description}`);
  } else {
    res.status(404).send('Course not found');
  }
});

module.exports = router;