import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '50%',
  height: '600px',
  marginLeft: '5%',
};

// 한반도의 중심 위치 (위도, 경도)
const center = {
  lat: 36.5, // 한반도 중심 위도
  lng: 127.5, // 한반도 중심 경도
};

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7} />
  ) : (
    <div>Loading</div>
  );
};

export default GoogleMapComponent;
