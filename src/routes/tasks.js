const express = require('express');
<<<<<<< HEAD
const router = express.Router();
const tasks = [
  { id: 1, title: "Learn Git", completed: false },
  { id: 2, title: "Practice DevOps", completed: true }
];

router.get('/', (req, res) => {
  res.json(tasks);
});

module.exports = router;
=======
const router = express.Router(); 
const tasks = [
 { id: 1, title: "Learn Git", completed: false },
 { id: 2, title: "Practice DevOps", completed: true }
];
router.get('/', (req, res) => {
 res.json(tasks);
});
module.exports = router; 

>>>>>>> 6e759edc84d1ac5c332ca0eec8f79a324850caa4
