const User = require('../models/user');
const Coach = require('../models/coach');
const Lesson = require('../models/lesson');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = "Everyone lies";

class Customer {

    // NEW USER
    async newUser(body){
        body.password = await bcrypt.hashSync(body.password, 10);
        return User.create(body);
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

// DISPLAY ALL MY LESSONS
async allMyLessons(body){
    let id = body.id;
    console.log("El body con el id es",id)
    let res = await Lesson.find(
        {members:id}
        );
    console.log(res)
    return res;
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
    async modifyAdmin(body){
        return User.findByIdAndUpdate(
            {_id: body.id},
            {   nick : body.nick,
                name : body.name,
                birthdate : body.birthdate,
                password : body.password,
                city : body.city,
                country : body.country,
                idAdmin : body.isAdmin,
                email : body.email, },
            {   new: true,
                omiteUndefined:true }
        );
    }

    // ADD VALORATION
    async addValoration(body){

        return Coach.findByIdAndUpdate(
            {_id: body.coachId},
            { $push : { 
                valoration : {
                   userId: body.userId,
                   rating: body.valoration
                },
            }},
        );
    }

    // DELETE USER
    async delete(body){
        let id = body.userId;
        return User.findByIdAndDelete({_id: id});
    }

    // FIND ALL USERS (ACTIVE OR NOT)
    async allUsers(){
        return User.find();
    }

    // FIND ALL ACTIVE USERS (ADMIN ONLY)
    async allActiveUsers(){
        return User.find({isActive:true});
    }    
}

const userController = new Customer();
module.exports = userController;