const Lesson = require('../models/lesson');
const Coach = require('../models/coach');
const bcrypt = require('bcrypt');
const User = require('../models/user');


class Room {

        async allLessons(){
            return Lesson.find().populate('coaches',"members");
        }

        async usersLessons(){
            return Lesson.find(
                {isActive: true},
                {
                    _id: 0, //HIDE ID
                    title: '$title',
                    description: '$description',
                    date: '$date'
                }
            );
        }

        async newLesson(body){
            return Lesson.create(body);
        }

        // DELETE LESSON
        async delete(body){
            let id = body.lessonId;
            return Lesson.findByIdAndDelete({_id: id});
        }

        async joinLesson(body){
            const id = body.id;
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
                // {members: {$ne: member}}, // WHY IS NOT WORKING??? 
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