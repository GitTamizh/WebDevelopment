import Header from './Header';
import About from './About';
import Nav from './Nav';
import Home from './Home';
import Missing from './Missing'
import Footer from './Footer'
import NewPost from './NewPost'
import PostPage from './PostPage'
import {Link, Routes, Route, useNavigate } from 'react-router-dom';
import Post from './Post'
import PostLayout from './PostLayout';
import { useEffect, useState } from 'react';
import {format} from 'date-fns'
import api from './api/posts'
import EditPost from './EditPost';
import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchPosts, setSearchPosts] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const {width} = useWindowSize()
  const {data, fetchError, isLoading} = useAxiosFetch("http://localhost:3500/posts")
  const navigate = useNavigate()

  useEffect(() => {
    setPosts(data)
  }, [data])

  useEffect(() => {
    const filteredResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchPosts(filteredResults.reverse());
    },[posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody};
    try {
        const response = await api.post('/posts', newPost);
        const allPosts = [...posts, response.data];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate("/")
    } catch (err) {
        if(err.response){
            console.log(`Error: ${err.message}`);
        }
    }
    
  }
  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MM dd, yyyy pp');
    const updatedPost = {id, title: editTitle, datetime, body: editBody};
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? {...response.data}:post));
      setEditTitle('');
      setEditBody('');
      navigate("/")
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  const handleDelete = async(id) => {
      try {
        await api.delete(`/posts/${id}`)
        const postList = posts.filter(post => post.id !== id)
        setPosts(postList)
        navigate("/")
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
      
  }
  
  return (
    <div className="App">
      <Header  title="SnaPost" width={width}/>
      <Nav 
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element = 
        {<Home 
        posts = {searchPosts}
        fetchError={fetchError}
        isLoading = {isLoading}
        />}/>
      <Route path="post" >
        <Route index element = {<NewPost 
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}
        />} />
        <Route path=":id" element = {<PostPage  posts= {posts} handleDelete = {handleDelete}/>}/>
      </Route>
      <Route path="/edit/:id" element = 
        {
          <EditPost 
            posts = {posts}
            handleEdit = {handleEdit}
            editTitle = {editTitle}
            setEditTitle= {setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />
        }
      />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
