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
            const id = body.id;
            const member = body.member;
            return Lesson.findByIdAndUpdate(
                {_id: id},
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