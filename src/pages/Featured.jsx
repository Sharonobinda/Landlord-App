import React, { useEffect,useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Featured() {
    const nav = useNavigate()
    const{id} = useParams()
    const[apartment, setApartment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/apartments/${id}`)
       .then(res => res.json())
       .then(data => setApartment(data))
    }, [id])  
    function handleDelete(id)

    {
      fetch(`http://localhost:3000/apartments/${id}`, {
        method: "DELETE"
      })
      .then((data)=> data.json())
      .then((res)=>{ 
        nav("/")         
        toast.success('Successfully deleted')

      })
    }

        
    console.log(apartment)
  return (
    <div className='flex justify-center '>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg h-80px" src={apartment.images} alt={apartment.Apartment_name} />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{apartment.Apartment_name}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{apartment.description}</p>
            <p class="mb-3 font-normal italic text-gray-700 dark:text-gray-400">{apartment.address}</p>
            <div className=''>
                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                <button onClick={()=> handleDelete(apartment.id)} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Delete</button>
            </div>
        </div>
    </div>
</div>
    
  )
}
