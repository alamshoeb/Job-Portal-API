
const bcrypt = require("bcrypt")
const { User } = require("../model.js/user.model")
const { roles } = require("../model.js/roles.models")



const createrole = async (data)=>{
    const encpt = await bcrypt.hash(data.User.password,10)
    data.User.password = encpt
    const x = await roles.create(data,{ include : [User]})
    return x.dataValues
}




const singlerole = async(data)=>{
    const x = await roles.create(data)
    return x.dataValues

}



const assignroles = async(data)=>{
    const x = await User.findOne({where : { id : data.userid}})
  const y = await roles.findOne({where : { id : data.rolesid}})
if(!x || !y) { return null}
else {
    const z = x.addRoles(y)
    return z
}
    }






module.exports = {
    createrole,assignroles,singlerole
}