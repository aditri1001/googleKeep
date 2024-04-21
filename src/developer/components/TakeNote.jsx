import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/AddRemove'


const TakeNote = () => {
    const inputRef = useRef(null);
    const textareaRef = useRef(null);
    
    const dispatch = useDispatch();

    const clearValues = () => {
        if (inputRef.current && inputRef.current.value.trim() !== "" || textareaRef.current && textareaRef.current.value.trim() !== "") {
            const newNote = { title: inputRef.current.value, text: textareaRef.current.value };
            dispatch(addTodo(newNote))
            inputRef.current.value = "";
            textareaRef.current.value = "";
        }
    }

return (
    <>
        <div className='w-full flex flex-col h-60 justify-center items-center'>
            <div className='w-2/5 flex flex-col h-40 justify-center items-center border rounded-lg'>
                <input
                    ref={inputRef}
                    className='p-2 w-full outline-none h-10'
                    type="text"
                    placeholder='Title'
                    name='title' />
                <p className='w-full flex flex-col justify-center items-center h-32'>
                    <textarea
                        ref={textareaRef}
                        className='outline-none p-2 w-full h-20 overflow-hidden'
                        name='content'
                        placeholder='Take a Note...' />
                    <div className="w-full">
                        <Button onClick={clearValues} variant="contained" endIcon={<SendIcon />}>
                            Add
                        </Button>
                    </div>
                </p>
            </div>
        </div>
    </>
)
}

export default TakeNote