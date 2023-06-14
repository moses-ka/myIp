import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import 'leaflet/dist/leaflet.css';
import Map from './map'

import { DateTime } from "luxon";

function App() {
  const [ip, setIp] = useState()
  const [location, setLocation] = useState([])
  const [country, setCountry] = useState()
  const [flag, setFlag] = useState()
  const [alt, setAlt] = useState()
 useEffect(() => {
  axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_819XzbXCXcoIF1aczs7j7nrcXGguZ')
  .then( function (response) {
    // handle success
    console.log(response.data);
    setIp(response.data.ip)
    
    setLocation(response.data.location)
    setCountry(response.data.location.country)
    
    
  })
  .catch(function (error) {
    // handle error
    console.log(error.message);
  })
 }, [])
 
 useEffect( () => {
  console.log(country)

  axios.get(`https://restcountries.com/v3.1/alpha/DE`)
  .then(function (response) {
    // handle success
    
    console.log('response data', response.data);
    setFlag(response.data[0].flags.png)
    setAlt(response.data[0].flags.alt)
  })
  .catch(function (error) {
    // handle error
    console.log(error.message);
  })
 },[country])
  console.log( 'flag ')
  return (
    <>
     <div>
      <p>Ip Adress : {ip}</p>
      <p>Country : {location.country}</p>
      <p>Region : {location.region}</p>
      <p>TimeZone : {location.timezone}</p>
      <img width="200px" src={flag} alt={alt}/>
      
     </div>
      <Map/>
     
    </>
  ) 
}

export default App
