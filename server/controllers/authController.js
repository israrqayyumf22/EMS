import jwt from 'jsonwebtoken';
import User from '../models/User.js'

const login = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user=await user.findone({email})
        if(!user){
            res.status(404).json({success: false, error:"User Not Found"})
        }
        const isMatch = await bycrpt.compare(password, user.password)
        if(!isMatch){
            res.status(404).json({success: false, error:"Wrong Password"})
        }
        const token = jwt.sign({_id:user._id, role:user.role})
        process.env.JWT_KEY, {expiresIn: "10d"}
        res.status(200).json({success: true, token, user:{_id:user._id, name: user.name, role:user.role}})
    }catch(error){
        res.status(500).json({success: false, error: error.message})
    }
}
export {login}