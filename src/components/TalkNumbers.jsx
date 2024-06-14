import React, { useState } from 'react';
import PlusIcon from '../assets/images/webp/round-plus.png'
import MinusIcon from '../assets/images/webp/round-minus.png'
import TalknumberCloudB from '../assets/images/webp/TalknumberCloudB.png'
const TalkNumbers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
  };
  const accordionData = [
    {
        title: 'Engine Bay Perfection from £375',
        content: 'Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It\'s the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.',
        backgroundColor: '#6EE7FF12'

    },
    {
        title: 'Underbelly Deep-Clean from £750',
        content: 'Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It\'s the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.',
        backgroundColor: '#F3F3F4'
    },
    {
        title: 'Ultimate Undercarriage & Engine Bay Overhaul from £1,125',
        content: 'Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It\'s the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.',
        backgroundColor: '#FDF9F2'

    },
    {
        title: 'Need Something Else?',
        content: 'Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It\'s the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.',
        backgroundColor: '#FB842C1A'

    }
];
  return (
    <section className='section_margin_top position-relative' id='pricing'>
      <h2 className=' mb-0 line_height_7xl font_size_2xl Font_TitlingGothicFBCond fw-bold color_dark_blue text-center'>Let's Talk Numbers</h2>
      <div className=" d-flex justify-content-center">
        <p className=' mb-0 Font_Acumin_Pro fw-normal max_width_760 font_size_sm line_height_xlg color_dark_blue text-center opacity_70 mt_13'>We're all about transparency, but we also know that each car tells a different story. The cost can vary based on how much grime we're up against. More dirt might mean more ice and more time to get that perfect finish. But don't sweat it – we'll always give you a straight price, customised to your car's needs.</p>
      </div>
      <div className=" container max_width_1140">
      <div className="accordion d-flex flex-column gap_20 mt-5">
            {accordionData.map((item, index) => (
                <div key={index} style={{backgroundColor:item.backgroundColor}} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                    <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                    <h2 className='accordion-heading mb-0 font_size_lg line_height_5xl color_black fw-bold Font_Acumin_Pro_bold'>{item.title}</h2>
                        {activeIndex === index && (
                        <div className="accordion-content d-none d-lg-block">
                            <p className=' mb-0'>{item.content}</p>
                        </div>
                          )}
                       
                        <span> <img src={activeIndex === index ? MinusIcon : PlusIcon} alt="Toggle Icon" /></span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content d-lg-none">
                            <p className=' mb-0 font_size_sm line_height_lg Font_Acumin_Pro fw-normal color_black opacity_70'>{item.content}</p>
                        </div>
                          )}
                  
                </div>
            ))}
        </div>
        <div className="quote_card margin_top_40 d-flex flex-column align-items-center justify-content-center">
          <h3 className=' mb-0 font_size_xl line_height_6xl Font_TitlingGothicFBCond fw-bold color_black text-center'>Get an Instant Quote Today</h3>
          <p className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro fw-normal color_black mt-3 max_width_760 text-center'>Regular dry ice cleaning prevents costly rust and wear. Avoid potentially thousands of pounds worth of bodywork repairs when just for a fraction of that you can keep your car in prime condition all year round! What are you waiting for?</p>
          <button className=' common_btn bg_orange text-white font_size_sm line_height_sm Font_Acumin_Pro_bold fw-bold margin_top_40'>Get Instant Quote</button>
        </div>
      </div>
      <div className=" d-flex margin_top_40">
        <img src={TalknumberCloudB} alt="TalknumberCloudB" className=' w-100 bg_orange' />
      </div>
    </section>
  )
}

export default TalkNumbers