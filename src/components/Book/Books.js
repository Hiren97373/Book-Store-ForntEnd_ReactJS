import React, { useEffect, useState } from 'react';
import axios from "axios";
import Book from './Book';
import './Book.css'


const URL = "http://localhost:4000/api/v1/getall";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};

function Books() {
    const [books, setBooks] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.book))
    }, []);
    // console.log(books);
    return (
        <div>
            <ul>
                {books && books.map((book, i) => (
                    <li key={i}>
                        <Book book={book} />

                    </li>
                ))}
            </ul>

        </div>
    )
}


export default Books