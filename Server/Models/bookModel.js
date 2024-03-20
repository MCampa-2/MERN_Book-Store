import mongoose from "mongoose";


export const bookShema = ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        reguired: true
    },
    publishYear: {
        type: Number,
        required: true
    }
});

export const Book = mongoose.model("Book", bookShema);