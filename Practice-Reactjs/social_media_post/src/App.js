import Header from './Header';
import About from './About';
import Nav from './Nav';
import Home from './Home';
import Missing from './Missing'
import Footer from './Footer'
import NewPost from './NewPost'
import PostPage from './PostPage'
import {Link, Routes, Route } from 'react-router-dom';
import Post from './Post'
import PostLayout from './PostLayout';
import { useState } from 'react';

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
  return (
    <div className="App">
      
      
      <Header  title="PostSnap"/>
      <Nav 
        search={search}
        setSearch={setSearch}
      />
      <Home posts = {posts}/>
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />

    </div>
  );
}

export default App;
