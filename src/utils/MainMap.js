import React, { Component,useEffect,useState } from "react";
import { Map, GoogleApiWrapper,Marker } from "google-maps-react";
import {apiKey} from '../config/config';
import Geocode from 'react-geocode'
import MainAddBtn from '../utils/MainAddBtn';
import {fetchAddrTop3} from '../API/reviewAPI';

Geocode.setApiKey(apiKey)
Geocode.setLanguage('ko')
Geocode.setRegion('ko')
Geocode.enableDebug()

const MainMap =(props) => {
    const [lat,setLat] = useState(0);
    const [lng,setLng] = useState(0);
    const [addr,setAddr] = useState('');
    const [load,setLoad] = useState(false);
    const [rank,setRank] = useState([]);
    const [isFull,setFull] = useState(false);

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
                const address = response.results[5].formatted_address;
                setAddr(address);
                console.log(address);

                fetchAddrTop3(address)
                .then(res=>{
                if(res.success == 'Y')
                {
                    setRank(JSON.parse(res.rows));

                    if(res.rows.length > 0 )
                    {
                      setFull(true);
                    }
                }
                else
                {
                  console.log(res.rows);
                }
              })
              },
              error => {
                console.error(error);
              }
            );
        });
    },[]);

    const mytopList = rank.map((top,index)=>(<div key={index}>{index+1}.{top.title}({top.location},{top.rate}점)</div>))
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
            <div className="row">
              <div  className="col ranking_box">
                {
                  isFull ? (
                    <div>
                      <strong>지역 랭킹 Top3</strong>
                      {mytopList}
                    </div>
                  ):(
                    <strong>랭킹 준비중</strong>
                  )
                }
              </div>
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