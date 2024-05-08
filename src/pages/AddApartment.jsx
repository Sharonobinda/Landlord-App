import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AddApartment() {
  const nav = useNavigate();
  const [apartment, setApartment] = useState({
    Apartment_name: '',
    description: '',
    address: '',
    images: '',
  });

  const handleChange = (e) => {
    setApartment({
      ...apartment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    fetch("https://landlord-app.onrender.com/apartments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apartment),
      })
       .then((res) => res.json())
       .then((data) => {
        nav("/")
        toast.success('data added succesfully')          
        });

    console.log(apartment);
  };

  return (
    <div className="mx-auto grid grid-cols-2">
      <div className='flex align-center bg-slate-100justify-center'>       
        <img className='h-[80vh] ' src='https://i.pinimg.com/564x/8d/a7/6c/8da76c32a81719dc7306a103e448318d.jpg' alt='add form'/>
      </div>
      <div className='p-7'>
        <h1 className='text-center font-semibold text-2xl'>Add Apartment</h1>
      <form className = " max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4 relative z-0 w-full group" >
          <label htmlFor="Apartment_name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="Apartment_name"
            id="Apartment_name"
            value={apartment.Apartment_name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-200px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 relative z-0 w-full group">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={apartment.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-200px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 relative z-0 w-full group">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={apartment.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-200px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 relative z-0 w-full group">
          <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
            Images
          </label>
          <input
            type="text"
            name="images"
            id="images"
            value={apartment.images}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-200px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Apartment
        </button>
      </form>
      </div>
    </div>
  );
}