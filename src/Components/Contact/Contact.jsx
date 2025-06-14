import React from 'react'
import ContactInfo from '../ContactInfo/ContactInfo.jsx'
import Reviews from '../Reviews/Reviews.jsx'
import {motion} from 'framer-motion'

export default function Contact() {
  return <>
    <motion.div className="contact-page" initial={{x: "-100vw"}} animate={{x: 0}} transition={{duration: .25}}>
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className='text-light'>Contact</h1>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="w-75 mx-auto">
              <form>

                <label htmlFor="firstName">First Name</label>
                <input type="text" className='form-control mb-3' id='firstName' />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" className='form-control mb-3' id='lastName' />

                <label htmlFor="email">Email Address</label>
                <input type="email" className='form-control mb-3' id='email' />

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" className='form-control mb-3' id='phone' />

                <label htmlFor="date">Date</label>
                <input type="date" className='form-control mb-3' id='date' />

                <label htmlFor="guests">Number Of Guests</label>
                <input type="text" className='form-control mb-3' id='guests' />

                <button className='btn btn-success text-light'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light py-5">
        <Reviews />
      </div>
    </motion.div>
  </>
}
