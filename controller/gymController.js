const Gym = require('../models/gym');

class Locals {

    // GET INFO ABOUT GYM
    async allGyms(){

        return Gym.findById();
    }


    // FIND ALL GYMS

    async allGyms(){
        let res = await Gym.find().populate('lessons');
        return res;
    }

    // NEW GYM

    async newGym(body){
        return Gym.create(body);
    }   

    // NEW LESSON ON GYM
    async addLesson(body){
        const id = body.id;
        const lesson = body.lessons;
        return Gym.findByIdAndUpdate(
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

    // DELETE LESSON FROM GYM
    async deleteLesson(body){
        let gymId = body.gymId;
        let lesson_id = body.lesson_id;
        
        console.log(lesson_id)
        return Gym.findByIdAndUpdate(
            {_id: gymId},
            { $pull: { lessons: { _id: lesson_id } } });
    }
    
}

const gymController = new Locals();
module.exports = gymController;