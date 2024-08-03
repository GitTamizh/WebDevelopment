import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
// import Link from "react-router-dom"
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Registration from "./Registration";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";


const Layout = () => (
  <div>
    <Navbar />
    <Outlet /> 
  </div>
);




function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<Registration />} />
      </Routes>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/homePage" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
