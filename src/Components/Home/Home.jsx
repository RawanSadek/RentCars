import React, { useEffect, useState } from 'react'
import logo from '../../assets/Images/nav/logo.png'
import carImg from '../../assets/Images/landing-page/car 2 1.png'
import HomeStyles from './Home.module.css'
import axios from 'axios';
import car1 from '../../assets/Images/card/car1.png'
import car2 from '../../assets/Images/card/car2.png'
import car3 from '../../assets/Images/card/car3.png'
import car4 from '../../assets/Images/card/car4.png'
import star from '../../assets/Images/card/star.png'
import userImg from '../../assets/Images/card/user.png'
import air from '../../assets/Images/card/air.png'
import auto from '../../assets/Images/card/Frame.png'
import arrow from '../../assets/Images/card/arrow-right.png'
import location from '../../assets/Images/landing-page/location.png'
import calender from '../../assets/Images/landing-page/calender.png'
import carIcon from '../../assets/Images/landing-page/car-icon.png'
import carLogo1 from '../../assets/Images/landing-page/carLogo1.png'
import carLogo2 from '../../assets/Images/landing-page/carLogo2.png'
import carLogo3 from '../../assets/Images/landing-page/carLogo3.png'
import carLogo4 from '../../assets/Images/landing-page/carLogo4.png'
import carLogo5 from '../../assets/Images/landing-page/carLogo5.png'
import carLogo6 from '../../assets/Images/landing-page/carLogo6.png'
import carLogo7 from '../../assets/Images/landing-page/carLogo7.png'
import phone from '../../assets/Images/landing-page/iPhone-14.png'
import audi1 from '../../assets/Images/landing-page/sec-5/Audi1.png'
import man from '../../assets/Images/landing-page/sec-6/man.png'
import girl from '../../assets/Images/landing-page/sec-6/girl.png'
import android from '../../assets/Images/landing-page/android.png'
import ios from '../../assets/Images/landing-page/ios.png'
import footerLogo from '../../assets/Images/footer/footerLogo.png'
import { Link, Outlet, useLocation } from 'react-router-dom';




