import React from 'react'

const MeetTheTeam = () => {
  return (
<section>
    <div className="container max_width_1140">
    <div className="row align-items-center">
                    <div className="col-md-6 z-1 col-12 ">
                        <div className="blueshirt position-relative">
                            <img src={BlueShirt} alt="blue" className='w-100' />
                            <div className=" position-absolute group72 z-n1 d-none">
                                <img src={Group72} alt="group" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className='font-titlingGothic mb-0 fw-bold fs-48 lh-57 '>Meet The Team</h2>
                        <h5 className=' font-acumin fw-bold fs-18 lh-21 color-blue pt_10 pb-3 mb-0'>Oxfordshire's Dry Ice Car Cleaning Specialists</h5>
                        <h6 className='font-acumin fw-normal fs-16 lh-24 color-blue opacity-70 mb-0'>We’re shaking up the car cleaning scene with Dry Ice Blasting. From our buzzing unit in Oxfordshire, we're not just a team - we’re a Crew of car enthusiasts, expert restorers, and skilled mechanics united by our love for cars. We treat every car like it’s our own, driven by a philosophy that doing the right thing for your ride is the only way to go. When you hand over your keys to us, you're entrusting your pride and joy to fellow car lovers who understand that every car deserves precision care and a touch of cool.</h6>
                    </div>
                </div>
    </div>
</section>
  )
}

export default MeetTheTeam