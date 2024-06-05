import React from 'react'
import Logo from '../assets/images/webp/logo.png'
import Location from '../assets/images/svg/location.svg'
import Email from '../assets/images/svg/email.svg'
import Telephone from '../assets/images/svg/telephone.svg'
import Time from '../assets/images/svg/time.svg'
import Charmtick from '../assets/images/svg/charmtick.svg'
const Hero = () => {
  return (
  <section className=' min-vh-100 hero_bg'>
    <div className=" container max_width_1140">
      <div className=" d-lg-flex align-items-center justify-content-between py_14 d-none d-lg-block">
        <div className=" d-flex align-items-center gap_10">
          <div className="orangeSvg1 d-flex align-items-center justify-content-center">
          <img src={Location} alt="location" />
          </div>
          <p className=' mb-0 text-white Font_Acumin_Pro'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
        </div>
        <div className=" d-flex align-items-center gap_10">
          <div className="orangeSvg1 d-flex align-items-center justify-content-center">
          <img src={Email} alt="email " />
          </div>
          <p className=' mb-0 text-white Font_Acumin_Pro'>book@dryiceblastingpro.co.uk </p>
        </div>
        <div className=" d-flex align-items-center gap_10">
          <div className="orangeSvg1 d-flex align-items-center justify-content-center">
          <img src={Telephone} alt="telephone" />
          </div>
          <p className=' mb-0 text-white Font_Acumin_Pro'>01865123456 </p>
        </div>
        <div className=" d-flex align-items-center gap_10">
          <div className="orangeSvg1 d-flex align-items-center justify-content-center">
          <img src={Time} alt="time" />
          </div>
          <p className=' mb-0 text-white Font_Acumin_Pro'>Mon - Fri: 9am to 5pm</p>
        </div>
      </div>
    </div>
   <div className="px_12">
   <div className="max_width_1230 mx-auto w-100 nav_Box">
      <div className="container max_width_1140">
        <nav className=' d-flex align-items-center justify-content-between'>
          <img src={Logo} alt="logo" className=' w-100 nav_logo' />
          <ul className=' d-flex align-items-center gap-4 ps-0 mb-0'>
            <li><a href="#home" className='Font_Acumin_Pro color_gray fw-bold font_size_sm line_height_sm nav_links'>Home</a></li>
            <li><a href="#aboutus" className='Font_Acumin_Pro color_gray fw-bold font_size_sm line_height_sm nav_links'>About us</a></li>
            <li><a href="#services" className='Font_Acumin_Pro color_gray fw-bold font_size_sm line_height_sm nav_links'>Services</a></li>
            <li><a href="#pricing" className='Font_Acumin_Pro color_gray fw-bold font_size_sm line_height_sm nav_links'>Pricing</a></li>
            <li><a href="#blog" className='Font_Acumin_Pro color_gray fw-bold font_size_sm line_height_sm nav_links'>Blog</a></li>
            <li><a href="#contactus" className='Font_Acumin_Pro color_gray fw-bold font_size_sm line_height_sm nav_links'>Contact us</a></li>
          </ul>
          <button className=' common_btn bg_orange text-white Font_Acumin_Pro fw-bold text-capitalize font_size_sm line_height_sm d-flex align-items-center justify-content-center'>call us</button>
        </nav>
      </div>
    </div>
   </div>
   <div className=" container max_width_1140">
    <div className=" d-flex align-items-center flex-column justify-content-center">
    <h1 className=' mb-0 text-white Font_TitlingGothicFBCond font_size_3xl text-center heading_padding_top max_width_730'>Automotive Dry Ice Cleaning</h1>
    <p className=' mb-0 text-white Font_Acumin_Pro fw-normal font_size_md line_height_2xl pt-3'>Discover the ultimate clean for your machine.</p>
    <p className=' mb-0 text-white Font_Acumin_Pro fw-normal font_size_md line_height_2xl'>No chemicals, no abrasives and no drama.</p>
    <button className=' common_btn margin_top_40 bg_orange text-white Font_Acumin_Pro fw-bold text-capitalize font_size_sm line_height_sm d-flex align-items-center justify-content-center'>Get Instant Quote</button>
    <div className="bg_gray2 rounded-3 d-flex align-items-center justify-content-center transparent_div margin_top_40 w-100">
      <div className=" d-flex align-items-center justify-content-center gap_28">
        <div className=" d-flex align-items-center gap_12">
          <img src={Charmtick} alt="Charmtick" />
          <p className=' mb-0 fw-bold Font_Acumin_Pro font_size_sm line_height_xlg text-white'>Non-Abrasive</p>
        </div>
        <div className=" d-flex align-items-center gap_12">
          <img src={Charmtick} alt="Charmtick" />
          <p className=' mb-0 fw-bold Font_Acumin_Pro font_size_sm line_height_xlg text-white'>No Chemicals</p>
        </div>
        <div className=" d-flex align-items-center gap_12">
          <img src={Charmtick} alt="Charmtick" />
          <p className=' mb-0 fw-bold Font_Acumin_Pro font_size_sm line_height_xlg text-white'>No Mess</p>
        </div>
      </div>
    </div>
    </div>
   </div>
  </section>
  )
}

export default Hero