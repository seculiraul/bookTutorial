import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

const BookCreate = () => {

    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const onSubmit = (e) => {
        e.preventDefault();
        createBook(title);
        setTitle('')
    }

    return (
        <div className="book-create">
            <h3>add a book</h3>
            <form onSubmit={onSubmit}>
                <label>
                    Title
                </label>
                <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;