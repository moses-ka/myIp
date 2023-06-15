import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import 'leaflet/dist/leaflet.css';
import Map from './map'

import { DateTime } from "luxon";
import Flag from './flag';

function App() {
  const [ip, setIp] = useState()
  const [location, setLocation] = useState([])
  const [country, setCountry] = useState()
 
  const {timezone, setTimezone} = useState('')
  // const [blad, setBlad] = useState('')
  const local = DateTime.local();
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
let rezoned = local.setZone(timezone);
rezoned = rezoned.toString()
 useEffect(() => {
  axios.get('http://ip-api.com/json/')
  .then( function (response) {
    // handle success
    setLon(response.data.lon)
    setLat(response.data.lat)
  
    setIp(response.data.query)
    setLocation(response.data)
    setCountry(response.data.country)
    setTimezone(response.data.timezone)
 
  })
  .catch(function (error) {
    // handle error
    console.log(error.message);
  })
 }, [])
 
 
 
 
  return (
    <>
     <div className='card-container'>
      <p>Ip Adress : {ip}</p>
      <p>Country : {location.country}</p>
      <p>Region : {location.regionName}</p>
      <p>TimeZone : {location.timezone + ' ' + rezoned} + </p>
      
     </div>
      <div className='container-map'>
      {country && lat && lon && (
  <>
    <Flag country={country} />
    <Map lat={lat} lon={lon} country={country} />
  </>
)}
      </div>
    
     
    </>
  ) 
}

export default App
