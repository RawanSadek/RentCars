import React from 'react'
import notfoundImg from '../../assets/Images/not-found/404-not-found.png'

export default function NotFound() {
  return (
    <div className='d-flex justify-content-center'>
      <img src={notfoundImg} alt="" className='vh-100 '/>
    </div>
  )
}
