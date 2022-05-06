const express = require("express")

const usersController = require("./controller/user.controller")

const booksController = require("./controller/book.controller")

const publicationController = require("./controller/publication.controller")

const commentController = require("./controller/comment.controller")

const app = express()

app.use(express.json())

app.use("/users",usersController)
app.use("/books",booksController)
app.use("/publication",publicationController)
app.use("/comment",commentController)

module.exports=app 