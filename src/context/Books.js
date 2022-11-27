import axios from "axios";
import { createContext, useCallback, useState } from "react";

const BooksContext = createContext();

const Provider = ({ children }) => {

    const [books, setBooks] = useState([]);

    const editBookById = async (id, title) => {
        const {data} = await axios.put(`http://localhost:3001/books/${id}`, { title })
        const newBooks = books.map(book => {
            if(book.id === id) return {...book, ...data}
            return book;
        })

        setBooks(newBooks);
    }

    const fetchBooks = useCallback(async () => {
        const { data } = await axios.get('http://localhost:3001/books');
        setBooks(data)
    }, []);


    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    }

    const createBook = async (title) => {
        const { data } = await axios.post('http://localhost:3001/books',{
            title
        })
        setBooks([...books, data]);
    }

    const share = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    }


    return (
        <BooksContext.Provider value={share}>
            { children }
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;