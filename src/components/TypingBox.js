import React, { useState } from 'react';

const TypingBox = () => {
  const [inputText, setInputText] = useState('');
 

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <h2>Typing Box</h2>
     
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Start typing here..."
      />
      
    </div>
  );
};

export default TypingBox;
