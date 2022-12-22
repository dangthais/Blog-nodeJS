import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'name is required',
        minLength: [3, "Too short"],
        maxLength: [32, "Too Long"]
    }
}, {timestamps: true})

export default mongoose.model("category", categorySchema)