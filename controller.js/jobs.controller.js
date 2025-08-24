
const { applicants } = require("../model.js/applicants.models")
const { employer } = require("../model.js/employer.models")
const { jobs } = require("../model.js/jobs.models")







const getjobs = async (jobid)=>{
    const data = await jobs.findOne({where : { id : jobid}})
    return data.dataValues
}




const createjobs = async (data)=>{
    const y = await jobs.create(data,{include : [employer] })
    return y
}








const updatejobs = async (idd,data)=>{
    const x = await jobs.findOne({where : {id : idd}})
    if(!x){return null}
    else {
        const y = await jobs.update(data,{where : { id : idd}})
        return y
    }
}




const assignjobs = async (data)=>{
    const x = await applicants.findOne({where : { id : data.applicantid}})
    const y = await jobs.findOne({where : { id : data.jobid}})
    if(!x || !y){return null }
    else {
        const assign = await x.addJobs(y)
        return assign
    }
}






module.exports = {
    createjobs,updatejobs,getjobs,assignjobs
}