import React from 'react'
import ServiceCloudTop from '../assets/images/webp/ServiceCloudTop.png'
import ServiceCloudBottom from '../assets/images/webp/ServiceCloudBottom.png'
import BehindCarWashing from '../assets/images/webp/BehindCarWashing.png'
import PlayButton from '../assets/images/svg/PlayButton.svg'
const BlastingService = () => {
  return (
   <section className='service_bg'>
    <div className=" d-flex">
        <img src={ServiceCloudTop} alt="ServiceCloudTop" className=' w-100' />
    </div>
    <div className=" container max_width_1140 pb_34">
<div className=" d-flex flex-column align-items-center justify-content-center pb-5">
    <div className=" max_width_592">
    <h2 className=' mb-0 line_height_7xl font_size_2xl Font_TitlingGothicFBCond fw-bold text-white text-center'>Behind the Scenes Dry Ice Blasting a Car</h2>
    <p className=' mb-0 mt_13 font_size_sm line_height_xlg fw-normal Font_Acumin_Pro text-white text-center'>From the initial setup to the final sweep, discover how we elevate car cleaning to an art form, delivering immaculate results every time.</p>
    </div>
</div>
<div className=" mx-auto position-relative">
    <div className=" position-absolute play_btn">
        <img src={PlayButton} alt="PlayButton" />
    </div>
    <img src={BehindCarWashing} alt="BehindCarWashing" className=' w-100' />
</div>
<p className=' mb-0 padding_top_40 font_size_sm line_height_xlg fw-normal Font_Acumin_Pro text-white text-center'>Discover a cleaner, fresher, and more beautiful car, inside and out, with our advanced dry ice blasting services.</p>
<button className=' mt_20 mx-auto common_btn bg_orange text-white Font_Acumin_Pro fw-bold text-capitalize font_size_sm line_height_sm d-flex align-items-center justify-content-center'>Get Instant Quote</button>
    </div>
    <div className=" d-flex">
        <img src={ServiceCloudBottom} alt="ServiceCloudTop" className=' w-100' />
    </div>
   </section>
  )
}

export default BlastingService