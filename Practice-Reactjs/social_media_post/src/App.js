import Header from './Header';
import About from './About';
import Nav from './Nav';
import Home from './Home';
import Missing from './Missing'
import Footer from './Footer'
import NewPost from './NewPost'
import PostPage from './PostPage'
import {Link, Routes, Route, useNavigate } from 'react-router-dom';
import EditPost from './EditPost';
import { DataProvider } from './Context/DataContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header  title="SnaPost"/>
        <Nav />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="post" >
            <Route index element = {<NewPost />} />
            <Route path=":id" element = {<PostPage />}/>
          </Route>
          <Route path="/edit/:id" element = {<EditPost  />}/>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
