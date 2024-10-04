const Workout = require('../models/workoutModel')
const mongoose=require('mongoose')

//get all docs
const getWorkouts = async (req,res)=>{
    const workout=await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workout)

}
//get single doc
const getWorkout =async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.json({error:'id is not valid'})
    }
    const workout=await Workout.findById(id)

    if(workout){
        res.status(200).json(workout)
    }
    else {
        res.json({error:'not found'})
    }
}

//post a doc
const createWorkout = async (req,res)=>{
    const {title,reps,load} = req.body

    try{
        const workout =await Workout.create({title,reps,load})
        res.json(workout)
    }catch(error){
        res.json({error:'could not create'})
    }
    
}

//delete a doc
const deleteWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error:"not a valid id"})
    }

    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.json({error:"no such workout"})
    }
    res.json(workout)

}

//patch a doc
const updateWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error:"not a valid id"})
    }
    
    const workout=await Workout.findOneAndUpdate({ _id : id},{
        ...req.body
    })

    if(!workout){
        return res.json({error:'no such workout'})
    }
    return res.json(workout)
}

module.exports={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
    
}