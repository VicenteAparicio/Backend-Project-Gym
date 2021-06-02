const User = require('../models/user');
const bcrypt = require('bcrypt');

class Customer {





        async allUsers(){
            return User.find();
        }

        async newUser(user){
            let password = user.password;
            user.password = bcrypt.hashSync(password, 10);
            return User.create(user);
        }


}



const userController = new Customer();
module.exports = userController;