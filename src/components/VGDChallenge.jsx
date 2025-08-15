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
import Win from '../assets/VGDC/winner.png';
import Vgdc from '../assets/VGDC/vgdc.png';
import FAQ from './FAQ'



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

        <div className='containerr'>
      <div className='text-center' data-aos='fade-up'>
        <h2 className='pt-4'>Vechy Graphix Design Challenge </h2>
        <div className="under mt-3 ml-0"></div>
        <p className='mt-3'>Unleash your creativity and explore boundless possibilities with our innovative platform  </p>
      </div>
      </div>

      <div className="container d-flex">
        <div className="row mt-5">
        <div className="col-md-6" data-aos="fade-up">
        <img src={Vgdc} className='rounded img-fluid pb-5' style={{height:'86%', width:'95%'}} alt="Winner" srcSet=''/>
      </div>


        <div className="col-md-6" data-aos="fade-up">
        <p className='text-danger'>CHALLENGE OVERVIEW </p>
          <h2 className=''>An Esteemed Venture by Vechy Graphix Ltd</h2>
          <p>Welcome to the Vechy Graphix Design Challenge, where the worlds of graphic design and web development converge in an exciting showcase of creativity and technical prowess. This challenge offers a unique platform for designers and developers alike to demonstrate their skills and passion for crafting visually stunning and functional digital experiences. From eye-catching graphics to seamless user interfaces, participants will have the opportunity to flex their creative muscles and showcase their expertise across various mediums. Throughout the challenge, participants will not only have the chance to create captivating designs but also to bring them to life through immersive web development. Join us on this exhilarating journey of innovation, collaboration, and mastery in both graphic design and web development!</p>
          <a href="/contact" className="btn btn-danger">Register Now </a>
          </div>
        </div>
        </div>
<FAQ/>

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


          <div className="container d-flex">
          <div className="row mt-5">
      <div className="col-md-6"  data-aos="fade-up">
          <img src={Win} className="rounded img-fluid mb-5" alt="About" />
          </div>
        

        
        <div className="col-md-6 justify-content-left" data-aos="fade-up">
          <h3 className='text-danger'>A Message From Winner of Season 1</h3>
          <p>
The challenge was really tough. You were given a task at night to submit the next day by 6:30 p.m. It was not easy for me. There were some days I felt like giving up. I would just say to myself, "No way, I'm not giving up on this." I joined this challenge to improve my design skills. It made me take my time to research more for each task given.

As the winner of this edition, I want to let you know that you can participate in that challenge you have been dreaming of. Just step out of your comfort zone, and believe me, you won't regret it. Stay tuned for the next edition. I believe you won't want to miss it.

See you there! 

Thank you to the organizers @vechygraphix.</p>
<div>
            <h5>MS. NNEOMA IKENWA CHINAZA</h5>
            </div>
          </div>
        </div>
        </div>
        <div className="text-center" data-aos='fade-up'>
      <a href="/contact" className="btn btn-danger">Register Now</a>
    </div>
    {/* </div> */}

      


       
    </>
  )
}

export default VGDC