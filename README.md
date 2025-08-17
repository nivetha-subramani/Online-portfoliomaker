# Portfolio Generator

A modern, mobile-friendly personal portfolio generator built with Node.js, Express, EJS, and PostgreSQL.

## Features
- User-friendly form to input your profile, skills, achievements, and projects
- Generates a beautiful, responsive portfolio page
- Download your portfolio as a PDF
- Animated, professional UI

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL

### Setup
1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your PostgreSQL database:
   - Create a database named `portfolio`.
   - Create the required tables:
     ```sql
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100),
       bio TEXT,
       skills TEXT,
       achievements TEXT
     );
     CREATE TABLE projects (
       id SERIAL PRIMARY KEY,
       user_id INTEGER REFERENCES users(id),
       title VARCHAR(100),
       description TEXT,
       tech_stack VARCHAR(100),
       project_link VARCHAR(200),
       skills VARCHAR(200)
     );
     ```
   - Update your PostgreSQL credentials in `db.js` if needed.

4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Deployment
You can deploy this app to platforms like Railway, Render, or Heroku. Make sure to set up a PostgreSQL database and update your environment variables accordingly.

## License
MIT
