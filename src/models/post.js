import mongoose from 'mongoose';

export const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    content: {
        type: String,
        required : true,
    },
    categories: {
        type: String,
    }
}, { timestamps: true } )
 
export default mongoose.model('Post', postSchema)
