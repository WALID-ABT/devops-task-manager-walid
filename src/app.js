const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
<<<<<<< HEAD
 HEAD
=======
>>>>>>> a3d3a2f (fix .gitignore instead of .gitignore.txt)
  { id: 1, title: "Initial task", completed: true },
  { id: 2, title: "Install Git and Node.js", "completed": true },
  { id: 2, title: "Learn DevOps basics", completed: false }
  
<<<<<<< HEAD
];

app.get('/', (req, res) => {
 feature/routes-refactor
res.json({ message: "Welcome from ABT branch" });
 HEAD
res.json({ message: "Welcome from MAIN branch" });
res.json({ message: "Welcome from FEATURE branch" });
 feature/routes-refactor
 main

  { id: 1, title: "Initial task", completed: false }
];

app.get('/', (req, res) => {
  res.json({ message: "Task Manager API running..." });
 94f38a0 (Initial commit - DevOps Task Manager API)
=======
];

app.get('/', (req, res) => {
  res.json({ message: "DevOps Task Manager API is running..." });
>>>>>>> a3d3a2f (fix .gitignore instead of .gitignore.txt)
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length+1, title: req.body.title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(3000, ()=> console.log("API running on port 3000"));
 HEAD

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

 94f38a0 (Initial commit - DevOps Task Manager API)
