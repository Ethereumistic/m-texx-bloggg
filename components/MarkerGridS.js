import React from 'react';

const MarkerGrid = ({ markers }) => {
  // Group markers by city
  const groupedMarkers = markers.reduce((acc, marker) => {
    const { city } = marker;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(marker);
    return acc;
  }, {});

  return (
    <div className="grid  gap-4 border p-4 text-center mx-80 translate-x-16">
      {Object.keys(groupedMarkers).map((city, index) => (
        <div key={index} className="border p-4">
          <h2 className="text-xl font-bold mb-2">{city}</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
              <ul>
              <h3 className="text-sm font-semibold">Адрес:</h3>

                {groupedMarkers[city].map((location, locationIndex) => (
                  
                  <li key={locationIndex} className="mb-1 hover:underline ">
                    
                    {location.popUp}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">GPS:</h3>
              {groupedMarkers[city].map((location, locationIndex) => (
                <p key={locationIndex} className="mb-2 hover:underline ">
                  {location.geocode[0]}, {location.geocode[1]}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarkerGrid;

{/* PHONE MENU */}
{/* <div className="bg-white dark:bg-black p-4 border-gray-300 dark:border-gray-900 fixed w-36"> */}
{/* <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-900 rounded-md mb-4 sm:hidden"
        /> */}
      {/* <div className="sm:hidden">
        <h2 className="text-2xl font-bold mb-2">Локации</h2>
        <ul>
          {uniqueCityNames.map((cityName, index) => (
            <li
              key={index}
              className={`mb-2 border border-gray-300 dark:border-gray-900 rounded-md px-2 py-2 font-bold cursor-pointer ${
                selectedCity === cityName ? 'font-black' : ''
              }`}
              onClick={() => handleCityClick(cityName)}
            >
              {cityName}
              {selectedCity === cityName && (
                <ul className="ml-4 font-normal">
                  {markers
                    .filter((marker) => marker.city === cityName)
                    .map((marker, index) => (
                        <li
                        key={index}
                        className="mb-1 list-disc cursor-pointer"
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
      </div> */}
