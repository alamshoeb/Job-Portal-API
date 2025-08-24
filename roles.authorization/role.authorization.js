

const roleauthorization = (requiredRoles) => {
    return async (req, res, next) => {
        const userRoles =  await req.user.roles
        const hasAccess = await userRoles.some(ele => requiredRoles.includes(ele));

        if(!hasAccess){res.status(400).json({message : "forbidden resource"})}
        else {next();}
        
    };
};

module.exports = { roleauthorization };


