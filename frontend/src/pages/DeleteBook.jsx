import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useState } from "react";
import axios from "axios";

const DeleteBook = ()=>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const handleDeleteBook = ()=>{
        setLoading(true);
        axios.delete(`http://localhost:5555/books/${id}`,id).then(()=>{
            setLoading(false);
            navigate("/");
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        });
        
    }
    return(
        <div className="p-4">
            <BackButton/>
            <h1 className="text-3xl my-4">Create Book</h1>
            {loading?(<Spinner/>) : ("")}
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h3 className="texl-2xl">Are you sure? This cannot be undo.</h3>
                <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}>
                    Yes, Delete.
                </button>
            </div>
        </div>
    )
}

export default DeleteBook;