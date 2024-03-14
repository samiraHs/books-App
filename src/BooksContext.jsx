import { createContext,useContext,useState} from "react";
import axios from "axios"


// create context and use it
const BooksContext=createContext();
export const useBookContext=()=> useContext(BooksContext)

// create context provider
export const BooksProvider=({children})=>{
    const[books,setBooks]=useState([])
    const [selectedBooks,setSelectedBooks]=useState([])


    const samira=import.meta.env.VITE_API_KEY
    // console.log(key);
   console.log(samira);
    const fetchBooks=async(searchTerm)=>{
        try {
            const response= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${samira}`)
            setBooks(response.data.items)
        } catch (error) {
            console.log("error fetching books",error);
        }
    }
   
    const addBookToRead=(book)=>{
        setSelectedBooks([...selectedBooks,book])
    }

    return(
    <BooksContext.Provider value={{books,fetchBooks,selectedBooks,addBookToRead}}>
        {children}
    </BooksContext.Provider>
    )
}
