import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TypingTest = () => {
  const [inputText, setInputText] = useState('');
  const [timer, setTimer] = useState(60);
  const [testStarted, setTestStarted] = useState(false);
  const [testEnded, setTestEnded] = useState(false);

  useEffect(() => {
    let interval;

    if (testStarted && !testEnded && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTestEnded(true);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [testStarted, testEnded, timer]);

  const handleInputChange = (e) => {
    if (!testStarted) {
      setTestStarted(true);
    }
    setInputText(e.target.value);
  };

  return (
    <div>
      <h2>Typing Test</h2>
      {testEnded ? (
        <div>
          <p>Test Ended</p>
          <Link to="/score-summary">View Score Summary</Link>
        </div>
      ) : (
        <div>
          <p>Time Remaining: {timer} seconds</p>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Start typing here..."
            disabled={testEnded}
          />
        </div>
      )}
    </div>
  );
};

export default TypingTest;
