import { Fragment } from "react";
import { useState } from "react";

const Home = () => {
  const [inputData, setInputData] = useState({});

  const handleSubmit = (e) => {
    const firstName = e.target.value;
    const lastName = e.target.value;
    const email = e.target.value;
    setInputData((values) => ({ ...values, firstName, lastName, email }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully submitted`);
    console.log(inputData);
  };
  return (
    <Fragment>
      <h2>Home Page</h2>

      <form className="card">
        <label>First Name</label>
        <input
          type="text"
          value={inputData.firstName}
          placeholder="Enter your First Name"
          onChange={handleSubmit}
          required
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          value={inputData.lastName}
          placeholder="Enter your Last Name"
          onChange={handleSubmit}
          required
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          value={inputData.email}
          placeholder="Enter your Email"
          onChange={handleSubmit}
          required
        />
        <br />
        <input type="submit" onClick={onSubmit} />

        <br />
      </form>

      <h4>{inputData.firstName}</h4>
    </Fragment>
  );
};

export default Home;
