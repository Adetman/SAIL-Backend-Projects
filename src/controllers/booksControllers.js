const { default: mongoose } = require("mongoose");
const Books = require("../models/books");

//CREATE A NEW BOOK

exports.createBook = (req, res) => {
    try{
        let newBook = new Books ({
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            publisher: req.body.publisher,
            isbn: req.body.isbn,
            class: req.body.class
        });
        newBook.save()
        .then(data => res.send("Books Added Successfully"))
        .catch(err => {
            console.log(err)
            res.send("An error prevented Books inclusion");
        })
    }catch (err) {
        console.log(err)
        res.send("An error has occurred");
    }
}

//READ ALL BOOKS

exports.fetchAllBooks = async (req, res) => {
    try {
        let allBooks = await Books.find({},);
        res.send(allBooks);
    } catch (err) {
        console.log(err)
        res.send("Books could not be fetched due to an error that occurred");
    }
}

//UPDATE BOOKS

exports.updateSingleBooks =  async (req, res) => {
    try{
        let allBooks = await Books.findByIdAndUpdate({
            _id: req.body.id
        }, {
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            publisher: req.body.publisher,
            isbn: req.body.isbn,
            class: req.body.class
        }, {new: true});
        console.log(allBooks);
        res.send(allBooks);
        if (allBooks) {

        }else {
            res.send("No book with this criteria")
        }
    } catch(err) {
        console.log(err)
        res.send("An error has occurred")
    }
}

//DELETE BOOK RECORD
exports.deleteSingleBooks =  async (req, res) => {
    try{
        let isValid = mongoose.Types.ObjectId.isValid(req.body.id);
        if (isValid) {
            let allBooks = await Books.findOneAndUpdate ({
                title: req.params.title
            }, {
                deleted: true
            }, {
                new: true
            })
            res.send(allBooks);

        } else {
            res.send("No book with this criteria");
        }
    } catch(err) {
        console.log(err)
        res.send("An error has occurred");
    }
}