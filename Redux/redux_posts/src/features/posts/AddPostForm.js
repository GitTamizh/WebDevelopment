import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {nanoid} from '@reduxjs/toolkit'
import { postAdded } from './postSlice';


const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () =>{
        if(title && content){
            dispatch(
                postAdded(
                    title,
                    content
                )
            )
            setTitle('');
            setContent('');
        }
    }

    return (
        <section>
            <h2>New Post</h2>
            <form>
            <label htmlFor="postTitle">Title:</label>
            <input
                type="text"
                id="postTitle"
                name="postTile"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <input
                type="text"
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
            />
            <button
                    type="button"
                    onClick={onSavePostClicked}
                >Save Post</button>
            </form>
        </section>
    );
}

export default AddPostForm