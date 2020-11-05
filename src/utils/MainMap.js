import React, { Component,useEffect,useState } from "react";
import { Map, GoogleApiWrapper,Marker } from "google-maps-react";
import {apiKey} from '../config/config';
import Geocode from 'react-geocode'
import MainAddBtn from '../utils/MainAddBtn';

Geocode.setApiKey(apiKey)
Geocode.setLanguage('ko')
Geocode.setRegion('ko')
Geocode.enableDebug()

const MainMap =(props) => {
    const [lat,setLat] = useState(0);
    const [lng,setLng] = useState(0);
    const [addr,setAddr] = useState('');
    const [load,setLoad] = useState(false);
    const mapStyles = {
        width: '100%',
        height: '30%',
        margin: 0
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            setLat(latitude);
            setLng(longitude);
            setLoad(true);

            // Get address from latitude & longitude.
            Geocode.fromLatLng(latitude, longitude).then(
              response => {
                const address = response.results[0].formatted_address;
                setAddr(address);
                console.log(address);
              },
              error => {
                console.error(error);
              }
            );
        });
    },[]);

    return (
      load ? (
          <div>
            <Map
                google={props.google}
                zoom={16}
                initialCenter={{ lat: lat, lng: lng }}
                style={mapStyles}
                disableDefaultUI= {true}>
                <Marker position={{lat: lat, lng: lng}}/>
            </Map>
            <div className="row">
                <MainAddBtn addr={addr}/>
            </div>
        </div>
      ):(
          <div>
            Loading
          </div>
      )
    );
}

 
export default GoogleApiWrapper({
  apiKey: apiKey,
})(MainMap);