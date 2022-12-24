// import express
const express = require('express');

// import controller
const StudentController = require('../controller/StudentController');

const router = express.Router();

// membuat routing
router.get('/student', StudentController.index);
router.post('/student', StudentController.store);
router.put('/student/:id', StudentController.update);
router.delete('/student/:id', StudentController.destroy);
router.get('/student/:id', StudentController.show);

module.exports = router;
