const express = require("express")

const {body,validationResult} = require("express-validator")

const User = require("../model/user.model")

const router = express.Router()

router.get("",async(req,res)=>{ 
    try{
        const users = await User.find().lean().exec()

        return res.status(200).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.post("/",//body("id")isLength({min:1}),

    body("firstName").isLength({min:3,max:30}).withMessage("first name is required"),
    body("lastName").isLength({min:3,max:30}).withMessage("last name is required"),
    body("age").isLength({min:1,max:150}).withMessage("age is required"),
    body("email").isEmail().withMessage("Please enter valid email"),
    async(req,res)=>{
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(500).json({data:error.array()})
        }
        const user = await User.create(req.body);
        return res.status(200).json({data:user})
        res.send("hello")
    }
    )
    

    
// )
module.exports=router