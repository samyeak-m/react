const User = require("../models/User");
const bcrypt = require("bcrypt");

const createUser = async(req,res)=>{
      try {
        const{username,email,password}=req.body;
        const newPassword = await bcrypt.hash(password,10);
        await User.create({
            username,
            email,
            password:newPassword,
        });
        return res.status(201).json({
            message:"User created"
        });
      } catch (error) {
            return res.status(500).json({
                message:"Internal server error"
            });
      }
};
const loginUser = async(req,res)=>{
    const {email,password}=req.body;
    console.log(email);
    const user = await User.findOne({email});
    const isPasswordCorrect = await bcrypt.compare(password,user.password);

    if(isPasswordCorrect){
        return res.status(401).json({
            message:"login success"
        });
    }

    return res.json({
        message:"login failed"
    
    });
};

module.exports = {createUser,loginUser};