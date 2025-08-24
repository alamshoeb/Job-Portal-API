const express = require("express")
const { getjobs, createjobs, updatejobs, assignjobs } = require("../controller.js/jobs.controller")
const { authenticatejwt } = require("../passport/passport.middleware")
const { roleauthorization } = require("../roles.authorization/role.authorization")



const jobrouter = express.Router()


jobrouter.get("/:jobid",authenticatejwt,roleauthorization(["employer"]),async (req,res)=>{
    const data = await getjobs(Number(req.params.jobid))
    data ? res.status(200).json({data}) : res.status(400).json({message : " error"})
})



jobrouter.post("/",authenticatejwt,roleauthorization(["employer"]),async (req,res)=>{
    const data = req.body
    const result = await createjobs(data)
    result ? res.status(200).json({result}) : res.status(400).json({message : "error"})
})




jobrouter.put("/:idd",authenticatejwt,roleauthorization(["employer"]),async (req,res)=>{
    const data = await updatejobs(Number(req.params.idd),req.body)
     data ? res.status(200).json({data}) : res.status(400).json({message : "error"})
})




jobrouter.post("/assignapplicants",authenticatejwt,roleauthorization(["employer"]),async (req,res)=>{
    const data = await req.body
    const newdata = await assignjobs(data)
    newdata ? res.status(200).json({newdata}) : res.status(400).json({message : "err"})
})
          


module.exports = {
    jobrouter
}