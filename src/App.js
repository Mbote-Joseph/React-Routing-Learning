import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <nav>
        <div></div>
        <div className="links">
          <Link className="list" to="/" element={<Home />}>
            {" "}
            Home
          </Link>
          <Link className="list" to="/about">
            {" "}
            About
          </Link>
          <Link className="list" to="/contact">
            {" "}
            Contact
          </Link>
          <Link className="list" to="/login">
            {" "}
            Login
          </Link>
          <Link className="list" to="/signup">
            {" "}
            Sign Up
          </Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
