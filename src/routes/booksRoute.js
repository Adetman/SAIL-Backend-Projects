const express = require("express");
const BookController = require("../controllers/booksControllers");

const bookRouter = express.Router();

bookRouter.get("/", (req, res) => {
    res.send("Welcome to our Library Home. Books will be available soon");
})

bookRouter.get("/fetchAllBooks", BookController.fetchAllBooks);
bookRouter.post("/newBooks", BookController.createBook)
bookRouter.patch("/updateBooks", BookController.updateSingleBooks)
bookRouter.delete("/deleteBooks/:title", BookController.deleteSingleBooks)



module.exports = bookRouter;