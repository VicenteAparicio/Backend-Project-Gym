const Coach = require('../models/gym');

class Gym {

    // GET INFO ABOUT GYM
    async allGyms(){

        return Gym.findById();
    }


    // FIND ALL GYMS

    async allGyms(){
        return Gym.find();
    }

    // NEW GYM

    async newGym(body){
        return Gym.create(body);
    }   

    // NEW LESSON ON GYM
    async addLesson(body){
        const id = body.id;
        const lesson = body.lessons;
        return Lesson.findByIdAndUpdate(
            {_id: id},
            {$push: {lessons: lesson}}
        );
    }


    // MODIFY GYM DATA

    async modifyGym(body){
        return Gym.findByIdAndUpdate(
            {_id: body.id},
            {   name : body.name,
                address : body.address,
                cp: body.cp,
                phone : body.phone,
                country: body.country,
                city: body.city,
                isActive: body.isActive,
            },
            {   new: true,
                omiteUndefined:true
            }
        );
    }
    
}

const gymController = new Gym();
module.exports = gymController;