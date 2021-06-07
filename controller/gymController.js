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
        const gymId = body.gymId;
        const lessonId = body.lesson_id;
        let res = await Gym.findById(gymId);
        
        if (!res){
            throw new Error('That gym does not exist');
        }

        let res2 = res.lessons;

        for (let i in res2){
            if (res.lessons[i] == lessonId){
                throw new Error('That lessons already exist on this gym')
            }
        } 
  
        return Gym.findByIdAndUpdate(
            { _id: gymId },
            { $push: { lessons: lessonId } }
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
            { $pull: { lessons: lesson_id } });
    }
    
}

const gymController = new Locals();
module.exports = gymController;