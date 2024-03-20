import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBooks from "./Pages/CreateBooks";
import DeleteBook from "./Pages/DeleteBook";
import EditBook from "./Pages/EditBook";
import ShowBook from "./Pages/ShowBook";
 
function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/books/create" element={<CreateBooks />}></Route>
    <Route path="/books/details/:id" element={<ShowBook />}></Route>
    <Route path="/books/edit/:id" element={<EditBook />}></Route>
    <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
   </Routes>
  )
};

export default App
