// Load required modules
const http = require('http');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Create an instance of the express app
const app = express();

// Load the greetings module
const sayHello = require('./greetings');

// Simple HTTP server using Node.js (optional, comment out if using express only)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(sayHello()); // Call the imported function from greetings.js
});

// Start the HTTP server on port 3000 (Optional)
server.listen(3000, () => {
  console.log('HTTP Server running at http://localhost:3000/');
});

// Express Server Part

// Define a simple route for Express
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// MongoDB Connection (using Express server)
const url = 'mongodb://localhost:27017';
const dbName = 'edunexus';

let db;

// Connect to MongoDB
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log('Connected to MongoDB');
  db = client.db(dbName);
});

// API to check subscription status
app.get('/check-subscription/:userId', (req, res) => {
  const userId = req.params.userId;
  const usersCollection = db.collection('users');

  // Find user subscription status in MongoDB
  usersCollection.findOne({ userId: userId }, (err, user) => {
    if (err) throw err;

    if (user && user.isSubscribed) {
      res.json({ access: true });
    } else {
      res.json({ access: false });
    }
  });
});

// Start the Express server on a different port to avoid conflict (Optional)
app.listen(3001, () => {
  console.log('Express server running at http://localhost:3001/');
});
