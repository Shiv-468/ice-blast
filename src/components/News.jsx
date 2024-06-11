import React from 'react'
import Card1 from '../assets/images/webp/Card1.png'
import Card2 from '../assets/images/webp/card2.png'
import Card3 from '../assets/images/webp/card3.png'
export const News = () => {
  return (
   <section>
    <div className=" container max_width_1140">
        <h2 className=' mb-0 line_height_7xl font_size_2xl Font_TitlingGothicFBCond fw-bold color_dark_blue text-center'>Latest News & Insights</h2>
        <p className='mb-0 Font_Acumin_Pro fw-normal font_size_sm line_height_xlg color_dark_blue text-center opacity_70 mt-3 mb-5'>Uncover the latest insights and innovation in car care.</p>
        <div className=" row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                <div className="news_Card ">
                    <img src={Card1} alt=" card1" className=' w-100 news_cardImg' />
                    <p className=' mb-0 mt_20 font_size_sm line_height_xlg Font_Acumin_Pro fw-semibold opacity_80 color_dark_blue'>January 1st, 2024</p>
                    <p className='  mb-0 pt_10 font_size_sm line_height_xlg Font_Acumin_Pro_bold fw-bold color_dark_blue max_width_300'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                <div className="news_Card ">
                    <img src={Card2} alt=" card1" className=' w-100 news_cardImg' />
                    <p className=' mb-0 mt_20 font_size_sm line_height_xlg Font_Acumin_Pro fw-semibold opacity_80 color_dark_blue'>January 1st, 2024</p>
                    <p className='  mb-0 pt_10 font_size_sm line_height_xlg Font_Acumin_Pro_bold fw-bold color_dark_blue max_width_300'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                <div className="news_Card ">
                    <img src={Card3} alt=" card1" className=' w-100 news_cardImg' />
                    <p className=' mb-0 mt_20 font_size_sm line_height_xlg Font_Acumin_Pro fw-semibold opacity_80 color_dark_blue'>January 1st, 2024</p>
                    <p className='  mb-0 pt_10 font_size_sm line_height_xlg Font_Acumin_Pro_bold fw-bold color_dark_blue max_width_300'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                </div>
            </div>
        </div>
        <div className=" d-flex align-items-center justify-content-center">
            <button className=' common_btn bg_orange text-white font_size_sm line_height_sm Font_Acumin_Pro_bold fw-bold margin_top_40'>More Blogs</button>
        </div>
    </div>
   </section>
  )
}
