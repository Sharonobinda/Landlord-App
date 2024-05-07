import React, {useState, useEffect} from 'react'
import Landing from '../components/Landing'
import PropertiesList from '../components/PropertiesList'

export default function Home() {
  const[apartments, setApartments] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/apartments')
       .then(res => res.json())
       .then(data => setApartments(data))
    }, [])  
        
  return (
    <>
    <Landing />
    <PropertiesList apartments= {apartments} />
    </>
  )
}
