const jwt = require('jsonwebtoken');
const secret = "Everyone lies";

const admin = (req, res, next) => {

    try {
        if(!req.headers.authorization){
            throw new Error("Access denied");
        }
    
        let token = req.headers.authorization.split(' ')[1];    
        let auth = jwt.verify(token,secret);
    
        if(!auth.isAdmin){
            throw new Error("No tienes permiso para realizar esta acción");
        }
        return next();
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = admin;