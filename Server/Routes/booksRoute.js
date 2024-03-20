import express from "express";
const router = express.Router();
import { Book } from "../Models/bookModel.js";

router.get('/', async (req, res) => {
    try {
      const books = await Book.find({});
  
      return res.status(200).json(books);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });


router.post("/", async (req, res) => {
   
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Fill out all required fields" });
        }
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        });
        await newBook.save();
        
        // Sending the created book as the response
        res.status(201).json(newBook);
       
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/:id", async (req,res) =>{
    try{
        const {id} = req.params;
        const newBook = await Book.findById(id);
        console.log(newBook);
        return res.status(201).json(newBook);
        
    }catch(error){
        console.log(error)
    }
});

router.put("/:id", async (req,res) =>{
    try{
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            res.status(404).json({message: "Cannot find id"});
        }else{
            res.status(200).json({message: "Success in finding id"})
        }

    }catch(error){
        console.log(error);
    }
});


router.delete("/:id", async (req,res) =>{
    try{
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            res.status(404).json({message: "Document not found"});
        }
        res.status(200).send({message: "Successfully delete document"});
    }catch(error){
        console.log(error);
    }
});

export default router;