import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '50%',
  height: '600px',
  marginLeft: '5%',
};

// 한반도의 중심 위치 (위도, 경도)
const center = {
  lat: 36.5,
  lng: 127.5,
};

const GoogleMapComponent = () => {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 백엔드에서 Google Maps API 키 가져오기
    const fetchApiKey = async () => {
      try {
        const response = await axios.get('https://plannerback.guswldaiccproject.com/api/google-maps');
        setGoogleMapsApiKey(response.data.googleMapsApiKey);
      } catch (error) {
        console.error('Error fetching Google Maps API key:', error);
      }
    };

    fetchApiKey();
  }, []);

  useEffect(() => {
    if (googleMapsApiKey) {
      const loadScript = () => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
          setIsLoaded(true);
        };
      };

      loadScript();
    }
  }, [googleMapsApiKey]);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7} />
  ) : (
    <div>Loading</div>
  );
};

export default GoogleMapComponent;
