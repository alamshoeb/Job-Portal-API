const passport = require("passport")
const passportStratergy = require("./passport.stratergy")





const authenticatejwt = passport.authenticate("jwt",{session : false})



module.exports  = {
    authenticatejwt
}


