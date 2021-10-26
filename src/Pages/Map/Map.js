import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import './Map.css'


mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1dm8xMjEyIiwiYSI6ImNrdjBrcnpzMTJpdmYyb28wZXN0ZjR2MmEifQ.V5TOc3JZJrcmj-2F9q9zeg';
const Map = () => {
  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [73.753670, 33.147984],
      zoom: 13
      });
      map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );

  },[])
    return (
        <div>
          <div className="map-design" id="map"></div>
        </div>
    );
};

export default Map;