const express = require('express');
const app = express();
app.use(express.json());

// 1. Import and use routes (Lab 2 logic)
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

// 2. Define the root route (Tested in Lab 3)
app.get('/', (req, res) => {
    res.json({ message: "Task Manager API running (Lab2)" });
});

// 3. Export for testing and wrap listener
if (require.main === module) {
    app.listen(3000, () => console.log("API running on port 3000"));
}

module.exports = app;