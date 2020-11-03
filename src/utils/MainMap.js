import React, { Component,useEffect,useState } from "react";
import { Map, GoogleApiWrapper,Marker } from "google-maps-react";
import {apiKey} from '../config/config';

const MainMap =(props) => {
    const [lat,setLat] = useState(0);
    const [lng,setLng] = useState(0);
    const [load,setLoad] = useState(false);
    const mapStyles = {
        width: '100%',
        height: '30%'
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);

            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            setLoad(true);
        });
    },[]);

    return (
      load ? (
          <div className='MapAPI'>
            <Map
                google={props.google}
                zoom={16}
                initialCenter={{ lat: lat, lng: lng }}
                style={mapStyles}
                disableDefaultUI= {true}>
                <Marker position={{lat: lat, lng: lng}}/>
            </Map>
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