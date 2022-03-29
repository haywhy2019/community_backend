const AuthModel  = require("../../models/auth")

exports.signIn = (req,res) => {
    const {email, password} = req.body
    if(email && password) {
        AuthModel.findOne({email : email})
    }
 res.send("this is a login page")
};

exports.signUp = (req,res) => {
    res.send("You are signed in")
   };