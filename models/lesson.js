const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const lessonSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    coaches: [{
        type: mongoose.Schema.Types.ObjectId, ref:"Coach"
    }],
    creationDate: {
        type: Date,
        required: true,
    },
    members: {
        type: Array
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