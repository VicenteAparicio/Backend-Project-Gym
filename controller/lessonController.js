const Lesson = require('../models/lesson');
const bcrypt = require('bcrypt');
const User = require('../models/user');


class Customer {


        async allRooms(){
            return Lesson.find();
        }

        async newRoom(room){
            return Lesson.create(room);
        }

        async joinRoom(data){
            const id = data.id;
            const member = data.member;
            return Lesson.findByIdAndUpdate(
                {_id: id},
                {$push: {members: member}}
            );
        }

        async leaveRoom(data){
            const id = data.id;
            const member = data.member;
            return Lesson.findByIdAndUpdate(
                {_id: id},
                {$pull: {members : member}}
            );
        }
        async addMessage(data){
            const id = data.id;

            const userId = data.userId;

            const user = await User.findById(userId);
            let message = {
                idUser : data.userId,
                user : user.name,
                text : data.text,
                date : data.date,
                report : data.report,
                delivered : data.delivered,
                read : data.read
            }
            return Room.findByIdAndUpdate(
                {_id: id},
                {$push: {messages : message}}
            );
        }

}



const chatController = new Customer();
module.exports = chatController;