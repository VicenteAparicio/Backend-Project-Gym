const Coach = require('../models/coach');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = "Everyone lies";

class Customer {

    // NEW COACH
    async newCoach(body){
        body.password = await bcrypt.hashSync(body.password, 10);
        return Coach.create(body);
    }   

    // LOGIN
    async login(email,password){
        const coach = await Coach.findOne({email});
        if(!coach){
            throw new Error('Email does not exist');
        }
        if(!await bcrypt.compare(password, coach.password)){
            throw new Error('Password is wrong');
        }

        const payload = {
            userId : coach.id,
            createAt : new Date,
            isAdmin : coach.isAdmin
        }
        
        const token =  jwt.sign(payload,secret);
        return ({token, coach});
    }

    // MODIFY COACH
    async modifyCoach(body){
        return Coach.findByIdAndUpdate(
            {_id: body.id},
            {   nick : body.nick,
                name : body.name,
                instagram: body.instagram,
                birthdate : body.birthdate,
                password : body.password,
                level: body.level,
                tasks: body.tasks,
                special: body.special,
                position: body.position,
                city : body.city,
                country : body.country  },
            {   new: true,
                omiteUndefined:true }
        );
    }

    // DELETE COACH
    async delete(body){
        let id = body.id;
        return Coach.findByIdAndDelete({_id: id});
    }

    // FIND ALL COACHS
    async allCoachs(){
        return Coach.find();
    }
    
    // DISPLAY VALORATIONS
    async rate(id){
        let trainer = await Coach.findById(id);
        let valorations = trainer.valoration;
        console.log("Este es el trainer ", trainer)
        console.log("Estas son sus valoraciones ", valorations)

        const total = (accumulator, currentValue) => accumulator + currentValue;

        let media = valorations.reduce(total)/valorations.length;

        return media;

      }
}

const userController = new Customer();
module.exports = userController;