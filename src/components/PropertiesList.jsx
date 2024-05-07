import React,{ useState, useEffect} from 'react'
import Apartment from './Apartment'
import ReactPaginate from 'react-paginate';
export default function PropertiesList({apartments}) {
    
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching apartments from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 6;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = apartments.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(apartments.length / 6);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % apartments.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  return (
   <>
     <div className='container mx-auto my-4 px-auto'>
      
      <h1 className='text-center font-bold text-xl underline '>Featured Properties</h1>
      <div className='grid grid-cols-1 mx-auto my-3 md:grid-cols-3  gap-4'>
        { currentItems && currentItems.map((appartment)=>{
          return <Apartment  apartment = {appartment}/>
        })}
      </div>
      <div className='flex justify-center bg-gray-200'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        activeClassName = "text-red-900 font-bold"
        containerClassName = "flex gap-4"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </div>
      </div>
   </>
  )
}
