import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Home from '../Home/Home'
import Cars from '../Cars/Cars'

export default function MasterLayout() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
