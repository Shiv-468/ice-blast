import React from 'react'
import MailingImg from '../assets/images/webp/Mailing.png'
const Mailing = () => {
  return (
  <section id='contactus'>
    <div className=" container max_width_1140">
        <div className="mail_card mx-auto z-1 position-relative d-flex align-items-center justify-content-center flex-column">
          <div className="MailingImg position-absolute">
          <img src={MailingImg} alt="MailingImg" className=' w-100 ' />

          </div>
            <h2 className=' mb-0 font_size_xl line_height_6xl Font_TitlingGothicFBCond fw-bold text-white text-center padding_top_68'>Join Our Mailing List</h2>
            <p className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro fw-normal text-white mt-2 text-center'>Get news, videos and deals straight to your inbox.</p>
            <form action="" className=' w-100 mx-auto mt-4'>
                <div className="email_div w-100 rounded-5 d-flex mx-auto">
                    <input type="email" placeholder='Enter your email address ' className=' w-100 input_padding rounded-5 font_size_sm line_height_md Font_Acumin_Pro fw-normal color_dark_blue' />
                    <button className=' common_btn bg_orange text-white font_size_sm line_height_sm Font_Acumin_Pro_bold fw-bold'>Subscribe</button>
                    
                </div>
            </form>
        </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.297784225345!2d75.7197873762784!3d29.155895875383234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233d0d797efb7%3A0x90a59576018cca5f!2sRadial%20Code!5e0!3m2!1sen!2sin!4v1718203292600!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" className=' w-100 map_margin z-0' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
  )
}

export default Mailing