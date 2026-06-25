import { useRef, useState } from 'react';
import './App.css';

function blockSpecialChars(e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '');
}

function App() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const [fullName, setFullName] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    setFullName(`${firstNameRef.current.value} ${lastNameRef.current.value}`);
  }

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">
          First Name:
          <input
            required
            name="firstName"
            ref={firstNameRef}
            onChange={blockSpecialChars}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            required
            name="lastName"
            ref={lastNameRef}
            onChange={blockSpecialChars}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Full Name: {fullName}</h2>
    </>
  );
}

export default App;
