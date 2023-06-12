import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import 'leaflet/dist/leaflet.css';
import Map from './map'

function App() {
  const [ip, setIp] = useState()
  const [location, setLocation] = useState([])
 useEffect(() => {
  axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_819XzbXCXcoIF1aczs7j7nrcXGguZ')
  .then(function (response) {
    // handle success
    // console.log(response.data);
    setIp(response.data.ip)
    
    setLocation(response.data.location)
    console.log(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 }, [])
  return (
    <>
     <div>
      <p>Ip Adress : {ip}</p>
      <p>Country : {location.country}</p>
      <p>Region : {location.region}</p>
      <p>TimeZone : {location.timezone}</p>
     </div>
      <Map/>
    </>
  ) 
}

export default App
