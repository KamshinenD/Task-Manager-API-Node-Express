const Task= require('../models/task')

const getAllTasks= async (req, res)=>{
    // res.send('MY ALL ITEMS')
    try{
        const tasks= await Task.find({})
        res.status(200).json({msg: 'tasks retrieved successfully', tasks})
    } catch(error){
        res.status(500).json({msg:error})
    }
};

const createTask= async (req, res)=>{
    // if(!req.body.name){
    //     return res.status(400).json({msg: 'name is required'})
    // }

    // if (typeof req.body.isCompleted === "undefined"){
    //     return res.status(400).json({msg: 'isCompleted status must be provided'})
    // }
    // if (typeof req.body.isCompleted !== "boolean"){
    //     return res.status(400).json({msg: 'isCompleted status must be a boolean value'})
    // }
    try{
        const task= await Task.create(req.body)
        res.status(201).json({msg: 'created successfully', task:task})
        // res.json(req.body)
    } catch(error){
        res.status(400).json({msg:error})
    }
}
const getTask=async (req, res)=>{
    // res.json({id:req.params.id})
        try{
             const {id:taskID}=req.params;
             const task= await Task.findOne({_id:taskID})
             if(!task){
                return res.status(404).json({msg:'task does not exist'})
             }
             res.status(200).json({msg: 'task retrieved successfully', task})
         } catch(error){
             res.status(500).json({msg:error})
         }
     }

const updateTask= async(req, res)=>{
    // res.json({id: req.params.id, updated: true})
    const {id:taskID}=req.params;
    const task= await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true})
        try{
            if(!task){
                return res.status(404).json({msg:'task does not exist'})
             }
            // await Task.updateOne({_id:taskID}, {name:req.body.name, isCompleted:req.body.isCompleted})
            res.status(201).json({msg: 'task Updated successfully'})
        } catch(error){
            res.status(500).json({msg:error})
        }
    }
const deletetask=async (req, res)=>{
    // res.json({id: req.params.id, deleted: true})
    const {id:taskID}=req.params;
    const task= await Task.findOneAndDelete({_id:taskID})
    
        try{
            if(!task){
                return res.status(404).json({msg:'task does not exist'})
             }
            // await Task.deleteOne({_id:taskID})
            res.status(200).json({msg: 'task deleted successfully'})
        } catch(error){
            res.status(500).json({msg:error})
        }
    }


module.exports={getAllTasks, createTask, getTask, updateTask, deletetask}