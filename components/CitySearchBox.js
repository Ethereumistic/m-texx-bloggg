import React, { useState, useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const CitySearchBox = ({ cities, onCitySearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    if (searchQuery) {
      onCitySearch(searchQuery);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    handleSearch(); // Scroll to the city section
  };

  const updateSuggestions = (input) => {
    const filteredSuggestions = cities.filter(city =>
      city.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  useEffect(() => {
    updateSuggestions(searchQuery);
  }, [searchQuery, cities]);

  return (
    <div className='text-center'>
    <input
      className='-translate-y-[12px] h-[38px] border-gray-800 border rounded-lg text-center'
      type="text"
      placeholder="Search for a city..."
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        updateSuggestions(e.target.value);
      }}
    />
    <button className='mx-4 sm:mb-0 mb-4 border border-gray-800 rounded-md' onClick={handleSearch}><BiSearchAlt size={38}/></button>

    {suggestions.length > 0 && searchQuery && (
      <ul className="suggestion-list mx-auto">
        {suggestions.map((suggestion, index) => (
          <li
            className='border-gray-800 border rounded-md text-center inline-block px-2 py-1 m-1 cursor-pointer'
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default CitySearchBox;





