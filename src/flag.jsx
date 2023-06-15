import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Flag =(prop)=>{
    const[country   , setCountry] = useState(prop.country)
    const [flag, setFlag] = useState()
    const [alt, setAlt] = useState()
    const [blad, setBlad] = useState()
    useEffect( () => {
        
      
        axios.get(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
          // handle success
        console.log(response.data , 'this is response.data inside the second fitch for the flag') 
          setBlad(response?.data[0])
          setFlag(response?.data[0].flags.png)
          setAlt(response?.data[0].flags.alt)
          
        })
        .catch(function (error) {
          // handle error
          console.log(error.message);
        })
       },[])
      console.log(flag , 'this is flag and alt after the fitch ' , alt)
    return(
        <>
   <div>
    {flag && alt && (
      <img width="300px" src={flag} alt={alt}/>
    )}
  
   </div>
        </>
    )
}
export default Flag