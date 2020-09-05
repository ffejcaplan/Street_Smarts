import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as truckData from '../../data/food-trucks.json';

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 43.6591,
    longitude: -70.2568,
    width: '100vw',
    height: '70vh',
    zoom: 11,
  });

  const [selectedTruck, setSelectedTruck] = useState(null);

  useEffect(() => {
    const listener = (event) => {
      if (event.key === 'Escape') {
        setSelectedTruck(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <section className="bg-light page-section">
      <div className="container">
        <div className="row" id="map">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              Map of Portland, ME
            </h2>
            <h3 className="section-subheading text-muted">
              Ping your location and consumers will found you!
            </h3>
          </div>
        </div>
        <div className="row">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1Ijoic2JvbmlhcyIsImEiOiJja2VweDlkbWYwcTJpMnhuaXM0OHRlM3RiIn0.Ydx1dod6akzvB42q_ksxcA"
            mapStyle="mapbox://styles/sbonias/ckea49ge70lvv19qfflrr77px"
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            {truckData.features.map((truck) => (
              <Marker
                key={truck.properties.PARK_ID}
                latitude={truck.geometry.coordinates[1]}
                longitude={truck.geometry.coordinates[0]}
              >
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedTruck(truck);
                  }}
                >
                  <i className="fa fa-truck" style={{ color: 'black' }}></i>
                </button>
              </Marker>
            ))}
            {selectedTruck ? (
              <Popup
                latitude={selectedTruck.geometry.coordinates[1]}
                longitude={selectedTruck.geometry.coordinates[0]}
                onClose={() => {
                  setSelectedTruck(null);
                }}
              >
                <div>
                  <h2>{selectedTruck.properties.NAME}</h2>
                  <p>{selectedTruck.properties.DESCRIPTIO}</p>
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
        </div>
      </div>
    </section>
  );
}

export default Map;
