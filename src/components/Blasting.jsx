import React from 'react'
import BlastTopCloud from '../assets/images/webp/blastingTopCloud.png'
import BlastBottomCloud from '../assets/images/webp/blastingBottomCloud.png'
import IceBlaster from '../assets/images/webp/ice_blaster.png'
import IceWork from '../assets/images/webp/ice_work.png'
const Blasting = () => {
  return (
   <section className=' position-relative bg_orange' id='aboutus'>
    <div className=" d-flex">
        <img src={BlastTopCloud} alt="BlastTopCloud" className=' w-100' />
    </div>
    <div className=" position-absolute IceBlaster d-none d-md-block">
    <img src={IceBlaster} alt="IceBlaster" className=' w-100' />
    </div>
    <div className=" position-absolute IceWork d-none d-md-block">
    <img src={IceWork} alt="IceWork" className=' w-100' />
    </div>
    <div className=" container max_width_1140">
        <h2 className=' mb-0 line_height_7xl mt_13 font_size_2xl Font_TitlingGothicFBCond fw-bold text-white text-center'>Understanding Dry Ice Blasting</h2>
        <div className="row mt_20 ice_blasting_paddings">
            <div className=" col-12 col-md-6">
                <h5 className=' mb-0 font_size_xlg line_height_4xl Font_Acumin_Pro_bold text-white'>What is Dry Ice Blasting?</h5>
                <p className=' mb-0 font_size_xmd line_height_xl fw-normal Font_Acumin_Pro text-white'>Dry ice blasting is an innovative cleaning technology that uses solid CO2 (carbon dioxide) pellets. These pellets are propelled at high speeds to clean surfaces. Unlike traditional cleaning methods, this process does not involve water or abrasive materials, making it incredibly safe and effective for delicate areas like engine bays, undercarriages, and even car interiors.</p>
            </div>
            <div className="col-12 col-md-6">
                <img src={IceBlaster} alt="IceBlaster" className=' w-100 IceBlaster2 d-md-none' />
            </div>
        </div>
        <div className="row blasting_work_paddings flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6">
                <img src={IceWork} alt="IceWork" className=' w-100 IceWork2 d-md-none' />
            </div>
            <div className=" col-12 col-md-6">
                <h5 className=' mb-0 font_size_xlg line_height_4xl Font_Acumin_Pro_bold text-white'>How Does Dry Ice Blasting Work?</h5>
                <p className=' mb-0 font_size_xmd line_height_xl fw-normal Font_Acumin_Pro text-white'>The process begins with the dry ice pellets being accelerated in a jet of compressed air, similar to sandblasting but with a crucial difference. Upon contact with the surface, the dry ice pellets undergo sublimation - they turn directly from solid to gas without becoming liquid. This reaction creates a micro-explosion on the surface, lifting dirt and contaminants away.</p>
            </div>
           
        </div>
    </div>
    <div className=" d-flex">
        <img src={BlastBottomCloud} alt="BlastBottomCloud" className=' w-100' />
    </div>
   </section>
  )
}

export default Blasting