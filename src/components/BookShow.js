import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBookById }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    let content = <h3>{book.title}</h3>;
    if(showEdit) content = <BookEdit book={book}/>
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