const express = require('express');
const app = express();
app.use(express.json());

// 1. Import the router (MUST come before app.use)
const tasksRouter = require('./routes/tasks');

// 2. Use the router
app.use('/tasks', tasksRouter);

// 3. Define the root route (The one Jest is testing)
app.get('/', (req, res) => {
    res.json({ message: "Task Manager API running (Lab2)" });
});

// 4. Export the app and wrap the listener (Required for Lab 3)
if (require.main === module) {
    app.listen(3000, () => console.log("API running on port 3000"));
}

module.exports = app;