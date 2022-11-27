import React from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookShow from "./BookShow";

const BookList = () => {

    const { books } = useBooksContext();

    const renderedBooks = () => {
        return books.map(book => {
            return <BookShow 
            key={book.id}
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