export default function Home() {

    let [cars, setCars] = useState([]);
    let carImages = [car1, car2, car3, car4]

    let getCars = async () => {
        try {
            let response = await axios.get('https://myfakeapi.com/api/cars');
            setCars(response?.data?.cars)

        } catch (error) {
            console.log("ERROR!")
        }
    }

    useEffect(() => {
        getCars()

    }, [])

    return (


        <>
            <nav className="navbar navbar-expand-lg bg-transparent p-5 w-100 position-absolute z-3">
                <div className="container-fluid">
                    <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-danger"></span>
                    </button>
                    <img src={logo} alt="logo" className={HomeStyles.logo} />
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <a className="nav-link text-uppercase me-3 fs-5 link-light" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase me-3 fs-5 link-light" href="#">Inventory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase me-3 fs-5 link-light" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase me-3 fs-5 link-light" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="d-flex end-0" role="search">
                            <button className="btn text-white fs-5 me-3 ">sign in</button>
                            <button className="btn btn-primary text-white fs-5">sign up</button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`row w-100 ${HomeStyles.main_content}`}>
                <div className="col-12 col-md-6 order-md-1 order-2 position-relative ">
                    <div className={`text-center position-absolute text-light ${HomeStyles.main_p}`}>
                        <p >Find, book and rent a car <br /> <span className='text-primary'>Easily</span></p>
                        <p className='text-secondary'>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                    </div>
                </div>
                <div className={`col-12 col-md-6 order-md-2 order-1 position-relative ${HomeStyles.img_col}`}>
                    <img src={carImg} alt="car" className={`${HomeStyles.main_car}`} />
                </div>
            </div>

            {/* most popular cars */}
            <div className="most-popular p-5">


                <div className={`my-5 ${HomeStyles.btn_div}`}>
                    <button className={`rounded-2 text-uppercase text-primary border-0 p-2 fs-5 ${HomeStyles.dis_btn}`} disabled>popular rental deals</button>
                </div>

                <div className="cars">
                    <h2 className='text-capitalize fs-1 text-center text-light'>most popular cars rental deals</h2>

                    <div className="row my-5 justify-content-center">
                        {cars.slice(0, 4).map((car, index) => (
                            <div key={index} className="card bg-transparent col-12 col-md-6 col-lg-3 border-0 mb-4">
                                <div className="p-2 border border-1 h-100 rounded-2">
                                    <div className="card-img-div p-4">
                                        <img src={carImages[index]} alt="car" className='card-img' />
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

                <div className={`my-5 ${HomeStyles.btn_div}`}>
                    <Link to='cars'  state={{ cars }}><button className={`btn text-light bg-transparent border border-1 border-light fs-4 px-5 trans ${HomeStyles.showAllBtn}`}>Show all vehicles <img src={arrow} alt="arror" className='text-light' /></button></Link>
                </div>
            </div>


            <div className="steps">
                <div className={`my-5 ${HomeStyles.btn_div}`}>
                    <button className={`rounded-2 text-uppercase text-primary border-0 p-2 fs-5 ${HomeStyles.dis_btn}`} disabled>how it work</button>
                </div>

                <h2 className='text-capitalize fs-1 text-center text-light'>rent with the following 3 steps</h2>

                <div className="row container mx-auto my-5">
                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div>
                            <div className={HomeStyles.imgDiv}><img src={location} alt="location" className='' /></div>
                            <h3 className='text-light text-center my-3'>Choose location</h3>
                            <p className='text-center text-secondary'>Choose your and find your best car</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div>
                            <div className={HomeStyles.imgDiv}><img src={calender} alt="calender" className='' /></div>
                            <h3 className='text-light text-center my-3'>Pick-up date</h3>
                            <p className='text-center text-secondary'>Select your pick up date and time to book your car</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 mb-5">
                        <div>
                            <div className={HomeStyles.imgDiv}><img src={carIcon} alt="car" className='' /></div>
                            <h3 className='text-light text-center my-3'>Book your car</h3>
                            <p className='text-center text-secondary'>Book your car and we will deliver it directly to you</p>
                        </div>
                    </div>
                </div>
            </div>


            <div id="carouselExampleAutoplaying" className={`carousel slide container ${HomeStyles.carLogos}`} data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <div className="row justify-content-evenly">
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo1} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo2} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo3} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo4} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row justify-content-evenly">
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo5} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo6} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo7} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo1} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row justify-content-evenly">
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo2} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo3} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo4} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className={`card mb-3 bg-transparent ${HomeStyles.carLogoContainer}`}>
                                    <img src={carLogo5} className={`img-fluid ${HomeStyles.carLogo}`} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className={`${HomeStyles.whyChooseUs} my-5 row align-items-center w-100`}>
                <div className="col-12 col-lg-6">
                    <img src={audi1} alt="" className={HomeStyles.audi1} />
                </div>

                <div className="col-12 col-lg-6">
                    <button className={`rounded-2 text-uppercase text-primary border-0 p-2 fs-5 ${HomeStyles.dis_btn}`} disabled>why choose us</button>
                    <h2 className='text-capitalize text-light mt-2 mb-5'>we offer the best experience with our rental deals</h2>

                    <ul className='list-unstyled'>
                        <li className='row align-items-center justify-content-between mb-5 py-2'>
                            <div className="col-1">
                                <i className="fa-solid fa-sack-dollar border border-3 rounded-4 p-3 border-secondary text-primary fs-4"></i>
                            </div>
                            <div className="col-10">
                                <h3 className='text-white'>Best price guaranteed</h3>
                                <p className='text-secondary'>Find a lower price? We'll refund you 100% of the difference.</p>
                            </div>
                        </li>

                        <li className='row align-items-center justify-content-between mb-5 py-2'>
                            <div className="col-1">
                                <i className="fa-solid fa-truck border border-3 rounded-4 p-3 border-secondary text-primary fs-4"></i>
                            </div>
                            <div className="col-10">
                                <h3 className='text-white'>24 hour car delivery</h3>
                                <p className='text-secondary'>Book your car anytime and we will deliver it directly to you.</p>
                            </div>
                        </li>

                        <li className='row align-items-center justify-content-between mb-5 py-2'>
                            <div className="col-1">
                                <i className="fa-solid fa-credit-card border border-3 rounded-4 p-3 border-secondary text-primary fs-4"></i>
                            </div>
                            <div className="col-10">
                                <h3 className='text-white'>Multiple Payment Options</h3>
                                <p className='text-secondary'>Choose the payment method that works best for you.</p>
                            </div>
                        </li>

                        <li className='row align-items-center justify-content-between mb-5 py-2'>
                            <div className="col-1">
                                <i className="fa-solid fa-headset border border-3 rounded-4 p-3 border-secondary text-primary fs-4"></i>
                            </div>
                            <div className="col-10">
                                <h3 className='text-white'>24/7 technical support</h3>
                                <p className='text-secondary'>Have a question? Contact Rentcars support any time when you have problem.</p>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>


            <div className={`${HomeStyles.testimonials} py-5`}>
                <div className={`my-5 ${HomeStyles.btn_div}`}>
                    <button className={`rounded-2 text-uppercase text-primary border-0 p-2 fs-5 ${HomeStyles.dis_btn}`} disabled>testimonials</button>
                </div>
                <h2 className='fs-1 text-white text-center text-capitalize'>what people say about us?</h2>

                <div id="carouselExampleAutoplaying" className="carousel slide my-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <div className="row justify-content-evenly">
                                <div className='col-5'>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={girl} className="img-fluid h-100" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className='mb-0'><span className='fs-1'>5.5</span> stars</p>
                                                    <i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i>
                                                    <p className='fs-5 my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                                    <h6 className='text-secondary'>Charlie Johnson</h6>
                                                    <p className={HomeStyles.reviewTime}>Last updated 3 mins ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={man} className="img-fluid h-100" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className='mb-0'><span className='fs-1'>5.5</span> stars</p>
                                                    <i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i>
                                                    <p className='fs-5 my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                                    <h6 className='text-secondary'>Charlie Johnson</h6>
                                                    <p className={HomeStyles.reviewTime}>Last updated 3 mins ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="row justify-content-evenly">
                                <div className='col-5'>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={man} className="img-fluid h-100" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className='mb-0'><span className='fs-1'>5.5</span> stars</p>
                                                    <i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i>
                                                    <p className='fs-5 my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                                    <h6 className='text-secondary'>Charlie Johnson</h6>
                                                    <p className={HomeStyles.reviewTime}>Last updated 3 mins ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={girl} className="img-fluid h-100" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className='mb-0'><span className='fs-1'>5.5</span> stars</p>
                                                    <i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i>
                                                    <p className='fs-5 my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                                    <h6 className='text-secondary'>Charlie Johnson</h6>
                                                    <p className={HomeStyles.reviewTime}>Last updated 3 mins ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="row justify-content-center">
                                <div className='col-5'>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={girl} className="img-fluid h-100" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className='mb-0'><span className='fs-1'>5.5</span> stars</p>
                                                    <i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i>
                                                    <p className='fs-5 my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                                    <h6 className='text-secondary'>Charlie Johnson</h6>
                                                    <p className={HomeStyles.reviewTime}>Last updated 3 mins ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={man} className="img-fluid h-100" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className='mb-0'><span className='fs-1'>5.5</span> stars</p>
                                                    <i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i>
                                                    <p className='fs-5 my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                                    <h6 className='text-secondary'>Charlie Johnson</h6>
                                                    <p className={HomeStyles.reviewTime}>Last updated 3 mins ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="row justify-content-center">
                                <div className='col-5'>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={man} className="img-fluid h-100" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className='mb-0'><span className='fs-1'>5.5</span> stars</p>
                                                    <i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i>
                                                    <p className='fs-5 my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                                    <h6 className='text-secondary'>Charlie Johnson</h6>
                                                    <p className={HomeStyles.reviewTime}>Last updated 3 mins ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={girl} className="img-fluid h-100" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className='mb-0'><span className='fs-1'>5.5</span> stars</p>
                                                    <i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i><i className="fa-solid fa-star text-warning"></i>
                                                    <p className='fs-5 my-4'>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                                                    <h6 className='text-secondary'>Charlie Johnson</h6>
                                                    <p className={HomeStyles.reviewTime}>Last updated 3 mins ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="download row mt-5 container mx-auto">
                <div className="col-12 col-lg-6 pt-5 align-content-center">
                    <div className={HomeStyles.formContainer}>
                        <h2 className='text-capitalize text-white'>download rentcars app for <span className='text-primary text-uppercase'>free</span></h2>
                        <p className='text-secondary'>For faster, easier booking and exclusive deals.</p>
                        <div>
                            <img src={android} alt="" />
                            <img src={ios} alt="" />
                        </div>
                        <form action="" className='my-4'>
                            <input type="text" name="name" id="name" className='form-control mb-4 rounded-5 w-50 px-4' placeholder='Name' />
                            <input type="text" name="phone" id="phone" className='form-control mb-4 rounded-5 w-50 px-4' placeholder='Phone Number' />
                            <input type="text" name="email" id="email" className='form-control mb-4 rounded-5 w-50 px-4' placeholder='Email' />
                            <div className='mx-5'><button type="submit" className="btn btn-primary mx-5">Submit</button></div>
                        </form>
                    </div>
                </div>

                <div className="col-12 col-lg-6 pt-5 align-content-end">
                    <img src={phone} alt="" className='w-75' />
                </div>
            </div>

            <footer className='row p-5 mx-0 w-100'>
                <div className="col-6 col-md-4 mb-5">
                    <ul className='list-unstyled'>
                        <li className='mb-5'>
                            <img src={footerLogo} alt="" />
                        </li>
                        <li className='row'>
                            <div className="col-1">
                                <i className="fa-solid fa-location-dot text-white"></i>
                            </div>
                            <div className="col-11 text-white">
                                <p className='w-75'>25566 Hc 1,Glenallen, Alaska, 99588, USA</p>
                            </div>
                        </li>
                        <li className='row'>
                            <div className="col-1">
                                <i className="fa-solid fa-phone text-white"></i>
                            </div>
                            <div className="col-11 text-white">
                                <p>+603 4784 273 12</p>
                            </div>
                        </li>
                        <li className='row'>
                            <div className="col-1">
                                <i className="fa-solid fa-envelope text-white"></i>
                            </div>
                            <div className="col-11 text-white">
                                <p>rentcars@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md-2 mb-5">
                    <ul className='list-unstyled text-white'>
                        <li className='mb-4 text-capitalize'>our products</li>
                        <li>Carrers</li>
                        <li>Cars</li>
                        <li>Packages</li>
                        <li>Features</li>
                        <li>Priceline</li>
                    </ul>
                </div>
                <div className="col-4 col-md-2">
                    <ul className='list-unstyled text-white'>
                        <li className='mb-4 text-capitalize'>about rent cars</li>
                        <li className='text-capitalize'>why choose us</li>
                        <li className='text-capitalize'>our story</li>
                        <li className='text-capitalize'>investor relations</li>
                        <li className='text-capitalize'>press center</li>
                        <li className='text-capitalize'>advertise</li>
                    </ul>
                </div>
                <div className="col-4 col-md-2">
                    <ul className='list-unstyled text-white'>
                        <li className='mb-4 text-capitalize'>resources</li>
                        <li className='text-capitalize'>downloads</li>
                        <li className='text-capitalize'>help center</li>
                        <li className='text-capitalize'>guides</li>
                        <li className='text-capitalize'>partner network</li>
                        <li className='text-capitalize'>cruises</li>
                        <li className='text-capitalize'>developer</li>
                    </ul>
                </div>
                <div className="col-4 col-md-2">
                    <ul className='list-unstyled text-white'>
                        <li className='mb-4 text-capitalize'>follow us</li>
                        <div>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram mx-3"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                        </div>
                    </ul>
                </div>

                <hr className='my-5' />
                <p className='text-white'>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
            </footer>


            {/* <Outlet /> */}

        </>
    )
}
