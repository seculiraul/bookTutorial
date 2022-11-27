import React, { useState } from "react";

const BookEdit = ({ book }) => {
    const [title, setTitle] = useState(book.title)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(title);
    }
    return (
        <div className="book-edit">
            <form onSubmit={onSubmit}>
                <label className="label">Book title</label>
                <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className="button is-primary">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;