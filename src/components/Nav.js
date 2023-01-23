import { Fragment } from "react";
import "./Nav.css";

let Nav = () => {
  return (
    <Fragment>
      <nav>
        <div>Logo</div>
        <div className="list">
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Sign Up</li>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
