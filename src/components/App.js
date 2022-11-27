import React, { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

const App = () => {

    const [books, setBooks] = useState([]);

    const editBookById = (id, title) => {
        const newBooks = books.map(book => {
            if(book.id === id) return {...book, title}
            return book;
        })

        setBooks(newBooks);
    }

    const deleteBookById = (id) => {

        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    }

    const handleCreateBook = (title) => {
        const newBooks = [...books, {
            id: Math.round(Math.random() * 1000 + 1),
            title
        }];
        setBooks(newBooks);
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