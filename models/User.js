import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please provide name'],
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    email: {
        type: String,
        require: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Please provide password'],
        minLength: 6,
    },
    lastName: {
        type: String,
        trim: true,
        maxLength: 20,
        default: 'last name'
    },
    location: {
        type: String,
        trim: true,
        maxLength: 20,
        default: 'my city'
    },
})

export default mongoose.model('User', UserSchema)