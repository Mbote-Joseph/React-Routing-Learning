import { Fragment } from "react";
import "./SignUp.css";

let SignUp = () => {
  return (
    <Fragment>
      <div className="signup">
        <h2>Sign Up Page</h2>
        <div className="card">
          <input type="text" className="email" placeholder="Email Address" />
          <br />
          <br />
          <input
            type="password"
            className="password"
            placeholder="Enter password"
          />
          <br />
          <br />
          <input type="submit" className="btn btn-primary" />
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
