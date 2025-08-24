const { User } = require("../model.js/user.model")
const { applicants } = require("../model.js/applicants.models")

const bcrypt = require("bcrypt")

const createapplicants = async (data)=>{
    const encpt = await bcrypt.hash(data.User.password,10)
    data.User.password = encpt
    const x = await applicants.create(data,{include : [User]})
    return x
}


const createappli = async (data)=>{
    const x = await applicants.create(data)
    return x.dataValues
}


const getapplicantwithuser = async (userid)=>{
    const x = await applicants.findOne({where : { id : userid }, include : User})
    return x.dataValues
}








module.exports = {
    createapplicants,createappli,getapplicantwithuser
}