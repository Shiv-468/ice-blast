import React from 'react'
import CheckMark from '../assets/images/svg/check-mark.svg'
const FutureClean = () => {
  return (
 <section className='future_bg'>
    <div className=" container max_width_1140">
        <div className="row future_padding_top">
            <div className=" col-6">
                <h2 className=' mb-0 font_size_2xl line_height_7xl Font_TitlingGothicFBCond fw-bold color_black'>The Future of Car Cleaning</h2>
                <p className=' mb-0 Font_Acumin_Pro fw-normal font_size_sm line_height_xlg color_black'> No need to be overwhelmed by the thought of harsh chemicals and abrasive cleaning methods. Our dry ice blasting leaves your car spotless, reaching where no cloth can.</p>
                <div className=" d-flex gap-3 align-items-start">
                    <img src={CheckMark} alt="CheckMark" />
                    <div className=" d-flex flex-column">
                        <p className=' mb-0 Font_Acumin_Pro fw-bold font_size_sm line_height_xlg color_black'>Gentle Yet Powerful</p>
                        <p className=' mb-0 Font_Acumin_Pro fw-normal font_size_sm line_height_xlg color_black opacity_70'>Our dry ice method lifts dirt effortlessly without the need for harsh chemicals or abrasive techniques.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>
  )
}

export default FutureClean