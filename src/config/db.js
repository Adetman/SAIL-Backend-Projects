const mongoose = require("mongoose");

const connectToDB = async() => {
    try {
        let url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ksjkz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
        await mongoose.connect(url);
        console.log("Connected to DB Successfully");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectToDB;