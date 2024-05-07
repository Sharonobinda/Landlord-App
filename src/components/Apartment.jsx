import React from 'react'

export default function Apartment({apartment}) {
  return (   

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={apartment.images} alt={apartment.Apartment_name} />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{apartment.Apartment_name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{apartment.description}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{apartment.address}</p>
        <button type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View</button>
    </div>
</div>

  )
}
