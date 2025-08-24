const express = require("express")
const { getapplicantwithuser, createapplicants, createappli } = require("../controller.js/applicants.controller")
const { authenticatejwt } = require("../passport/passport.middleware")
const { roleauthorization } = require("../roles.authorization/role.authorization")


const applicantsrouter = express.Router()




applicantsrouter.get("/:userid",authenticatejwt,roleauthorization(["employer"]),async (req,res)=>{
    const data = await getapplicantwithuser(Number(req.params.userid))
    data ? res.status(200).json({data}) : res.status(400).json({message : " error"})
})



applicantsrouter.post("/withuser",authenticatejwt,roleauthorization(["employer"]),async (req,res)=>{
    const data = req.body
   const  newdata = await createapplicants(data)
   newdata ? res.status(200).json({newdata}) : res.status(400).json({message : "error"})
})


applicantsrouter.post("/single",authenticatejwt,roleauthorization(["employer"]),async (req,res)=>{
    const data = req.body
    const result = await createappli(data)
    result ? res.status(200).json({result}) : res.status(400).json({message : "eror"})
})



module.exports = {
    applicantsrouter
}