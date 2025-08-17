// ✅ server.js (unchanged logic, but sending skillsArray to template)

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pool = require('./db');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/generate', async (req, res) => {
  try {
    const { name, email, bio, skills, achievements, projects } = req.body;
    let projectList = [];

    if (projects) {
      for (let key in projects) {
        const project = projects[key];
        projectList.push({
          title: project.title,
          description: project.description,
          tech_stack: project.tech_stack,
          project_link: project.project_link,
          skills: project.skills || ''
        });
      }
    }

    const userResult = await pool.query(
      'INSERT INTO users (name, email, bio, skills, achievements) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, bio, skills, achievements]
    );

    const userId = userResult.rows[0].id;

    for (const project of projectList) {
      await pool.query(
        'INSERT INTO projects (user_id, title, description, tech_stack, project_link, skills) VALUES ($1, $2, $3, $4, $5, $6)',
        [userId, project.title, project.description, project.tech_stack, project.project_link, project.skills]
      );
    }

    const projectResult = await pool.query('SELECT * FROM projects WHERE user_id = $1', [userId]);

    const skillsArray = skills ? skills.split(',') : [];

    res.render('template', {
      user: userResult.rows[0],
      projects: projectResult.rows,
      skillsArray
    });
  } catch (err) {
    console.error(err);
    res.send('An error occurred while generating the portfolio.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
