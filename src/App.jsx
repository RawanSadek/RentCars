import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Cars from './Components/Cars/Cars';
import Car_Details from './Components/Car Details/Car_Details';
import NotFound from './Components/NotFound/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './Components/MasterLayout/MasterLayout';


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'cars', element: <Cars /> },
        { path: 'home/cars', element: <Cars /> },
        { path: 'carDetails', element: <Car_Details /> },
        { path: 'home/carDetails', element: <Car_Details /> },
        { path: 'cars/carDetails', element: <Car_Details /> },
        { path: 'home/cars/carDetails', element: <Car_Details /> }

      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
