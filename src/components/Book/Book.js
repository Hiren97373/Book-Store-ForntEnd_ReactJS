import { Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Book.css'
import axios from 'axios';


function Book(props) {
    const history = useNavigate();

    const deleteHandler = async (e) => {
        await axios
        axios.delete(`http://localhost:4000/api/v1/book/delete/${_id}`)
            .then(res => res.data)
            .then(() => history("/"))
            .then(() => history("/books"))

    }
    const { _id, name, author, description, price, image } = props.book;
    return (
        <div className='card'>
            <img src={image} alt={name} />
            <article>By {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h2>Rs.{price}</h2>
            <Button LinkComponent={Link} to={`/books/${_id}`} st={{ mt: "auto" }}>Update</Button>
            <Button onClick={(e) => deleteHandler(e)} st={{ mt: "auto" }}>Delete</Button>
        </div>
    )
}

export default Book