const express = require("express")
const { getuser, Usercreate, userupdate, userdelete, userget, userlogin } = require("../controller.js/user.controller")
const { uservalidate } = require("../User.validation/user.validation")
const { authenticatejwt } = require("../passport/passport.middleware")
const { roleauthorization } = require("../roles.authorization/role.authorization")

const userrouter = express.Router()



userrouter.get("/with/:userid",authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
    const data = await getuser(Number(req.params.userid))
    data ? res.status(200).json({data}) : res.status(400).json({message : "error"})
})





 userrouter.post("/",uservalidate,authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
    const data = req.body
    const result = await Usercreate(data)
    result ? res.status(200).json({result}) : res.status(400).json({message : "error"})
 })


userrouter.put("/:userid" ,authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
    const newdata = await userupdate(Number(req.params.userid),req.body)
    newdata ? res.status(200).json({newdata}) : res.status(400).json({message : "error"})
})


userrouter.delete("/:userid",authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
    const data = await userdelete(Number(req.params.userid))
    data ? res.status(200).json({data}) : res.status(400).json({message : "err"})
})


userrouter.get("/check/:userid" ,authenticatejwt,roleauthorization(["superadmin"]),async (req,res)=>{
    const x = await userget(Number(req.params.userid))
    x ? res.status(200).json({data : x}) : res.status(400).json({message : "error"})
})

userrouter.post("/login",async (req,res)=>{
    const data = req.body
    const newdata = await userlogin(data)
newdata ? res.status(200).json({newdata}) : res.status(400).json({message : "error"})


})



module.exports = {
    userrouter
}
