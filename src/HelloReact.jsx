import React, { useState } from 'react';
import './index.css';


function HelloWorld() {
  // State to manage the displayed message
  const [message, setMessage] = useState("Hello, Universe!");

  // Function to change the message when the component is clicked
  const handleClick = () => {
    setMessage("Hello, React!");
  };

  return (
    <div className='helloReact' onClick={handleClick} style={{ cursor: 'pointer' }}>
      {message}
    </div>
  );
}

export default HelloWorld;
