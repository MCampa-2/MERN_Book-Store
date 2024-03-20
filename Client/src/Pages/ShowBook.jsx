import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";

function ShowBook(){
    const [book,setBook] = useState(false);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() =>{
        setLoading(true);
        axios.get(`http://localhost:5050/books/${id}`)
        .then((res) =>{
            console.log(res.data);
            setBook(res.data);
            setLoading(false);
        })
        .catch((error) =>{
            console.log(error);
        });

    },[])

    return(
        <div className="p-4">
            <Link to="/">Back Home</Link>
            <h1 className="text-3xl my-4">Show Book</h1>
            <div>
                <h2>{book.title}</h2>
                <h2>{book.author}</h2>
                <h2>{book.publishYear}</h2>
            </div>
        </div>
    
    )
};

 export default ShowBook;