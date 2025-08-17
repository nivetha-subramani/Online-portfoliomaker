const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',           // your pgAdmin username
  host: 'localhost',
  database: 'portfolio',      // the DB you created
  password: 'postgres123',  // ⚠️ change this to your pgAdmin password
  port: 5432,
});

module.exports = pool;
// INSERT user with skills & achievements
const insertUserQuery = `
  INSERT INTO users (name, email, bio, skills, achievements)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id
`;

// Fetch user details
const getUserQuery = `
  SELECT * FROM users WHERE id = $1
`;
