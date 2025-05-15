import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import CarsStyles from './Cars.module.css'
import star from '../../assets/Images/card/star.png'
import userImg from '../../assets/Images/card/user.png'
import air from '../../assets/Images/card/air.png'
import auto from '../../assets/Images/card/frame.png'
import arrow from '../../assets/Images/card/arrow-right.png'
import car1 from '../../assets/Images/card/car1.png'
import car2 from '../../assets/Images/card/car2.png'
import car3 from '../../assets/Images/card/car3.png'
import car4 from '../../assets/Images/card/car4.png'
import car5 from '../../assets/Images/card/car5.png'
import car6 from '../../assets/Images/card/car6.png'
import car7 from '../../assets/Images/card/car7.png'

export default function Cars() {
  const location = useLocation();
  const cars = location.state?.cars;

  let carImages = [car1, car2, car3, car4, car5, car6, car7];
  const [filteredCars, setFilteredCars] = useState(cars);

   let searchForCar = (e) => {
    let searchInput = e.target.value;
    if (searchInput === "") {
      setFilteredCars(cars);
    } else {
      let filtered = cars.filter((car) =>
        car?.car_model.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  return (
    <>
      <div className={`my-5 ${CarsStyles.btn_div} `}>
        <button className={`rounded-2 text-uppercase text-primary border-0 p-2 fs-5 ${CarsStyles.dis_btn}`} disabled>popular rental deals</button>
      </div>

      <div className="search-container row rounded-2 overflow-hidden border border-1 border-secondary w-75 mx-auto my-5">
        <i className="fa-solid fa-magnifying-glass col-1 p-2 text-center text-light bg-secondary fs-5"></i>
        <input type="search" className='col-9 border-0 fs-4' name='search' id='search' placeholder='Search car by model' onChange={searchForCar}/>
        <button className='col-2 bg-primary text-capitalize border-0 text-light fs-5'>serach</button>
      </div>

      <div className="cars">
        <h2 className='text-capitalize fs-1 text-center text-light'>most popular cars rental deals</h2>
        <div className="row m-5 justify-content-center">
          {filteredCars.map((car, index) => (
            <div key={index} className="card bg-transparent col-10 col-md-6 col-lg-3 border-0 mb-4">
              <div className="p-2 border border-1 h-100 rounded-2">
                <div className="card-img-div p-4">
                  <img src={carImages[index%7]} alt="car" className='card-img' />
                </div>
                <div className="card-body">
                  <h3 className="car-model text-light">{car?.car_model}</h3>
                  <div className="row">
                    <div className="col-12 mb-2">
                      <img src={star} alt="star" />   <span className='text-secondary'>(1233 Reviews)</span>
                    </div>

                    <div className="col-6 mb-2">
                      <img src={userImg} alt="user" />   <span className='text-secondary'>4 passengers</span>
                    </div>

                    <div className="col-6 mb-2">
                      <img src={air} alt="air" />   <span className='text-secondary'>Conditioning</span>
                    </div>

                    <div className="col-6 mb-2">
                      <i className="fa-solid fa-calendar-days text-secondary"></i> <span className='text-secondary'>2024</span>

                    </div>

                    <div className="col-6 mb-2">
                      <img src={auto} alt="automatic" />   <span className='text-secondary'>Automatic</span> <br />
                    </div>
                  </div>
                  <hr className='border border-1' />

                  <div className="row text-light">
                    <div className="col-6">
                      <p>Price:</p>
                    </div>
                    <div className="col-6">
                      <p>{car?.price}</p>
                    </div>
                  </div>

                  <Link to="carDetails"><button className='btn btn-primary w-100'>View details <img src={arrow} alt="arror" /></button></Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
