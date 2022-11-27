import React, { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title)

    const handleOnSubmit = (e) => {
        e.preventDefault();

        onSubmit(book.id, title);
    }
    return (
        <div className="book-edit">
            <form onSubmit={handleOnSubmit}>
                <label className="label">Book title</label>
                <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className="button is-primary">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;