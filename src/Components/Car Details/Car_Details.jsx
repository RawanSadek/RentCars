import React from 'react'
import { Link } from 'react-router-dom'
import detailsStyles from './carDetails.module.css'
import audi1 from '../../assets/Images/landing-page/sec-5/Audi1.png'


export default function Car_Details() {
  return (

    <>
      <div className={`${detailsStyles.whyChooseUs} my-5 row align-items-center w-100`}>
        <div className="col-12 col-lg-6">
          <img src={audi1} alt="" className={detailsStyles.audi1} />
        </div>

        <div className="col-12 col-lg-6">
          <button className={`rounded-2 text-uppercase text-primary border-0 p-2 fs-5 mb-5 ${detailsStyles.dis_btn}`} disabled>why choose us</button>
          <h2 className='text-capitalize text-light mt-2 mb-5'>we offer the best experience with our rental deals</h2>

          <ul className='list-unstyled'>

            <li className=' mb-3 py-2'>
              <i className="fa-regular fa-user text-secondary fs-5 me-4"></i> <span className='text-light fs-5'>4 Passangers</span>
            </li>


            <li className='mb-3 py-2'>
              <i className="fa-solid fa-snowflake text-secondary fs-5 me-4"></i> <span className='text-light fs-5'>Air conditioning</span>
            </li>

            <li className='mb-3 py-2'>
              <i className="fa-solid fa-diagram-project text-secondary fs-5 me-4"></i> <span className='text-light fs-5'>CVT</span>
            </li>


            <li className='mb-3 py-2'>
              <i className="fa-solid fa-shield text-secondary fs-5 me-4"></i> <span className='text-light fs-5'>Advanced Safety</span>
            </li>

          </ul>
        </div>
      </div>
    </>


  )
}
