import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText('');
  };

  const wordCount = text.trim().split(/\s+/).filter((word) => word !== '').length;
  const charCount = text.length;

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-2">Word Counter</h1>
      <p className="mb-4">Free online character and word count tool.</p>
      <div className="form-group">
        <textarea
          className="form-control mb-3"
          rows="6"
          value={text}
          onChange={handleTextChange}
          placeholder="Type or paste your text here..."
          style={{ padding: '10px', fontSize: '16px' }}
        ></textarea>
      </div>
      <button
        className={`btn ${text.length > 0 ? 'btn-danger' : 'btn-secondary'} mb-3`}
        onClick={clearText}
        disabled={text.length === 0}
      >
        Clear
      </button>
      <div className="d-flex justify-content-between">
        <div className="badge bg-primary mx-2">
          Character: {charCount}
        </div>
        <div className="badge bg-primary mx-2">
          Word: {wordCount}
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h2>Page Not Found</h2>
      <p>
        <Link to="/">Go back to Home</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


