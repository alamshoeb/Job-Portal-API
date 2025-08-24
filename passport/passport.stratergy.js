
const passport = require("passport")
const {Strategy,ExtractJwt}= require("passport-jwt")
const { User } = require("../model.js/user.model")


User
passport.use(new Strategy({ jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.JWT_SECRET}, async (jwtdatapayload,done)=>{
        const user = await User.findOne({where : { id : jwtdatapayload.id, isactive : true}})
        if(!user){return done(null,false)}
        else { return done(null,jwtdatapayload)}
    }
))



module.exports = {passport}
    
