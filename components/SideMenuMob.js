"use client";
import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'; // Import icons from react-icons
import markers from './markers'; // Import the markers array

const SideMenuMob = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    setSelectedLocation(null); // Reset selected location when city is clicked
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    const marker = markers.find((marker) => marker.popUp === location);
    if (marker) {
      const [lat, lng] = marker.geocode;
      map.setView([lat, lng], 14); // Adjust zoom level as needed
    }
  };

  const uniqueCityNames = [...new Set(markers.map((marker) => marker.city))];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 border-r border-gray-300 dark:border-gray-900 fixed">
      <div className="sm:hidden">
        <h2 className="text-lg font-semibold mb-2">Cities</h2>
        <ul>
          {uniqueCityNames.map((cityName, index) => (
            <li
              key={index}
              className={`mb-1 cursor-pointer ${
                selectedCity === cityName ? 'font-semibold' : ''
              }`}
              onClick={() => handleCityClick(cityName)}
            >
              {cityName}
              {selectedCity === cityName && (
                <ul className="ml-4">
                  {markers
                    .filter((marker) => marker.city === cityName)
                    .map((marker, index) => (
                      <li
                        key={index}
                        className="mb-1 cursor-pointer"
                        onClick={() => handleLocationClick(marker.popUp)}
                      >
                        {marker.popUp}
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop version */}
      <div className="hidden sm:block">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-900 rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">Cities</h2>
        <ul>
          {uniqueCityNames.map((cityName, index) => (
            <li key={index} className="mb-1">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleCityClick(cityName)}
              >
                {cityName}
                {selectedCity === cityName ? (
                  <FaAngleDown className="w-4 h-4 ml-2" />
                ) : (
                  <FaAngleRight className="w-4 h-4 ml-2" />
                )}
              </div>
              {selectedCity === cityName && (
                <ul className="ml-4">
                  {markers
                    .filter((marker) => marker.city === cityName)
                    .map((marker, index) => (
                      <li key={index}>{marker.popUp}</li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenuMob;
