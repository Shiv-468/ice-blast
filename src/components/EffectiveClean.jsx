import React from 'react'
import EffectiveCleanImg from '../assets/images/webp/effectiveClean.png'
import NonAbrasive from '../assets/images/webp/Non-Abrasive.png'
import NoResidue from '../assets/images/webp/NoResidue.png'
import Materials from '../assets/images/webp/Materials.png'
import Img from '../assets/images/webp/img.png'
const EffectiveClean = () => {
  return (
   <section className='section_margin_top d-flex position-relative'>
    <div className=" container max_width_1140 effective_padding_bottom ">
        <h2 className=' mb-0 line_height_7xl mt_13 font_size_2xl Font_TitlingGothicFBCond fw-bold color_dark_blue text-center'>Why Choose Dry Ice Blasting for Your Car?</h2>
        <div className=" row align-items-center pt-5">
            <div className="col-12 col-md-6">
                <div className=" d-flex align-items-center gap_12">
                    <img src={EffectiveCleanImg} alt="EffectiveCleanImg" className=' w-100 small_img' />
                    <div className=" d-flex flex-column gap-1">
                        <h4 className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro_bold fw-bold color_dark_blue'>Effective Cleaning</h4>
                        <p className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro fw-normal color_dark_blue'>The sublimation process effectively removes dirt, oil, and grime, even in hard-to-reach areas.</p>
                    </div>
                </div>
                <div className=" d-flex align-items-center gap_12 pt_28">
                    <img src={NonAbrasive} alt="NonAbrasive" className=' w-100 small_img' />
                    <div className=" d-flex flex-column gap-1">
                        <h4 className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro_bold fw-bold color_dark_blue'>Non-Abrasive</h4>
                        <p className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro fw-normal color_dark_blue'>Unlike sandblasting or chemical cleaning, dry ice blasting won’t damage your car’s components or paint.</p>
                    </div>
                </div>
                <div className=" d-flex align-items-center gap_12 pt_28">
                    <img src={NoResidue} alt="NoResidue" className=' w-100 small_img' />
                    <div className=" d-flex flex-column gap-1">
                        <h4 className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro_bold fw-bold color_dark_blue'>No Residue</h4>
                        <p className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro fw-normal color_dark_blue'>Since dry ice sublimates, there’s no residual waste to clean up, making it an environmentally friendly option.</p>
                    </div>
                </div>
                <div className=" d-flex align-items-center gap_12 pt_28">
                    <img src={Materials} alt="Materials" className=' w-100 small_img' />
                    <div className=" d-flex flex-column gap-1">
                        <h4 className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro_bold fw-bold color_dark_blue'>Safe for Various Materials</h4>
                        <p className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro fw-normal color_dark_blue'>It’s safe for use on metals, plastics, rubbers, fabrics and more, ensuring comprehensive cleaning without damage.</p>
                    </div>
                </div>
            </div>
            <div className=" col-12 col-md-6 mt-5 mt-md-0">
                <img src={Img} alt="img" className=' w-100' />
            </div>
        </div>
    </div>
   </section>
  )
}

export default EffectiveClean