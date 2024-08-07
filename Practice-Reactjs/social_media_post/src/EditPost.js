import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import DataContext from './Context/DataContext';

const EditPost = () => {
    const {posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody} = useContext(DataContext)
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id)
    useEffect(() =>{
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])
    return (
        <main className="NewPost">
            {editTitle &&
            <>
                <h2>Edit Post</h2>
            <form  className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input 
                    type="text" 
                    id="postTitle"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle (e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea  
                    id="postBody"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)} 
                />
                <button className="submitBtn" type="submit"
                onClick={() => handleEdit(post.id)}>Post</button>
            </form>
            </>
            }
            {!editTitle &&
                <>
                    <h2>Page not found</h2>
                    <Link to="/">Go to Home</Link>
                </>
            }
        </main>
    )
}

export default EditPost