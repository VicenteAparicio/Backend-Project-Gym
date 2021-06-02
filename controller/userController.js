const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = "Everyone lies";

class Customer {

    // NEW USER
    async newUser(user){
        user.password = await bcrypt.hashSync(user.password, 10);
        return User.create(user);
    }   

    // LOGIN
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

    // MODIFY USER BY USER
    async modifyUser(body){
        return User.findByIdAndUpdate(
            {_id: body.id},
            {   nick : body.nick,
                name : body.name,
                birthdate : body.birthdate,
                password : body.password,
                city : body.city,
                country : body.country  },
            {   new: true,
                omiteUndefined:true }
        );
    }

    // MODIFY USER BY ADMIN
    async modifyUser(body){
        return User.findByIdAndUpdate(
            {_id: body.id},
            {   nick : body.nick,
                name : body.name,
                birthdate : body.birthdate,
                password : body.password,
                city : body.city,
                country : body.country,
                idAdmin : body.isAdmin,
                email : body.email,
                isCoach: body.isCoach  },
            {   new: true,
                omiteUndefined:true }
        );
    }


    // DELETE USER
    async delete(body){
        let id = body.id;
        return User.findByIdAndDelete({_id: id});
    }


    // FIND ALL USERS (ADMIN ONLY)
    async allUsers(){
        return User.find({isAdmin:true});
    }
    
}

const userController = new Customer();
module.exports = userController;