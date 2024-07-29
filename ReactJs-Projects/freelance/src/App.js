import {Routes, Route} from "react-router-dom"
import './App.css';
// import Link from "react-router-dom"
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Registration from "./Registration";
import Loader from "./Loader";





function App() {
  return (
      <div className="App">
        {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword  />} />
        <Route path="/sign-up" element={<Registration />} />
      </Routes>
      </div>
  );
}

export default App;
