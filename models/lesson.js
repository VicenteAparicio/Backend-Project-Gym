const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const lessonSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    coaches: [{
        type: mongoose.Schema.Types.ObjectId, ref:"Coach"
    }],
    date:{
        type: String,
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId, ref:"User"
    }],
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