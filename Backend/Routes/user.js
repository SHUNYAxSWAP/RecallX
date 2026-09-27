const {Router} =  require("express");

const userRouter = Router();

userRouter.post('/signin', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    res.send("Signed in " + username + " " + password);
})
userRouter.get('/signup', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    res.send("Sign up")
})

module.exports = {
    userRouter: userRouter
}