
const express = require("express")
const { createpermision, attachpermision, createwithroles } = require("../controller.js/permision controller")



const permisionrouter = express.Router()


permisionrouter.post("/",async (req,res)=>{
    const data = req.body
    const result = await createpermision(data)
     result ? res.status(200).json({data : result}) : res.status(400).json({message : "error"})
 })                                      


permisionrouter.post("/attachroles",async (req,res)=>{
   const x = await req.body
   const y = await attachpermision(x)
   y ? res.status(200).json({data : y}) : res.status(400).json({meaage : "error"})
})



permisionrouter.post("/withroles",async (req,res)=>{
    const data =  req.body
    const result= await createwithroles(data)
    result ? res.status(200).json({data : result}) : res.status(400).json({message  : "error"})
 })
 

 module.exports = {
    permisionrouter
 }
 