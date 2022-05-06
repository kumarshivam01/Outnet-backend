const mongoose = require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://E-commerce:E-commerce@cluster0.akg07.mongodb.net/Outnet?retryWrites=true&w=majority")
}