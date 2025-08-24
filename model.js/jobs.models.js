const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const { applicants } = require("./applicants.models");



const jobs = sequelize.define("jobs",{
    id :  { type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true },
 jobsname : { type : DataTypes.STRING ,
            allowNull : false
            
        }
},{tableName : "jobs", timestamps : true})



jobs.belongsToMany(applicants,{through : "jobshasapplicants"})
applicants.belongsToMany(jobs,{through : "jobshasapplicants"})



module.exports = {
    jobs
}