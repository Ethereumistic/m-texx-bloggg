"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, mapConsumer } from 'react-leaflet';
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { FiMap } from 'react-icons/fi';

import MarkerGrid from '@/components/MarkerGrid';
import MarkerClusterGroup from 'react-leaflet-cluster';
import Backlink from '@/components/Backlink';
import PhoneMap from '@/components/PhoneMap';


function LocationMap({ selectedLocation }) {

  const map = useMap();

  


    if (selectedLocation) {
      const marker = markers.find((marker) => marker.popUp === selectedLocation);
      if (marker) {
        const [lat, lng] = marker.geocode;
        map.setView([lat, lng], 28); // Adjust zoom level as needed
      }
    }
  
    return null; // Return null since this component doesn't render anything
  }

  const ScrollMap = () => {
    // const [showSmallMap, setShowSmallMap] = useState(false);
    // const [scrollPosition, setScrollPosition] = useState(0);
  
    // const handleScroll = () => {
    //   setScrollPosition(window.scrollY);
    //   setShowSmallMap(window.scrollY > 220); // Adjust the scroll threshold as needed
    // };
  
    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
  
    // const handleClick = () => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // };
  
    return (
      // <div className="fixed mt-[100px] top-0 left-0 right-0 bottom-0 overflow-hidden xl:hidden lg:hidden md:hidden z-10">
      //   {showSmallMap ? null : (
      //     <div className="w-11/12 mx-auto fixed ml-4 pb-64">
      //       <div style={{ pointerEvents: 'none' }}>
      //         <MapContainer
      //           center={[42.7339, 25.4858]}
      //           zoom={7}
      //           style={{ width: '100%', height: '400px', zIndex: -10 }}  
      //         >
      //           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      //           <MarkerClusterGroup chunkedLoading>
      //             {markers.map((marker, index) => (
      //               <Marker key={index} position={marker.geocode} icon={customIcon}>
      //                 <Popup>
      //                   <div>
      //                     <p>City: {marker.city}</p>
      //                     <p>Location: {marker.popUp}</p>
      //                   </div>
      //                 </Popup>
      //               </Marker>
      //             ))}
      //           </MarkerClusterGroup>
      //           <LocationMap selectedLocation={[42.7339, 25.4858]} />
      //         </MapContainer>
      //       </div>
      //       <div style={{ position: 'relative', pointerEvents: 'auto' }} onClick={handleClick}>
      //         {/* Your other content goes here */}
      //       </div>
      //     </div>
      //   )}
      // </div>
      
      <PhoneMap />

    );
  };
  

const markers = require('@/components/markers');

  const customIcon = new Icon({
    iconUrl: "https://cdn.discordapp.com/attachments/1017047163324346420/1138806234468843570/location.png",
    iconSize: [34, 34]
  })
  

const Locations = () => {
  

  
  


        //asd
      

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
  
    const handleCityClick = (cityName) => {
      if (selectedCity === cityName) {
        setSelectedCity(null); // Close the menu if the same city is clicked again
      } else {
        setSelectedCity(cityName);
      }
    };
  
    const handleLocationClick = (location) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setSelectedLocation(location);
      const marker = markers.find((marker) => marker.popUp === location);
      if (marker) {
        const [lat, lng] = marker.geocode;


        // map.setView([lat, lng], 14); // Adjust zoom level as needed
      }
    };
  
    const uniqueCityNames = [...new Set(markers.map((marker) => marker.city))];



  return (
    <div className='overflow-x-hidden overflow-y-visible relative '>



      {/* Desktop version SIDE MENU */}
      <div className='relative sm:fixed mt-96 sm:mt-0  ml-12 sm:ml-0'>
stable
      <div className="bg-green-200 sm:ml-4 -ml-16 sm:mb-0 -mb-64 sm:mt-0 mt-8 dark:bg-gray-800 px-2 rounded-md w-72 h-[800px] overflow-auto custom-scrollbar " >

        <h2 className="text-2xl pl-20 font-bold mt-4 mb-6">Локации</h2>
        <ul className=''>
          {uniqueCityNames.map((cityName, index) => (
            <li key={index} className=" pl-16 py-2 border-white border  w-full">
              <div
                className="flex items-center font-bold cursor-pointer hover:text-green-400 text-green-900 dark:text-gray-300"
                onClick={() => handleCityClick(cityName)}
                onTouchStart={() => handleCityClick(cityName)}
                 >

                {cityName}
                {selectedCity === cityName ?  (
                  <FaAngleDown className="w-4 h-4 ml-2" />
                ) : (
                  <FaAngleRight className="w-4 h-4 ml-2" />
                )}
              </div>
              {selectedCity === cityName && (
                <ol className="ml-4  cursor-pointer">
                  {markers
                    .filter((marker) => marker.city === cityName)
                    .map((marker, index) => (
                        <li
                        key={index}
                        className="mb-1 list-decimal cursor-pointer"
                        onClick={() => handleLocationClick(marker.popUp)}
                        onTouchStart={() => handleLocationClick(marker.popUp)}
                        >
                        {marker.popUp}
                      </li>
                    ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
    <ScrollMap />


        <div className='  xl:translate-x-80 lg:translate-x-80 md:translate-x-80 sm:translate-x-80'>
        <div className="hidden sm:block">


{/* DESKTOP MAP */}

        <MapContainer
      center={[42.7339, 25.4858]}
      zoom={8}
      style={{ width: '80%', height: '800px' }} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
<MarkerClusterGroup
          chunkedLoading>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
  <div>
    <p>{marker.city}</p>
    <p>{marker.popUp}</p>
    <p>
{marker.geocode[0].toFixed(6)} {marker.geocode[1].toFixed(6)}
    </p>
  </div>
</Popup>


          </Marker>
        ))}
        </MarkerClusterGroup>
        <LocationMap selectedLocation={selectedLocation} />



        </MapContainer>
        
        </div>
        </div>

        <div>
            
        </div>



{/* PHONE MAP */}

        

        <div className='mt-16'>
        <MarkerGrid markers={markers} />

      </div>
          <Backlink page="locations" />
    </div>
  )
}

export default Locations