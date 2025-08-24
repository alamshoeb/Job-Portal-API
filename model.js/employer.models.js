const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const { User } = require("./user.model");

const employer = sequelize.define("employer",{
    id : {type : DataTypes.INTEGER,
        primaryKey : true ,
        autoIncrement : true},
 employername : { type : DataTypes.STRING,
                allowNull : false,
 },
 isactive : {type : DataTypes.BOOLEAN,
    allowNull : true
 }
},{tableName : "employer" ,timestamps : true })






module.exports = {
    employer
}