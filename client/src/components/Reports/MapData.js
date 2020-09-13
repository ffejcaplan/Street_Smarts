import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Logo from '../../assets/logos/StreetSmartsLogo3.jpg';
import { Modal } from 'react-bootstrap';

import { MDBBtn } from 'mdbreact';

export default function MapData(props) {
  console.log(props.locations);
  console.log('map data page');
  const [modalShow, setModalShow] = useState(false);
  const [viewport, setViewport] = useState();
  const [marker, setMarker] = useState();
  const locations = props.locations.map((location) => {
    return location[0];
  });
  const sales = props.sales;

  let merged = [];
  if (locations[0] !== undefined) {
    merged = locations.map((location) => ({
      ...location,
      ...sales.find((sale) => sale.id === location.id),
    }));
  }
  console.log(viewport);
  const handleMapClick = (long, lat) => {
    console.log(long, lat);
    setMarker([{ longitude: parseFloat(long), latitude: parseFloat(lat) }]);
    setViewport({
      longitude: parseFloat(long),
      latitude: parseFloat(lat),
      zoom: 12,
      width: '30vw',
      height: '30vh',
    });

    setModalShow(true);
  };
  const MapModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          className="text-center"
          style={{ border: 'solid black 1px' }}
        >
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoiZmZlamNhcDUiLCJhIjoiY2tlMzBqem9rMGVmcDJ0cDhwNjdyeHJiNiJ9.EJrCDgJEG_jROwOWwyWMMw"
            mapStyle="mapbox://styles/ffejcap5/cke8wj61j5gh91atb9cwiygp8"
            className="col-xs-11 col-sm-12"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            {marker &&
              marker.map((mark) => {
                console.log(mark);
                return (
                  <Marker
                    key={1}
                    latitude={mark.latitude}
                    longitude={mark.longitude}
                  >
                    <img
                      className="img-thumbnail"
                      src={Logo}
                      alt="logo"
                      width="40px"
                    />
                  </Marker>
                );
              })}
          </ReactMapGL>

          <MDBBtn
            className="btn"
            gradient="success"
            onClick={() => {
              setModalShow(false);
            }}
          >
            Return
          </MDBBtn>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <table className="table" id="salesTable">
        <thead>
          <tr>
            <th>Location</th>
            <th>longitude, latitude</th>
            <th>Average Sale</th>
            <th>Average Day's Total</th>
            <th>View on Map</th>
          </tr>
        </thead>
        <tbody>
          {merged &&
            merged.map((merge) => {
              return (
                <tr key={merge.id}>
                  <td>{merge.nickname}</td>
                  <td>
                    {merge.longitude}, {merge.latitude}
                  </td>
                  <td>{merge.averageSale}</td>
                  <td>{merge.avgDayTotal}</td>
                  <td
                    value={{
                      longitude: merge.longitude,
                      latitude: merge.latitude,
                    }}
                  >
                    <button
                      className="btn btn-primary"
                      value={merge}
                      onClick={(e) =>
                        handleMapClick(merge.longitude, merge.latitude)
                      }
                    >
                      See on Map
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <MapModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </>
  );
}
