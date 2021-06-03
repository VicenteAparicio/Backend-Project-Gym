const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const gymSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    adress: {
        type: String,
        required: true,
        unique: true
    },
    cp: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    lessons: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Lesson"
    }],
    country: {
        type: String,
    },
    city: {
        type: String,
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
gymSchema.set('toJSON', toJSONConfig);


const Gym = mongoose.model('Gym', gymSchema);
module.exports = Gym;