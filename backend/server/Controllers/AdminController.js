import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from '../models/hotels.model.js'

import dotenv from 'dotenv'



export const SignIn = async(req,res)=>{
    const {email,password} = req.body;
    const isExist = await User.findOne({email});
    if(!isExist){
        return res.json({
            status:"404",
            message:"Incorrect Credentials"
        })
    }
    const isCorrect = await bcrypt.compare(password,isExist.password);
    if(!isCorrect){
        return res.json({
            message:"Incorrect credentials"
        })
    }
    return res.json({
        status:"200",
        message:"Correct",
        data:isExist
    })
}
export const SignUp = async(req,res)=>{
   
    const {email,password} = req.body;
    const hashpassword = await bcrypt.hashSync(password);
    const newUser = new User({email,password:hashpassword})
    newUser.save()
   
    .then((data)=>{
        res.json({result:"User Added"})
        console.log(data)
    })
    .catch((e)=>{
        res.json({message:e})
    })
}
