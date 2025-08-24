const dataTypes = require("sequelize/lib/data-types")
const { sequelize } = require("../database/config")
const { User } = require("./user.model")




const roles = sequelize.define("roles",{
    id : { type : dataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    rolesname : { type : dataTypes.STRING,
        allowNull : true
    }
},{tableName : "roles",timestamps : true})


User.belongsToMany(roles,{through : "userhasroles"})
roles.belongsToMany(User,{through : "userhasroles"})






module.exports = 
   { roles}
