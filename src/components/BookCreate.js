import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {

    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
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