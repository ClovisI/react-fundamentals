// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const handleOnSubmit = (event) =>{
    event.preventDefault();
    const userName = event.target.elements.userNameInput.value;
    return alert(`you entered ${userName}`);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input id="userNameInput"type="text" />
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
