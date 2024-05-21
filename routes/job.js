const express = require('express');
const jobController = require('../controllers/job');
const router = express.Router();

//create routes

router.post('/api/jobs', jobController.createJob);

//List jobs

router.get('/api/jobs', jobController.listJob)

//update jobs

router.put('/api/jobs/:id', jobController.editJob);

//delete jobs

router.delete('/api/jobs/:id', jobController.deleteJob);


module.exports = router;