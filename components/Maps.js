import Map, { Marker, Popup } from 'react-map-gl';
import React from 'react';
import getCenter from 'geolib/es/getCenter';
import { LocationMarkerIcon } from '@heroicons/react/solid';


function Maps({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = React.useState({})
  const coordinates = searchResults.map(function (item) {
    return {
      latitude: item.lat,
      longitude: item.long
    }
  })

  const center = getCenter(coordinates);

  const [viewState, setViewState] = React.useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11
  });


  return (
    <Map
      {...viewState}
      mapStyle="mapbox://styles/sid1903/cl2u5shja003t14qlmeyftoip"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={evt => setViewState(evt.viewState)}>
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              role="img"
            >
              <LocationMarkerIcon className="h-8 text-red-500" />
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
            
          ) : (
            <div></div>
          )}
        </div>
      ))}


    </Map>
  )
}

export default Maps