const express = require("express")

// const {body,validationResult} = require("express-validator")

const Comment = require("../model/comment.model")

const router = express.Router()

router.get("",async(req,res)=>{ 
    try{
        const comments = await Comment.find().lean().exec()

        return res.status(200).send({comments:comments})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.post("",async(req,res)=>{ 
    try{
        const comments = await Comment.create(req.body)

        return res.status(200).send({comments:comments})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports=router