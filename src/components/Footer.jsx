import React from 'react'
import Logo from '../assets/images/webp/logo.png'
import {Instagram,TickTok,WhiteEmail,WhiteLocation,WhiteTelephone,WhiteTime,Youtube} from '../common/Icon'
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer className='bg_dark_blue'>
            <div className=" container max_width_1140">
                <div className='d-flex  justify-content-between  flex-wrap padding_top_38 gap-3'>
                    <div className="d-flex gap_10">
                        <WhiteLocation/>
                        <h6 className=' mb-0 text-white opacity_70  fw-normal font_size_sm line_height_xlg Font_Acumin_Pro'>Crawley Mill Industrial Estate, Witney, Oxfordshire </h6>
                    </div>
                    <div className="d-flex gap_10">
                        <WhiteEmail/>
                        <a href="mailto:book@dryiceblastingpro.co.uk" className=' mb-0 text-white opacity_70  fw-normal font_size_sm line_height_xlg Font_Acumin_Pro'>book@dryiceblastingpro.co.uk</a>

                    </div>
                    <div className="d-flex gap_10">
                        <WhiteTelephone/>
                        <a href="tel:+01865123456" className=' mb-0 text-white opacity_70  fw-normal font_size_sm line_height_xlg Font_Acumin_Pro'>01865123456</a>

                    </div>
                    <div className="d-flex gap_10">
                        <WhiteTime/>
                        <h6 className=' mb-0 text-white opacity_70  fw-normal font_size_sm line_height_xlg Font_Acumin_Pro '>Mon - Fri: 9am to 5pm </h6>
                    </div>
                </div>
                <div className="row padding_top_57 pb-5">
                    <div className="col-lg-5 col-12">
                        <img src={Logo} alt="logo" className=' footer_logo' />
                        <h6 className='mb-0  text-white  opacity_70  Font_Acumin_Pro  fw-normal font_size_sm line_height_lg pt-10 max_width_350'>IceBlastPro is Oxfordshire's Dry Ice Car Cleaning specialists. Removing dirt and grime in hard to reach areas with a non-abrasive Dry Ice Blasting technique that requires no chemicals and leaves no mess.</h6>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6 pt-4 pt-lg-0">
                        <ul className='m-0 p-0 d-flex flex-column gap_12'>
                            <li className=' Font_Acumin_Pro fw-bold fs-18 lh-27 text-white'>Quick Link</li>
                            <li className='pt-1'><a href="" className=' Font_Acumin_Pro fw-normal font_size_sm line_height_lg underline position-relative text-white opacity_70'>Home</a></li>
                            <li><a href="" className=' Font_Acumin_Pro fw-normal font_size_sm line_height_lg underline position-relative text-white opacity_70 '>About Us</a></li>
                            <li><a href="" className=' Font_Acumin_Pro fw-normal font_size_sm line_height_lg underline position-relative text-white opacity_70 '>Services</a></li>
                            <li><a href="" className=' Font_Acumin_Pro fw-normal font_size_sm line_height_lg underline position-relative text-white opacity_70 '>Blog</a></li>
                            <li><a href="" className=' Font_Acumin_Pro fw-normal font_size_sm line_height_lg underline position-relative text-white opacity_70 '>FAQ’s</a></li>
                            <li><a href="" className=' Font_Acumin_Pro fw-normal font_size_sm line_height_lg underline position-relative text-white opacity_70 '>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-6 pt-4 pt-lg-0 d-flex justify-content-lg-center">
                        <ul className='m-0 p-0 d-flex flex-column gap_12'>
                            <li className=' Font_Acumin_Pro fw-bold fs-18 lh-27 text-white'>Legal Information</li>
                            <li className='pt-1'><a href="" className=' Font_Acumin_Pro fw-normal font_size_sm line_height_lg underline position-relative text-white opacity_70'>Terms of Service</a></li>
                            <li><a href="" className=' Font_Acumin_Pro fw-normal font_size_sm line_height_lg underline position-relative text-white opacity_70 '>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-12 pt-4 pt-lg-0 d-flex  justify-content-lg-end">
                        <div className="d-flex  flex-column pe-3 ">
                            <h6 className='mb-0 Font_Acumin_Pro fw-bold fs-18 lh-27 text-white'>Follow us</h6>

                            <div className="d-flex flex-sm-column  gap-sm-0 gap-3">
                                <div className="d-flex gap_12 align-items-center pt-3">
                                    <a href="https://www.instagram.com/" target='_blank'>
                                        <Instagram/>
                                    </a>
                                    <a href="https://www.instagram.com/" target='_blank' className='text-white opacity_70  Font_Acumin_Pro fw-normal font_size_sm line_height_xlg d-sm-block d-none'>Instagram</a>
                                </div>
                                <div className="d-flex gap_12 align-items-center pt_18">
                                    <a href="https://www.tiktok.com/about" target='_blank'>
                                        <TickTok/>
                                    </a>
                                    <a href="https://www.tiktok.com/about" target='_blank' className='text-white opacity_70  Font_Acumin_Pro fw-normal font_size_sm line_height_xlg d-sm-block d-none'>Tiktok</a>
                                </div>
                                <div className="d-flex gap_12 align-items-center pt_18">
                                    <a href="https://www.youtube.com/?themeRefresh=1" target='_blank'>
                                <Youtube/>
                                    </a>
                                    <a href="https://www.youtube.com/?themeRefresh=1" target='_blank' className='text-white opacity_70  Font_Acumin_Pro fw-normal font_size_sm line_height_xlg d-sm-block d-none'>YouTube</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <h6 className='pb-25 mb-0  Font_Acumin_Pro fw-normal fs-14 lh-16 text-white opacity_70 text-center'>Copyright©{year}(IceBlastPro) All Rights Reserved.</h6>

            </div>
        </footer>
    )
}


export default Footer