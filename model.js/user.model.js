const { DataTypes, INTEGER, STRING,  } = require("sequelize");
const { sequelize } = require("../database/config");
const { employer } = require("./employer.models");



const User = sequelize.define("User",{
 id : { type :
    DataTypes.INTEGER,
    primaryKey : true,
     autoIncrement : true 
        
},
 username : { type : DataTypes.STRING,
    allowNull : true 
},
email : { type : DataTypes.STRING ,
    allowNull : true
},
password : { type :  DataTypes.STRING ,
    allowNull : true
},
isactive : {type : DataTypes.BOOLEAN,
    allowNull : true
} },{tableName : "User",timestamps : true}
)






employer.hasMany(User)
User.belongsTo(employer)

module.exports = {
    User
}


