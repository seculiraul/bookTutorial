import React, { useEffect } from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

const App = () => {

    const { fetchBooks } = useBooksContext()

    useEffect(() => {
        fetchBooks()
    }, [fetchBooks])

    return (
        <div className="app">
            <BookList />
            <BookCreate />
        </div>
    )
}

export default App;