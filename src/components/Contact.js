import { Fragment } from "react";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, message);
    alert(`Thank you ${firstName} ${lastName} for your message!`);
  };

  return (
    <Fragment>
      <h2> Contact Us Page</h2>
      <form className="card">
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          placeholder="Enter your First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          placeholder="Enter your Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          value={email}
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <label>Message</label>
        <textarea
          type="text"
          value={message}
          placeholder="Enter your Message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <br />
        <input type="submit" onClick={onSubmit} />
      </form>
    </Fragment>
  );
};

export default Contact;
