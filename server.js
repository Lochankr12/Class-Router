// server.js

const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Student & Course Portal API!');
});

// Mount the routers
// Any request starting with /students will be handled by studentRoutes
app.use('/students', studentRoutes);
// Any request starting with /courses will be handled by courseRoutes
app.use('/courses', courseRoutes);

// Custom 404 Not Found Handler
// This middleware will run for any request that doesn't match a route above
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});