
const { sequelize } = require("../database/config");
const { DataTypes } = require("sequelize");
const { User } = require("./user.model");


const applicants = sequelize.define("applicants",{
    id : { type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
        
    },
        applicantname : { type : DataTypes.STRING,
            allowNull : false}
            
       
},{tableName : "applicants", timestamps : true})



User.hasOne(applicants)
applicants.belongsTo(User)




module.exports = {
    applicants
}