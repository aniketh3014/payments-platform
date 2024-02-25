import mongoose from "mongoose";
import { MONGO_URL } from "./config.js"; 

mongoose.connect(MONGO_URL);

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        uniqe: true,
        maxLength: 30,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    firstName: {
        type: String,
        maxLength: 30,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        maxLength: 30
    }
});

const User = mongoose.model('User', userSchema);

export { User }