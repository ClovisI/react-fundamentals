// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef } from 'react';

function UsernameForm({onSubmitUsername}) {
  let inputRef = useRef(null);
  
  const handleOnSubmit = (event) =>{
    event.preventDefault();
    return alert(`you entered ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input ref={inputRef} id="userNameInput"type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
