

const { roles } = require("../model.js/roles.models")
const { User } = require("../model.js/user.model")
const { employer } = require("../model.js/employer.models")


const bcrypt = require("bcrypt")



const getall = async (userid)=>{
    const x = await employer.findOne({where : { id : userid}, include : { model : User ,include : { model : roles}}})
    return x.dataValues
}




const createemp = async (data)=>{
const x = await employer.create(data)
return x.dataValues

}

const createwithuser = async (data)=>{
    const encpt  = await bcrypt.hash(data.User.password,10)
    data.User.password = encpt
    const create = await employer.create(data,{include : [User]})
    return create
}


const updateemp = async (empid,data)=>{
    const x = await employer.findOne({where : {id : empid}})
    if(!x){return null}
    else {
        const y = await employer.update(data,{ where : { id : empid}})
        return y
    }
}


const deleteemp = async (empid)=>{
    const x = await employer.findOne({where : { id : empid}})
    if(!x){
        return null
    }
    else {
        const y = await employer.destroy({where : { id : empid}})
        return y
    }
}

const assignwithuser = async(data)=>{
    const x = await employer.findOne({where : { id : data.empid}})
    const y = await User.findOne({where : { id : data.userid}})
    if(!x || !y){return null}
    else {
        const z = x.addUser(y)
        return z
    }
}






module.exports = {
    createemp,createwithuser,updateemp,deleteemp,getall,assignwithuser
}