import React from 'react';

function AboutUs() {
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="my-16 items-center justify-center text-center">
            <h1 className='p-10 text-2xl md:text-4xl'>About Us</h1>
            <p className='text-sm md:text-xl  text-xl'>BookStore provide a platform where you can Read Any Book Without any advertisement. Books have always been one of the best ways to pass the time, learn something new, and unwind. Online book reading has exploded in popularity alongside the spread of the internet and other forms of digital media. BookStore provide access to a wide selection of books, both free and for a small fee, in many different categories. Here, we present a collection of the finest books for reading books online.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 mx-20 -mt-12 mb-10 flex justify-items-center' >

                <img className='mr-14 mt-5 ml-14 border-[2px] white hover:-translate-y-5 transition-delay: 1000ms duration-200' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgowPna8vXSuaW7IQa0Icuhfwk8yX0y8kyA&s " />
                <img className='mr-14 mt-5 ml-14 border-[2px] white hover:-translate-y-5 transition-delay: 1000ms duration-200' src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IUVeSJduZye71yW069jE_b6L5pU6cLAcXQ&s" />
                <img className='mr-14 mt-5 ml-14 border-[2px] white hover:-translate-y-5 transition-delay: 1000ms duration-200' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLDNg1PMu4tZNhiori740SHJLdFq0Fr9yZA&s " />
                <img className='mr-14 mt-5 ml-14 border-[2px] white hover:-translate-y-5 transition-delay: 1000ms duration-200' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLDNg1PMu4tZNhiori740SHJLdFq0Fr9yZA&s " />

          </div>

      </div> 
    </>
  )
}

export default AboutUs 