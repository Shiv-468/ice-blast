import React from 'react'
import CarWash from '../assets/images/webp/close-up-car-care-process.png'
import {CheckMark} from '../common/Icon'
const FutureClean = () => {
  return (
 <section className='future_bg'>
    <div className=" container max_width_1140">
        <div className="row future_padding_top future_padding_bottom">
            <div className=" col-12 col-md-6">
                <h2 className=' mb-0 font_size_2xl line_height_7xl Font_TitlingGothicFBCond fw-bold color_dark_blue'>The Future of Car Cleaning</h2>
                <p className='mt_13 mb-0 Font_Acumin_Pro fw-normal font_size_sm line_height_xlg color_dark_blue'> No need to be overwhelmed by the thought of harsh chemicals and abrasive cleaning methods. Our dry ice blasting leaves your car spotless, reaching where no cloth can.</p>
                <div className=" d-flex gap-3 align-items-start mt-4">
                    <div className="checkmark_width">
                    <CheckMark/>    
                    </div>
                    <div className=" d-flex flex-column">
                        <p className=' mb-0 Font_Acumin_Pro_bold fw-bold font_size_sm line_height_xlg color_dark_blue'>Gentle Yet Powerful</p>
                        <p className=' mb-0 Font_Acumin_Pro fw-normal font_size_sm line_height_xlg color_dark_blue opacity_70'>Our dry ice method lifts dirt effortlessly without the need for harsh chemicals or abrasive techniques.</p>
                    </div>
                </div>
                <div className=" d-flex gap-3 align-items-start mt-3">
                <div className="checkmark_width">
                    <CheckMark/>    
                    </div>
                    <div className=" d-flex flex-column">
                        <p className=' mb-0 Font_Acumin_Pro_bold fw-bold font_size_sm line_height_xlg color_dark_blue'>Precision Cleaning</p>
                        <p className=' mb-0 Font_Acumin_Pro fw-normal font_size_sm line_height_xlg color_dark_blue opacity_70'>See how accurately we target the grunge zones, ensuring every inch of your car's undercarriage and engine is meticulously cleaned.</p>
                    </div>
                </div>
                <div className=" d-flex gap-3 align-items-start mt-3">
                <div className="checkmark_width">
                    <CheckMark/>    
                    </div>
                    <div className=" d-flex flex-column">
                        <p className=' mb-0 Font_Acumin_Pro_bold fw-bold font_size_sm line_height_xlg color_dark_blue'>Safe for AlI Vehicles</p>
                        <p className=' mb-0 Font_Acumin_Pro fw-normal font_size_sm line_height_xlg color_dark_blue opacity_70'>Perfect for all car types, from family hatchbacks to classic cars and high-performance vehicles.</p>
                    </div>
                </div>
                <div className=" d-flex gap-3 align-items-start mt-3">
                <div className="checkmark_width">
                    <CheckMark/>    
                    </div>
                    <div className=" d-flex flex-column">
                        <p className=' mb-0 Font_Acumin_Pro_bold fw-bold font_size_sm line_height_xlg color_dark_blue'>Eco-Friendly Approach</p>
                        <p className=' mb-0 Font_Acumin_Pro fw-normal font_size_sm line_height_xlg color_dark_blue opacity_70'>Notice the absence of water or chemical runoff, showcasing our commitment to an environmentally responsible cleaning process.</p>
                    </div>
                </div>
            </div>
            <div className=" col-12 col-md-6 mt-4 mt-sm-5 mt-md-0">
                <img src={CarWash} alt="carwash" className=' w-100 rounded-4 car_process_img' />
            </div>
        </div>
        <div className=" d-flex flex-column gap_20 align-items-center justify-content-center z-3">
            <p className=' mb-0 font_size_sm line_height_xlg fw-bold Font_Acumin_Pro_bold color_dark_blue'>Like What You See? Get an Instant Quote</p>
    <button className=' common_btn bg_orange text-white Font_Acumin_Pro fw-bold text-capitalize font_size_sm line_height_sm d-flex align-items-center justify-content-center'>Get Instant Quote</button>
        </div>
    </div>
 </section>
  )
}

export default FutureClean