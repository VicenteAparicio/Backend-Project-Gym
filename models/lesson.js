const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const lessonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true,
    },
    members: {
        type: Array,
        required: true,
    },
    messages: {
        type: Array,
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
lessonSchema.set('toJSON', toJSONConfig);


const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;