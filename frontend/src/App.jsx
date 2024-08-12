import React, { useEffect } from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import axios from "axios";

const App = () =>{
  // useEffect(()=>{
  //   axios.get("http://localhost:5555/books").then(response=>console.log(response))
  // },[]);

  return (
    // <div className="app">
    //   <h1>A simple program to show cors.</h1>
    // </div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
    
  )
};

export default App;