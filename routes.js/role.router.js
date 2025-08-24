const express = require("express")
const { singlerole, createrole, assignroles } = require("../controller.js/roles.controller")


const rolerouter = express.Router()


rolerouter.post("/single",async (req,res)=>{
    const data = req.body
    const result = await singlerole(data) 
    result ? res.status(200).json({result}) : res.status(400).json({message : "error"})
})


rolerouter.post("/",async (req,res)=>{
const data = req.body
const newdata = await createrole(data)
newdata ? res.status(200).json({newdata}) : res.status(400).json({message : "error"})
})


rolerouter.post("/assign",async (req,res)=>{
    const data = req.body
    const newdata = await assignroles(data)
    newdata ? res.status(200).json({newdata}) : res.status(400).json({message : "error"})
})



module.exports = {
    rolerouter
}