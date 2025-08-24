const express = require("express")
require('dotenv').config()
const { sequelize } = require("./database/config")
const { User } = require("./model.js/user.model")
const { jobs } = require("./model.js/jobs.models")
const { applicants } = require("./model.js/applicants.models")
const { roles } = require("./model.js/roles.models")
const passport = require("passport")
const { permision } = require("./model.js/permision model")
const { employerrouter } = require("./routes.js/employer.routes")
const { applicantsrouter } = require("./routes.js/applicants.routes")
const { userrouter } = require("./routes.js/userrouter")
const { jobrouter } = require("./routes.js/job.routes")
const { permisionrouter } = require("./routes.js/permision.router")
const { rolerouter } = require("./routes.js/role.router")
const { employer } = require("./model.js/employer.models")




const app = express()

 app.use(express.json());

 app.use(passport.initialize())


app.use("/employer",employerrouter)
app.use ("/applicants",applicantsrouter)
app.use("/User",userrouter)
app.use("/jobs",jobrouter)
app.use("/permision",permisionrouter)
app.use("/roles",rolerouter)






app.listen(3020,async ()=>{
    try {
        
        await sequelize.authenticate()
        await sequelize.sync()
        await User.sync({alter : true})
        await employer.sync({alter : true})
        await jobs.sync({alter : true})
        await applicants.sync({alter : true})
        await roles.sync({alter : true})
        await permision.sync({alter : true})
        console.log("application running on port : 3020");
        
    } catch (error) {
        console.log("unable to start application",error);
        
        
    }



})

