// db.js
const { Pool } = require('pg');  // Import the pg module

// Create a pool of connections to the database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Make sure to set this environment variable
  ssl: { rejectUnauthorized: false },  // Supabase requires SSL for connections
});

// Export the pool to use in other parts of your app
module.exports = pool;
