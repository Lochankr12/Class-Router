// routes/studentRoutes.js

const express = require('express');
const router = express.Router();

// In-memory data (replace with a database in a real application)
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// Route to get all students
// GET /students
router.get('/', (req, res) => {
  const studentNames = students.map(s => s.name).join(', ');
  res.send(`Students: ${studentNames}`);
});

// Route to get a single student by ID
// GET /students/:id
router.get('/:id', (req, res) => {
  // Find the student by ID. req.params.id is a string, so we convert it to a number.
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);

  if (student) {
    res.send(`Student: ${student.name}`);
  } else {
    // If no student is found, send a 404 Not Found status
    res.status(404).send('Student not found');
  }
});

module.exports = router;