import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, mapConsumer } from 'react-leaflet';
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";

import MarkerClusterGroup from 'react-leaflet-cluster';

 export default function PhoneMap() {

    const markers = require('@/components/markers');

  const customIcon = new Icon({
    iconUrl: "https://cdn.discordapp.com/attachments/1017047163324346420/1138806234468843570/location.png",
    iconSize: [34, 34]
  })

    return (
        // <map className='relative z-0'>
        <div className='sm:hidden -mt-[1200px] relative z-0'>
            
            <MapContainer
                center={[42.7339, 25.4858]}
                zoom={7}
                style={{ width: '100%', height: '400px', }}  
              >
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


                </MapContainer>

        </div>
        // </map>
    );

 };