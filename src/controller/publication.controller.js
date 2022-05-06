const express = require("express")



const Publication = require("../model/publication.model")

const router = express.Router()

router.get("",async(req,res)=>{ 
    try{
        const publications = await Publication.find().lean().exec()

        return res.status(200).send({publications:publications})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.post("",async(req,res)=>{ 
    try{
        const publications = await Publication.create(req.body)

        return res.status(200).send({publications:publications})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})


module.exports=router