

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { roles } = require("../model.js/roles.models")
const { permision } = require("../model.js/permision model")
const { User } = require("../model.js/user.model")
const { applicants } = require("../model.js/applicants.models")
const { jobs } = require("../model.js/jobs.models")



const getuser = async(userid)=>{
    const data = await User.findOne({where : { id : userid , isactive : true},include : { model : applicants , include : { model : jobs}}})
    return data.dataValues
}





const Usercreate = async (data)=>{
    const encpt = await bcrypt.hash(data.password,10)
    data.password = encpt
const x = await User.create(data)
return x.dataValues
}


const userupdate = async (userid ,data)=>{
    const x = await User.findOne({ where : { id : userid}})
    if(!x){ return null}
    else {
        const y = await User.update(data,{where : { id : userid}})
        return y
    }
}

const userdelete = async (userid)=>{
    const x = await User.findOne({where : { id : userid}})
    if(!x){ return null}
    else {
        const y = await User.destroy({where : { id : userid}})
        return y
    }
}



const userget = async (userid)=>{
    const get = await User.findOne({where : { id : userid}})
    return get.dataValues
}




const userlogin = async (data) => {
    const userdata = await User.findOne({where: { email: data.email, isactive: true }, include : { model : roles, include : { model : permision}}})
    const isPasswordValid = await bcrypt.compare(data.password, userdata.password);
    if (!isPasswordValid || !userdata) {
        return null;
    }


    const permisionarr = []
    const userrol = userdata.roles.map((ele)=>
        {if(ele.dataValues.permisions){ele.dataValues.permisions.forEach(element => 
            {permisionarr.push(element.dataValues.permisionname)
            
        });}

    
           return ele.rolesname})

    const token = jwt.sign({
        id: userdata.id,
        email: userdata.email,
        isactive: userdata.isactive,
        roles : userrol,
        permision : permisionarr
      
    }, process.env.JWT_SECRET, { expiresIn: "2h" });

    return {
        id: userdata.id,
        accessToken: token
    };
};















module.exports  = {
    Usercreate,userupdate,userdelete,userget,userlogin,getuser
}