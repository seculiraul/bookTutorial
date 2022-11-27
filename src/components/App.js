import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

const App = () => {

    const [books, setBooks] = useState([]);

    const editBookById = async (id, title) => {
        const {data} = await axios.put(`http://localhost:3001/books/${id}`, { title })
        const newBooks = books.map(book => {
            if(book.id === id) return {...book, ...data}
            return book;
        })

        setBooks(newBooks);
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        const { data } = await axios.get('http://localhost:3001/books');
        setBooks(data);
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        
        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    }

    const handleCreateBook = async (title) => {
        const { data } = await axios.post('http://localhost:3001/books',{
            title
        })
        setBooks([...books, data]);
    }
    return (
        <div className="app">
            <BookList
            books={books}
            deleteBookById={deleteBookById}
            editBookById={editBookById}
            />
            <BookCreate onCreate={handleCreateBook} />
        </div>
    )
}

export default App;