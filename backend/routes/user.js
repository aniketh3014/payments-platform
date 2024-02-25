import express from 'express';
import zod from 'zod';
import { User } from '../db.js';
import { JWT_SECRET } from '../config.js';
import jwt from 'jsonwebtoken';

const userRouter = express.Router();

const signupObject = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8),
    firstName: zod.string().max(30),
    lastName: zod.string().max(30)
})

const signinObject = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8)
})

userRouter.post("/signup", async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const {success} = signupObject.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            messege: "Email already taken/Invalid inputs"
        })
    }
    const alreayExists = await User.findOne({username: username});
    if (alreayExists) {
        return res.status(411).json({
            messege: "Email already taken"
        })
    }

    const newUser = await User.create({
        username,
        password,
        firstName,
        lastName
    });

    const user_id = newUser._id;
    const token = jwt.sign({user_id}, JWT_SECRET);

    res.json({
        messege: "New user created successfully",
        token: token
    })
});

userRouter.post("/signin", async(req,res) => {

    const username = req.body.username;
    const password = req.body.password;
    const success = signinObject.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            messege: "Invalid inputs"
        })
    }

    const user = await User.findOne({
        username,
        password
    })

    if (user) {
        const user_id = user._id;
        const token = jwt.sign({user_id}, JWT_SECRET);
        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        messege: "Invalid username or password"
    })

})

export default userRouter; 