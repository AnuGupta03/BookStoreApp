import React from 'react'

function Contact() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className="w-full md:w-1/2 mt-20 items-center justify-center text-center">
          <h1 className='text-2xl md:text-4xl'>Contact Form</h1>

          <label className="input input-bordered flex items-center gap-2 mb-7 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-10 mt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
          </label>

          <label className="input input-bordered flex items-center gap-2 h-20px mt-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Your Message" />
          </label>

          <button className="btn btn-secondary mt-6 pt-2 pb-2 pr-8 pl-8">Send</button>
        </div>
        <div className="w-full md:w-1/2 mt-20 ml-20 ">
            <h1 className='font-bold text-2xl md:text-4xl'>Contact Information</h1>
            <h3 className='font-bold text-xl mt-3'>Where to Find Us</h3>
            <p className='mt-2'>City Center Gwalior</p>
            <h3 className='font-bold mt-8'>Email Us At</h3>
            <p className='mt-2'>anuradhagwl98@gmail.com</p>
            <h3 className='font-bold mt-8'>Call Us At</h3>
            <p className='mt-2 mb-8'>Mobile: 7049332451</p>
        </div>
      </div>


          <div className='mt-5 mb-5 border:black'>
            <iframe className=' container mx-auto my-100  rounded-box border-[2px]'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30776078.063939493!2d60.9180044792702!3d19.676597196316774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1720445878069!5m2!1sen!2sin" width="1230" height="235"  allowFullScreenLoading="lazy" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>

    </>
  )
}

export default Contact