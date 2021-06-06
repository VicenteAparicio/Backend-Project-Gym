const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const coachSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        toLowerCase: true,
        required: true,
        unique: true
    },
    instagram:{
        type: String,
        requierd: true
    },
    password: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true
    },
    position: {
        type: String,
    },
    valoration: {
        type: Array,
    },
    tasks: {
        type: String,
    },
    special: {
        type: String,
    },
    // lessons: [{
    //     type: mongoose.Schema.Types.ObjectId, ref: "Lesson"
    // }],
    lessons: {
        type: Array,
    },
    birthdate: {
        type: Date,
        required: true
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    isCoach:{
        type: Boolean,
    },
    isAdmin: {
        type: Boolean,
    },
    isActive: {
        type: Boolean,
        default: true
    }

});


const toJSONConfig = {
    transform: (doc,ret,opt) => {
           delete ret['password']
           return ret
    }
}
coachSchema.set('toJSON', toJSONConfig);


const Coach = mongoose.model('Coach', coachSchema);
module.exports = Coach;