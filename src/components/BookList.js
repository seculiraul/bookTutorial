import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, deleteBookById }) => {

    const renderedBooks = () => {
        return books.map(book => {
            return <BookShow 
            key={book.id}
            deleteBookById={deleteBookById}
            book={book}/> 
        });
    }

    return (
        <div className="book-list">
            {renderedBooks()}
        </div>
    )
}

export default BookList;