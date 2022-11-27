import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBookById, editBookById }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, title) => {
        editBookById(id, title);
        setShowEdit(false);
    }
    let content = <h3>{book.title}</h3>;
    if(showEdit) content = <BookEdit onSubmit={handleSubmit} book={book}/>
    return (
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <button
                onClick={handleEditClick}
                className="edit">
                    Edit
                </button>
                <button 
                className="delete"
                onClick={() => deleteBookById(book.id)}
                >Delete</button>
            </div>
        </div>
    )
}

export default BookShow;