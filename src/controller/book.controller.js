const express = require("express")

// const {body,validationResult} = require("express-validator")

const Book = require("../model/book.model")

const router = express.Router()

router.get("",async(req,res)=>{ 
    try{
        const books = await Book.find().lean().exec()

        return res.status(200).send({books:books})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})


router.post("",async(req,res)=>{ 
    try{
        const books = await Book.create(req.body)

        return res.status(200).send({books:books})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

module.exports=router