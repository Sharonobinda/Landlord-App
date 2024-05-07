import React from 'react'

export default function
() {
  return (
    <div className='container bg-gray-100'>
      <h1 className='text-xl text-center my-2 underline font-semibold'>About Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className='rounded-md' src = "https://i.pinimg.com/564x/36/7c/eb/367cebffa69f3a9f08620b3915429e5e.jpg" alt="about image"/>
        </div>
        <div className=' justify-center text-center my-[50%]'>         
           
              <h1 className='font-semibold italic'>Contact</h1>
              <p className='italic'>reallygreatsite.com</p>
              <p>+123.456.7560</p><br/><br/>
              <h1 className='text-6xl'>about</h1>
              <p className='leading-loose'>I'm here to help you through every step of the way.
                I'll work with you to ensure the home buying or renting process
                is seamless and successful. Contact me today to schedule your
                free phone consultation.
              </p><br/><br/><br/>

              <h3 className='text-2xl'>Olivia Wilson</h3>

            
        

         

        </div>
      </div>
    </div>
  )
}
