const Lesson = require('../models/lesson');
const bcrypt = require('bcrypt');
const User = require('../models/user');


class Room {

        async allLessons(){
            return Lesson.find().populate('coaches');
        }

        async newLesson(body){
            return Lesson.create(body);
        }

        async joinLesson(body){
            const id = body.coachId;
            const member = body.userId;
            const membrillos = await Lesson.findById(id);
            const miembros = membrillos.members;

            for (let i in miembros){
                if (miembros[i] == member){
                    throw new Error('You are already signed for this lesson')
                }
            }
            return Lesson.findByIdAndUpdate(
                {_id: id},
                // {members: {$nin: member}}, // WHY IS NOT WORKING??? 
                {$push: {members: member}}
            );
        }

        async leaveLesson(body){
            const id = body.id;
            const member = body.member;
            return Lesson.findByIdAndUpdate(
                {_id: id},
                {$pull: {members : member}}
            );
        }
        async addMessage(body){
            const id = body.id;
            const userId = body.userId;
            const user = await User.findById(userId);
            let message = {
                idUser : body.userId,
                user : user.name,
                text : body.text,
                date : body.date,
                report : body.report,
                delivered : body.delivered,
                read : body.read
            }
            return Lesson.findByIdAndUpdate(
                {_id: id},
                {$push: {messages : message}}
            );
        }

}



const lessonController = new Room();
module.exports = lessonController;