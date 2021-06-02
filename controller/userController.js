const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const secret = "Evryone lies";

class Customer {

    async login(email,password){
        const user = await User.findOne({email});
        if(!user){
            throw new Error('Email does not exist');
        }
        if(!await bcrypt.compare(password, user.password)){
            throw new Error('Password is wrong');
        }

        const payload = {
            userId : user.id,
            createAt : new Date,
            isAdmin : user.isAdmin
        }

        const token =  jwt.sign(payload,secret);
        return ({token, user});
    }

    async modifyUser(body){
        return User.findByIdAndUpdate(
            {_id: body.id},
            {   nick : body.nick,
                name : body.name,
                city : body.city  },
            {   new: true,
                omiteUndefined:true }
        );
    }

        async allUsers(){
            return User.find();
        }

        async newUser(user){
            user.password = await bcrypt.hashSync(user.password, 10);
            return User.create(user);
        }    
}



const userController = new Customer();
module.exports = userController;