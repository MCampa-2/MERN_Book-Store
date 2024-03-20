import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

function CreateBooks(){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");

    const creatBook = (e) =>{
        e.preventDefault();
        alert("You added a new book!")
        let newData = {
            title,
            author,
            publishYear
        }

        setLoading(true);
        axios.post("http://localhost:5050/books", newData)
        .then(() =>{
        setLoading(false);
        navigate("/");
        })
        .catch((error) =>{
            console.log(error)
        })
    };

    return(
        <div>
            <h1>Create Book</h1>
            {loading ? <Spinner />: (
                  <form onSubmit={creatBook}>
                  <label>Enter Title</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                  <label>Enter Author</label>
                  <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                  <label>Enter Publish Year</label>
                  <input type="text" value={publishYear} onChange={(e) =>setPublishYear(e.target.value)}></input>
                  <button type="submit">Save</button>
              </form>
            )}
        </div>
    )
};

export default CreateBooks;