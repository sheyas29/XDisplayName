import { useRef, useState } from 'react';
import './App.css';

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
          <input type="text" required name="firstName" ref={firstNameRef} />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" required name="lastName" ref={lastNameRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {fullName && <h2>Full Name: {fullName}</h2>}
    </>
  );
}

export default App;
