const {Router} =  require("express");
const userModel = require("../models/user")
const signJWT = require("../middleware/auth")

const userRouter = Router();

userRouter.post('/signin', async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try{
        let user = await userModel.findOne({email,password})
        if(!user){
            return res.status(401).send("No user found")
        }
        res.send("Logged in Successfully")
    }
    catch{
        res.status(500).send("Failed to Login")
    }
})
userRouter.post('/signup', async (req,res)=>{
    const email = req.body.email; 
    const name = req.body.name;
    const password = req.body.password;
    try{
        let user = await userModel.findOne({email})
        if(user){
            return res.status(401).send("User already exists")
        }
        await userModel.create({email,name,password})
        signJWT(email)
        res.send("Signed up successfully")
    }
    catch(e){
        res.status(500).send("Failed to sign up"+ e)
    }
    
})

module.exports = {
    userRouter: userRouter
}