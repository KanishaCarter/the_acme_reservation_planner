const express = require('express');
const morgan = require('morgan');
const { Client } = require('pg'); // <<=== require pg and get Client
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Database connection setup
const client = new Client({
  connectionString: 'postgres://localhost/acme_notes_categories_db'
});

// Routes (example basic one)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Init function
const init = async () => {
  try {
    // Connect to the database
    await client.connect();
    console.log('Connected to the database.');

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.error('Error starting the server:', err);
  }
};

// Invoke init function
init();
