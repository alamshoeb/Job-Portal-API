
const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const { roles } = require("./roles.models");

const permision = sequelize.define("permision",{
    id : { type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    permisionname : { type : DataTypes.STRING,
        allowNull : false
    }
},{tableName : "permision" ,timestamps : true ,})


roles.belongsToMany(permision,{through : "roleshaspermision"} )
permision.belongsToMany(roles, { through : "roleshaspermision"})



module.exports = {
    permision
}