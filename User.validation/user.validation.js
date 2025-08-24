
const Joi = require("joi")


const userscema = Joi.object({
    username : Joi.string().required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(2).max(10).required(),
    isactive : Joi.boolean().required()
})


const uservalidate = async (req,res,next)=>{
const {error} = userscema.validate(req.body,{abortEarly : false})
if(error){
    const x = error.details.map((ele)=>ele.message)
    res.status(400).json({message : x})
}
else { next()}
}


module.exports = {
    uservalidate
}