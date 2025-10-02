// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // We will create this CSS file next

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name..."
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};
export default SearchBar;