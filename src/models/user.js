import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        maxLength: 255
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    avatar: {
        type: String,
        default: "https://picsum.photos/200/200"
    },
    admin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true})

export default mongoose.model('User', userSchema)