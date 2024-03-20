import express from "express";
import { PORT, mongoDBURL } from "../Server/config.js";
import mongoose from "mongoose";
import booksRoute from "./Routes/booksRoute.js";
import cors from "cors";
import { Book } from "./Models/bookModel.js";


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res) =>{
    res.send("Hello World")
});

app.use("/books", booksRoute);




app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`)
});



mongoose
.connect(mongoDBURL)
.then(() =>{
    console.log("Database succesfully created")
})
.catch((error) =>{
    console.log(error)
})


//michaelcampagnoli
//i7wDGlcRPfxl5RBs
