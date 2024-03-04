import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../assets/VGDC/1.jpg';
import pic2 from '../assets/VGDC/2.jpg';
import pic3 from '../assets/VGDC/3.jpg';
import pic4 from '../assets/VGDC/4.jpg';
import pic5 from '../assets/VGDC/5.jpg';
import pic6 from '../assets/VGDC/6.jpg';
import pic7 from '../assets/VGDC/7.jpg';
import pic8 from '../assets/VGDC/8.jpg';
import pic9 from '../assets/VGDC/9.jpg';
import pic10 from '../assets/VGDC/10.jpg';
import pic11 from '../assets/VGDC/11.jpg';
import pic12 from '../assets/VGDC/12.jpg';
import pic13 from '../assets/VGDC/13.jpg';
import pic14 from '../assets/VGDC/14.jpg';
import pic15 from '../assets/VGDC/15.jpg';
// import pic16 from '../assets/VGDC/16.jpg';
// import pic17 from '../assets/VGDC/17.jpg';
// import pic18 from '../assets/VGDC/18.jpg';
// import pic19 from '../assets/VGDC/19.jpg';
// import pic20 from '../assets/VGDC/20.jpg';
// import pic21 from '../assets/VGDC/21.jpg';
// import pic22 from '../assets/VGDC/22.jpg';
// import pic23 from '../assets/VGDC/23.jpg';
import Win from '../assets/VGDC/winner.jpg';


function VGDC() {
    // Array of card data
  const cardsData1 = [
    { image: pic1},
    { image: pic2},
    { image: pic3},
    { image: pic4},
    { image: pic5},
    { image: pic6},
    { image: pic7},
    { image: pic8},
    { image: pic9},
    { image: pic10},
    { image: pic11},
    { image: pic12},
    { image: pic13},
    { image: pic14},
    { image: pic15},
    // { image: pic16},
    // { image: pic17},
    // { image: pic18},
    // { image: pic19},
    // { image: pic20},
    // { image: pic21},
    // { image: pic22},
    // { image: pic23},

    
    // Add more card data objects as needed

  ];

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024, // breakpoint for desktop
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768, // breakpoint for tablet/mobile
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
  
  
  return (
    <>
        <div className="cover">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5">VGD Challenge</h2>
                <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> VGDC</p>
            </div>
        </div>

        <div className='text-center'>
      <div className='ab text-center' data-aos='fade-up'>
        <h2 className='pt-4'>Vechy Graphix Design Challenge</h2>
        <div className="under mt-3 ml-0"></div>
        <p className='mt-3'> A proud initiative of Vechy Graphix Group </p>
      </div>

        
        <div className="row">
        <div className="col-md-6" data-aos="fade-up">
          <div className='vech'>
          <p className='text-danger'>ALL ABOUT THE CHALLENGE </p>
          <h2>Graphic Designs, Branding, Consultations, And More</h2>
          <p>Our vision is rooted in the belief that every brand has a story worth telling, and it's our mission to bring those stories to life with authenticity, passion, and unparalleled creativity. We envision a future where design transcends mere aesthetics, where it becomes a catalyst for meaningful connection and positive change. Through our dedication to excellence and our relentless pursuit of innovation, we aim to empower brands to make a lasting impact in the world, one pixel at a time.</p>
          <a href="/contact" className="btn btn-danger">Participate </a>
          </div>
        </div>
        </div>
        </div>



        <div className="pt-5 text-center">
      <div className="bg-primary mt-5 mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2 className='text-light text-center'>VGDC GALLERY</h2>
            <p className='text-light text-center'>Take a look at some of the amazing designs from the participants.</p>
            </div>
            </div>
            </div>
      </div>

      <div className="mt-5">
      <section className="row">
      <Slider {...settings}>
        {cardsData1.map((card, index) => (
          <div key={index} className="col-md-4 mb-5">
             <div className="slider-item" style={{ marginRight: '1rem' }}>
             <div className="card">
              <img src={card.image} className="card-img-top" alt="..." />
              </div>
            </div>
             </div>
          // </div>
        ))}
        </Slider>
      </section>
    </div>

        <div className="container mt-5 mb-3">
            <div className="row">
              
                <div className="col-md-6" data-aos="fade-up">
                    <h3>Let's Hear From The Winner of Season 1 </h3>
                
                <div className="rounded img-fluid mx-auto" >
                    <img src={Win} alt="Winner" srcSet=''/>
                </div>
                </div>        
            </div>
            </div>
    </>
  )
}

export default VGDC