import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function AddApartment() {
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
    // Add your code here to submit the form data to your server
    fetch("http://localhost:3000/apartments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apartment),
      })
       .then((res) => res.json())
       .then((data) => {
        toast.success('data added succesfully')          
        });

    console.log(apartment);
  };

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="Apartment_name" className="block text-gray-700 font-bold mb-2">
            Apartment Name
          </label>
          <input
            type="text"
            name="Apartment_name"
            id="Apartment_name"
            value={apartment.Apartment_name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={apartment.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={apartment.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
            Images
          </label>
          <input
            type="text"
            name="images"
            id="images"
            value={apartment.images}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Apartment
        </button>
      </form>
    </div>
  );
}