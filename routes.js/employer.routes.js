const express = require("express")
const { getall, createemp, createwithuser, updateemp, deleteemp, assignwithuser } = require("../controller.js/employer.controller")
const { authenticatejwt } = require("../passport/passport.middleware")
const { roleauthorization } = require("../roles.authorization/role.authorization")





const employerrouter = express.Router()


employerrouter.get("/getall/:userid",authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
    const data = await getall(Number(req.params.userid))
    data ? res.status(200).json({data}) : res.status(400).json({message : "error"})
})


employerrouter.post("/",authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
    const data = req.body
    const result = await createemp(data)
    result ? res.status(200).json({result}) : res.status(400).json({message : "error"})
})




employerrouter.post("/check",authenticatejwt,roleauthorization(["superadmin"]),async(req,res)=>{
    const data = req.body
    const result = await createwithuser(data)
    result ? res.status(200).json({result}) : res.status(400).json({message : "error"})
})


employerrouter.put("/:empid",authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
const newdata = await updateemp(Number(req.params.empid),req.body)
newdata ? res.status(200).json({newdata}) : res.status(400).json({message : "error"})
})



employerrouter.delete("/:empid",authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
    const data = await  deleteemp(Number(req.params.empid))
    data ? res.status(200).json({data}) : res.status(400).json({message : "error"})
})


employerrouter.post("/assign",authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
    const data = req.body
    const result = await assignwithuser(data)
    result ? res.status(200).json({result}) : res.status(400).json({message : "error"})
})





module.exports = {
    employerrouter
}