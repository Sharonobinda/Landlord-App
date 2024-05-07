import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Featured() {
    const{id} = useParams()
    const[apartment, setApartment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/apartments/${id}`)
       .then(res => res.json())
       .then(data => setApartments(data))
    }, [id])  
        
  return (
    <div>
        ID  {apartment.title}
    </div>
  )
}
