import React, { useState, useEffect, useRef } from 'react';

import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
  Polyline
} from 'google-maps-react';

import { GOOGLE_API_KEY } from '../../Config/siteConfig';
import { useSelector } from 'react-redux';

const defaultMapState = {
  initialCenter: { lat: 23.3, lng: 22.2 },
  allLastLngs: [],
  showModal: false,
  dataToShow: {},
  mapDiv: '',
  activeMarker: {},
  selectedPlace: {},
  showingInfoWindow: false,
  infoData: {},
  displayMarkers: '',
  loader: false,
  polylineData: [],
  zoom: 3,
  PolylineOptions: {
    strokeWeight: 2,
    strokeOpacity: 1,
    strokeColor: '#1dc1ec',
    geodesic: true
  },
  allStores: [],
  polyLine: (
    <Polyline
      path={[]}
      options={{
        strokeWeight: 2,
        strokeOpacity: 1,
        strokeColor: '#1dc1ec',
        geodesic: true
      }}
    />
  ),
  selectedMarker: null
};

function MapContainer(props: any) {
  const [loader, setLoader] = useState(false);
  const [mapState, setMapState] = useState(defaultMapState);
  const viewReducerResponse = useSelector((state: any) => state.viewReducer);
  console.log('viewReducerResponse', viewReducerResponse);
  console.log('props', props);
  const googleMap = useRef(null);

  useEffect(() => {
    console.log('currentFlightList in map', viewReducerResponse.currentFlightList);
    if (viewReducerResponse.currentFlightList.length > 0) {

      const allLastLngs: any = viewReducerResponse.currentFlightList;
      let zoomLevel = allLastLngs.length > 200 ? 6 : 3;
      const initialCenter = { lat: Number(allLastLngs[0].gps_lat), lng: Number(allLastLngs[0].gps_long) };

      console.log('initialCenter', initialCenter);

      let allStores = [];
      let polyData: any = [];
      const displayMarkers = allLastLngs.map((store: any, index: number) => {
        const Latitude = parseFloat(store.gps_lat);
        const Longitude = parseFloat(store.gps_long);

        if (Latitude && Longitude) {
          const uniqueKey =
            Latitude.toString() + Longitude.toString() + index.toString();
          let replacedKey: any = uniqueKey.replace(/\./g, '');
          replacedKey = parseInt(replacedKey);
          allStores.push(store);
          polyData.push({ lat: Latitude, lng: Longitude });
          let icon = _getIcon(1.5, store.heading);
          let className = `marker_${index}`;
          let position = {
            lat: Latitude,
            lng: Longitude
          };
          return _getMarker(
            uniqueKey,
            index,
            position,
            icon,
            store,
            store.heading
          )
        }
      });

      const polyLine = getPolyline(polyData);
      setMapState({ ...mapState, displayMarkers, polyLine, initialCenter, zoom: zoomLevel })

    }
  }, [viewReducerResponse.currentFlightList])



  const _mapLoaded = (mapProps: any, map: any) => {
    map.setOptions({
      mapTypeId: 'terrain'
    });
  }

  const _handleZoomChanged = (event: any) => {

    console.log('googleMap', googleMap);
    const zoomLevel = false;
    //const newZoom = googleMap.current;
    //console.log('newZoom', newZoom);

    if (zoomLevel && zoomLevel !== mapState.zoom) {
      let obj = {
        zoom: zoomLevel,
        polyLine: (
          <Polyline
            path={mapState.polylineData}
            options={{
              strokeWeight: 2,
              strokeOpacity: 1,
              strokeColor: '#1dc1ec',
              geodesic: true
            }}
          />
        )
      }
    }
  }

  const handleMarkerClick = (uniqueKey: any, index: any, position: any, icon: any, data: any, rotation: any) => {

  }

  const showInfoWindow = () => {

  }

  const getRotation = (place1: any, place2: any) => {
    const lat1 = place1.Latitude;
    const lon1 = place1.Longitude;
    const lat2 = place2.Latitude;
    const lon2 = place2.Longitude;
    let longDiff = lon1 - lon2;
    let X = Math.cos(lat2) * Math.sin(longDiff);
    let Y =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(longDiff);
    console.log(X, Y);
    let beta = Math.atan2(X, Y);
    console.log(beta);
    const angle = beta * 57.2958;
    return angle;
  };

  const _getIcon = (scale: any, rotation: any) => {
    return {
      path: 'M4.692,10.001c0,3.174,2.583,5.756,5.759,5.756s5.758-2.582,5.758-5.756c0-3.175-2.582-5.759-5.758-5.759   S4.692,6.826,4.692,10.001z M5.698,10.001c0-2.545,2.012-4.624,4.529-4.741l-2.56,3.208v2.956l1.948-2.44v5.69   C7.393,14.277,5.698,12.336,5.698,10.001z M15.203,10.001c0,2.334-1.695,4.278-3.916,4.672v-5.69l1.947,2.44V8.468l-2.56-3.208   C13.191,5.378,15.203,7.456,15.203,10.001z',
      fillColor: '#ffffff',
      rotation: parseFloat(rotation),
      fillOpacity: 1,
      strokeWeight: 1,
      scale: scale,
      strokeColor: '#0b85ef',
      strokeOpacity: 1,
      anchor: { x: 12, y: 0 }
    };
  }
  const _getMarker = (uniqueKey: any, index: any, position: any, icon: any, data: any, rotation: any) => {
    return (
      <Marker
        key={uniqueKey}
        position={position}
        icon={icon}
        onMouseover={() => showInfoWindow()}
        onClick={() => handleMarkerClick(uniqueKey, index, position, icon, data, rotation)}
      />
    );
  }

  const getPolyline = (polyLineData: any) => {
    return (
      <Polyline
        path={polyLineData}
        options={{
          strokeWeight: 2,
          strokeOpacity: 1,
          strokeColor: '#1dc1ec',
          geodesic: true
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <div className='loading' style={{ display: loader ? 'block' : 'none' }}>
        <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' />
      </div>
      <Map
        google={props.google}
        ref={googleMap}
        containerStyle={{
          width: '100%',
          height:
            props.mapHeight && props.mapHeight > 0
              ? props.mapHeight
              : '100%'
        }}
        zoom={mapState.zoom}
        maxZoom={12}
        minZoom={3}
        initialCenter={mapState.initialCenter}
        center={mapState.initialCenter}
        // mapTypeControlOptions={{ mapTypeIds: ["satellite", "terrain"] } }
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
        onZoomChanged={_handleZoomChanged}
      >
        {mapState.displayMarkers}
        {mapState.polyLine}
      </Map>
    </React.Fragment>
  );
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer);
