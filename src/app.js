const express = require('express');
const app = express();

app.use(express.json());

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
 feature/ci-test
  res.json({ message: "Task Manager API running (Lab 2)" });

 feature/routes-refactor
res.json({ message: "Welcome from ABT branch" });
 HEAD
res.json({ message: "Welcome from MAIN branch" });
res.json({ message: "Welcome from FEATURE branch" });
 feature/routes-refactor
 main
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
 main
});

// CI test change
console.log("Testing CI with a Pull Request");

// This ensures the server only listens when run directly, not when tested
if (require.main === module) {
  app.listen(3000, () => console.log("API running on port 3000"));
}

module.exports = app;