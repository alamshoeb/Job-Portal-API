
const { permision } = require("../model.js/permision model")
const { roles } = require("../model.js/roles.models")


const createpermision = async (data)=>{
    const x = await permision.create(data)
    return x
}


const createwithroles = async(data)=>{
    const x = await permision.create(data,{ include : [roles]})
    x
}




const attachpermision = async(data)=>{
    const p = await permision.findOne({where : { id : data.permisionid}})
    const r = await roles.findOne({where : { id : data.rolid}})
    if(!p || !r) {return null}

    const attach = r.addPermision(p)
    return attach
}



module.exports = {
    createpermision,attachpermision,createwithroles
}