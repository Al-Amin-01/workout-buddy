require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workoutRoutes')

const app=express()
//middleware
app.use('/',(req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/workouts',workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //starts here
    app.listen(process.env.PORT,()=>{
        console.log('listening to port ',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})

