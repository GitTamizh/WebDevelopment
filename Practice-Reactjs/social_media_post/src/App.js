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

function App() {
  const [posts, setPosts] = useState([
    {
      id:1,
      title: "My first post",
      datetime: " July 25th 2024 06:37:00 AM",
      body: "Learning react js"
    },
    {
      id:2,
      title: "My second post",
      datetime: " July 25th 2024 06:37:00 AM",
      body: "Running on the road"
    },
    {
      id:3,
      title: "My third post",
      datetime: " July 25th 2024 06:37:00 AM",
      body: "playing games and learning react js"
    },
    {
      id:4,
      title: "My fourth post",
      datetime: " July 25th 2024 06:37:00 AM",
      body: "practicing react js"
    },
  ])
  const [search, setSearch] = useState('')
  const [searchPosts, setSearchPosts] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filteredResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchPosts(filteredResults.reverse());
    },[posts, search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MM dd, yyyy pp');
    const newpost = {id, title: postTitle, datetime, body: postBody};
    const allPosts = [...posts, newpost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate("/")
  }
  const handleDelete = (id) => {
      const postList = posts.filter(post => post.id !== id)
      setPosts(postList)
      navigate("/")
  }
  return (
    <div className="App">
      <Header  title="PostSnap"/>
      <Nav 
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element = {<Home posts = {searchPosts}/>}/>
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
      <Route path="about" element={<About />} />
      <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
