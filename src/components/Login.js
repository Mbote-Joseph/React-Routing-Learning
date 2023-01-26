import { Fragment } from "react";

let Login = () => {
  return (
    <Fragment>
      <div className="signup">
        <h2>Login Page</h2>
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

export default Login;
