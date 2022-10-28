import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('Default Value...');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  return (
    <>
      <p>Hello, { firstName } you are awesome!</p>
      <form>
        <label htmlFor="first-name">First Name: </label>
        <input
          id="first-name"
          type="text"
          name="first-name"
          onInput={handleChangeFirstName}
          value={ firstName }
        />
      </form>
    </>
  );
}

export default App;
