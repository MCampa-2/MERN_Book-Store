// Home.js
import Spinner from "../Components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";



function Home() {
    const [loading, setIsLoading] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get("http://localhost:5050/books")
            .then((res) => {
                console.log("Response data:", res.data);
                setBooks(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false); // Make sure to set isLoading to false in case of error
            });
    }, []);

    return (
        <div className='p-4'>
        <div className='flex justify-center items-center gap-x-4'>
            <h1 className="text-3xl my-8">Books List</h1>
            <Link to="/books/create">
                <MdOutlineAddBox className="text-sky-800 text-4xl"/>
            </Link>
        </div>
        {loading ? (
            <Spinner />)
            :(
                <table className="w-full border-seperate border-spacing-2">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 rounded-md">No</th>
                            <th className="border border-slate-600 rounded-md">Title</th>
                            <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                            <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
                            <th className="border border-slate-600 rounded-md max-md:hidden">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, id)=>{
                            return <tr className="h-8" key={id}>
                                <td className="border border-slate-700 rounded-md text-center">{id + 1}</td>
                                <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.author}</td>
                                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
                                <td className="flex justify-center gap-x-4 border border-slate-700">
                                    <Link to={`/books/details/${book._id}`}><BsInfoCircle className="text-2xl text-green-800"/></Link>
                                    <Link to={`/books/edit/${book._id}`}><FaEdit className="tex-2xl text-yellow-800"/></Link>
                                    <Link to={`/books/delete/${book._id}`}><MdDeleteForever className="text-2xl text-red-800"/></Link>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            )
        }
        </div>
    );
}

export default Home;
