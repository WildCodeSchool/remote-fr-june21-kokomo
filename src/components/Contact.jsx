import { useState } from "react";

import "./Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState([]);

  const validateForm = (e) => {
    e.preventDefault();
    const result = [
      " Le message a bien été envoyé avec les infos :",
      firstName,
      lastName,
      email,
      message,
    ];
    setSend(result);
  };

  return (
    <div className='contact-container'>
      <h3 className='contact-title'>Contact-us!</h3>
      <form className='contact-form'>
        <div className='question '>
          <label>
            <h4>Firstname :</h4>
            <input
              className='contact-input contact-firstname'
              type='text'
              name='firtName'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='Ugolini'
            />
          </label>
        </div>
        <div className='question'>
          <label>
            <h4>Lastname :</h4>
            <input
              className='contact-input'
              type='text'
              name='lastName'
              id='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Maria'
            />
          </label>
        </div>
        <div className='question'>
          <label>
            {" "}
            <h4>Email :</h4>
            <input
              className='contact-input'
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='ugolini.maria@mail.com'
            />
          </label>
        </div>

        <div className='question'>
          <label htmlFor='c_content'>
            <h4>Message :</h4>
          </label>
          <textarea
            className='contact-message'
            type='Message'
            name='c_content'
            id='c_content'
            onChange={(e) => setMessage(e.target.value)}
            cols='35'
            rows='7'
          ></textarea>
        </div>

        <div className='question button-center'>
          <label>
            <input
              className='submit-button'
              type='submit'
              name='submit'
              value='Submit'
              onClick={(e) => validateForm(e)}
            />
          </label>
        </div>
      </form>
      <div className='map'>
        {send.map((info) => (
          <div> {info}</div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
