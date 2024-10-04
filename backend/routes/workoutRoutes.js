const express=require('express')
const Workout=require('../models/workoutModel')
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const router= express.Router()

router.use(express.json())
//Get all docs
router.get('/',getWorkouts)

//get single doc
router.get('/:id',getWorkout)

//post a doc
router.post('/',createWorkout)

//delete a doc
router.delete('/:id',deleteWorkout)

//update a doc
router.patch('/:id',updateWorkout)
module.exports=router