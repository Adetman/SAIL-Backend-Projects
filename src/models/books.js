const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    publisher: {
        type: String,
    },
    isbn: {
        type: Number,
        required: true,
        unique: true
    },
    class: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean
    }
    
}, {
    timestamps: true
})

const Books = mongoose.model("books", booksSchema);

module.exports = Books;