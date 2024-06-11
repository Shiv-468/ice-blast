import React, { useState } from 'react';
import PlusIcon from '../assets/images/webp/round-plus.png'
import MinusIconWhite from '../assets/images/webp/minusWhite.png'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const accordionData = [
        {
            title: 'What types of vehicles are best suited for dry ice blasting?',
            content: 'Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.',
    
        },
        {
            title: 'How often should I use dry ice blasting for optimal vehicle maintenance?',
            content: 'Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.',
    
        },
        {
            title: 'Can dry ice blasting be used on vehicle interiors?',
            content: 'Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.',
    
        },
        {
            title: 'What makes dry ice blasting more effective than pressure washing or sandblasting?',
            content: 'Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.',
    
        },
        {
            title: 'Is there any preparation required on my part before a dry ice blasting session?',
            content: 'Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.',
    
        },
        {
            title: 'How long does a typical dry ice blasting session take?',
            content: 'Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.',
    
        },
        {
            title: 'Can dry ice blasting improve my vehicle’s resale value?',
            content: 'Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.',
    
        },
        {
            title: 'Will dry ice blasting remove existing wax or sealant from my car’s paint?',
            content: 'Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.',
    
        },
        {
            title: 'Are there any special care instructions to follow after a dry ice blasting session?',
            content: 'Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.',
    
        },
    ];
  return (
   <section>
    <div className=" container max_width_1140">
    <h2 className='mb-0 Font_TitlingGothicFBCond fw-bold font_size_2xl line_height_7xl text-center'>Still Unsure? Check Out These FAQs</h2>
    <div className="accordion2">
            {accordionData.map((item, index) => (
                <div key={index} style={{backgroundColor:item.backgroundColor}} className={`accordion-item2  mt_20 ${activeIndex === index ? 'active' : ''}`}>
                    <div className="accordion-title2" onClick={() => toggleAccordion(index)}>
                    <h2 className='accordion-heading2 mb-0 font_size_xlg line_height_3xl color_black fw-bold Font_Acumin_Pro_bold'>{item.title}</h2>
                    
                       
                        <span> <img src={activeIndex === index ? MinusIconWhite : PlusIcon} alt="Toggle Icon" /></span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content2">
                            <p className=' mb-0 font_size_sm line_height_xlg Font_Acumin_Pro fw-normal color_black opacity_70'>{item.content}</p>
                        </div>
                          )}
                  
                </div>
            ))}
        </div>
        <div className="contact_card mt_20 mb_65">
            <h5 className=' mb-0 color_dark_blue font_size_xlg line_height_3xl Font_Acumin_Pro_bold fw-bold'>Have a Different Question? Contact Us Today</h5>
            <form action="" className='pt_18'>
                <textarea placeholder='Type something...' className=' font_size_sm line_height_xlg Font_Acumin_Pro fw-normal rounded-3 p-3 '></textarea>
                <button className=' common_btn bg_orange text-white font_size_sm line_height_sm Font_Acumin_Pro_bold fw-bold margin_top_40'>Submit Now</button>
            </form>
        </div>
    </div>
   </section>
  )
}

export default Faq