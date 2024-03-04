import React from 'react'
import ab1 from '../assets/About/design.jpg';
import ab2 from '../assets/About/web.jpg';
import ab3 from '../assets/About/consult.jpg';
import ab4 from '../assets/About/market.jpg';
import ab5 from '../assets/About/branding.jpg';
import ab6 from '../assets/About/edit.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import s1 from '../assets/Serv/s1.jpg';
// import s2 from '../assets/Serv/s2.jpg';
import s3 from '../assets/Serv/s3.jpg';
import s4 from '../assets/Serv/s4.jpg';
import s5 from '../assets/Serv/s5.jpg';
import s6 from '../assets/Serv/s6.jpg';
// import s7 from '../assets/Serv/s7.jpg';
import s8 from '../assets/Serv/s8.jpg';
// import s9 from '../assets/Serv/s9.jpg';
// import s10 from '../assets/Serv/s10.jpg';
import s11 from '../assets/Serv/s11.jpg';
// import s12 from '../assets/Serv/s12.jpg';
// import s13 from '../assets/Serv/s13.jpg';
// import s14 from '../assets/Serv/s14.jpg';
// import s15 from '../assets/Serv/s15.jpg';
import s16 from '../assets/Serv/s16.jpg';


function Services() {
    // Array of card data
  const cardsData = [
    { image: ab1, title: 'Graphic Design', content: 'Logo design, Illustrations, Layout designs (magazines, books), Digital graphics (social media posts,banners), Infographics, etc.' },
    { image: ab2, title: 'Web Development', content: 'Website development, UI/UX design, Responsive design for mobile compatibility, Website maintenance and updates, etc.' },
    { image: ab3, title: 'Consultations', content: 'Brand strategy consultation, Expert advice on design trends and best practices, Customized solutions tailored to your specific needs.' },
    { image: ab4, title: 'Marketing', content: 'Brand Strategy Consultation, Digital Marketing Graphics, Campaign Development, Consultative Approach.' },
    { image: ab5, title: 'Packaging', content: 'Custom Packaging Design, Label and Packaging Graphics, Packaging Material Selection Guidance, etc.' },
    { image: ab6, title: 'Photo Editing', content: 'Image Retouching, Background Removal, Photo Manipulation, Restoration Services, Product Photography Editing, etc.' },
    // Add more card data objects as needed
  ];

      // Array of card data
  const cardsData1 = [
    // { image: s1 },
    // { image: s2 },
    { image: s3 },
    { image: s4 },
    { image: s5 },
    { image: s6 },
    // { image: s7 },
    { image: s8 },
    // { image: s9 },
    // { image: s10 },
    { image: s11 },
    // { image: s12 },
    // { image: s13 },
    // { image: s14 },
    // { image: s15 },
    { image: s16 },

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
            <div className="text-center pt-3 text-light" data-aos='bounce-in'>
                <h2 className="pt-5">Services</h2>
                <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Services</p>
            </div>
        </div>

        {/* services */}

        <div className="container mt-5 text-center" data-aos='fade-up'>
          <h2>Complete Design Solutions For Your Brand</h2>
          <p>Transform your brand with our comprehensive range of design services tailored to meet your every need. </p>
        <section className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-5" data-aos="fade-up">
            <div className="card">
              <img src={card.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title ">{card.title}</h4>
                <p className="card-text">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      </div>
        
      <div className="pt-5 text-center">
      <div className="bg-primary mt-5 mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2 className='text-light text-center'>PROJECTS GALLERY</h2>
            <p className='text-light text-center'>Below is a highlight of some of our projects.</p>
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

    </>
  )
}

export default Services