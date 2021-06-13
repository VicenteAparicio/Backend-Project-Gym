const jwt = require('jsonwebtoken');
const secret = "Everyone lies";


const auth = (req, res, next) => {

    try {
        if(!req.headers.authorization){
            throw new Error("Access denied");
        }

        let token = req.headers.authorization.split(' ')[1];
        let auth = jwt.verify(token,secret);

        if (auth.isAdmin == true){
            return next();
        } else {
            if(auth.userId != req.body.userId){
                throw new Error("No tienes permiso para realizar esta acción");
            } else  {
                return next();
            }
        }
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports = auth;