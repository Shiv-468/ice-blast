import React from 'react'
import BlueShirt from '../assets/images/webp/Blueshirt.png'
import Group72 from '../assets/images/webp/Group72.png'
import MeetTopCloud from '../assets/images/webp/MeetTopCloud.png'
import MeetBottomCloud from '../assets/images/webp/MeetBottomCloud.png'
const MeetTheTeam = () => {
  return (
<section className=' overflow-hidden'>
    <div className=" d-flex">
        <img src={MeetTopCloud} alt="MeetTopCloud" className=' w-100' />
    </div>
    <div className="container max_width_1140 section_margin_top">
    <div className="row align-items-center z-2">
                    <div className="col-md-6 z-2 col-12 ">
                        <div className="blueshirt position-relative">
                            <img src={BlueShirt} alt="blue" className='w-100' />
    
                            <div className=" position-absolute group72 z-n1 d-non e d-lg-block">
                                <img src={Group72} alt="group" className=' w-100' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className='mb-0 Font_TitlingGothicFBCond fw-bold font_size_2xl line_height_7xl '>Meet The Team</h2>
                        <h5 className=' Font_Acumin_Pro_bold fw-bold font_size_xmd line_height_xmd pt_10 color_dark_blue pb-3 mb-0'>Oxfordshire's Dry Ice Car Cleaning Specialists</h5>
                        <h6 className=' Font_Acumin_Pro fw-normal font_size_sm line_height_xlg color_dark_blue opacity_70 mb-0'>We’re shaking up the car cleaning scene with Dry Ice Blasting. From our buzzing unit in Oxfordshire, we're not just a team - we’re a Crew of car enthusiasts, expert restorers, and skilled mechanics united by our love for cars. We treat every car like it’s our own, driven by a philosophy that doing the right thing for your ride is the only way to go. When you hand over your keys to us, you're entrusting your pride and joy to fellow car lovers who understand that every car deserves precision care and a touch of cool.</h6>
                    </div>
                </div>
    </div>
    <div className=" d-flex section_margin_top">
        <img src={MeetBottomCloud} alt="MeetTopCloud" className=' w-100' />
    </div>
</section>
  )
}

export default MeetTheTeam