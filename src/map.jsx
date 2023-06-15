import React from "react";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from "react-leaflet";
import 'leaflet/dist/leaflet.css';


const Map = (prop) => {
    const [lat, setLat] = useState(prop.lat)
    const [lon, setLon] = useState(prop.lon)
  

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }
    return (
        <>
        <div    className="">
        <MapContainer
    center={{ lat: lat, lng:lon }}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
  </MapContainer>
  
     </div>
        </>
    )
}
export default Map