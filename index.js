const express = require("express");
const connectToDB = require("./src/config/db");
const dotenv = require("dotenv");
const bookRouter = require("./src/routes/booksRoute");

const app = express();
app.use(express.json());

dotenv.config();

connectToDB();

app.use("/api/v1", bookRouter);

const port = process.env.PORT

app.listen(port, () => console.log("We are on Port", port));