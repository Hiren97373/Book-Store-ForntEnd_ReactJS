import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddBook() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        author: "",
        description: "",
        price: "",
        image: ""
    });
    const [checked, setChecked] = useState(false);
    const handlerChange = (e) => {
        // console.log(e.target.value)
        setInputs((prevState) => ({
            ...inputs,
            [e.target.name]: e.target.value
        }))
        // console.log(e.target.name, "value", e.target.value)
    }



    const sendRequest = async () => {
        axios.post("http://localhost:4000/api/v1/addbook", {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            image: String(inputs.image),
            price: Number(inputs.price),
            available: Boolean(checked)

        }).then(res => res.data);
    }

    const handleSubmit = (e) => {

        // console.log(inputs, checked)
        sendRequest().then(() => history('/books'))

    }
    return (
        <form >
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                maxWidth={700}
                alignContent={"center"}
                alignSelf={"center"}
                marginLeft={"auto"}
                marginRight={"auto"}
            >
                <FormLabel>Name</FormLabel>
                <TextField value={inputs.name}
                    onChange={handlerChange} margin='normal' fullWidth variant='outlined' name='name' />

                <FormLabel>Author</FormLabel>
                <TextField value={inputs.author}
                    onChange={handlerChange} margin='normal' fullWidth variant='outlined' name='author' />

                <FormLabel>Description</FormLabel>
                <TextField value={inputs.description}
                    onChange={handlerChange} margin='normal' fullWidth variant='outlined' name='description' />

                <FormLabel>Price</FormLabel>
                <TextField value={inputs.price}
                    onChange={handlerChange} type="number" margin='normal' fullWidth variant='outlined' name='price' />

                <FormLabel>Image</FormLabel>
                <TextField value={inputs.image}
                    onChange={handlerChange} margin='normal' fullWidth variant='outlined' name='image' />

                <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />

                <Button variant='contained' onClick={(e) => handleSubmit(e)} >Add Book</Button>

            </Box>
        </form>
    )
}

export default AddBook