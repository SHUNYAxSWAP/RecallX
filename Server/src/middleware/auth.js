const jwt = require("jsonwebtoken");

function verifyJWT(req,res,next){

}
function signJWT(email){
    const token = jwt.sign({
        email
    },process.env.JWT_SECRET)
    console.log(token)
}
module.exports = {signJWT, verifyJWT} 