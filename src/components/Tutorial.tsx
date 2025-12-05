import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'

const Tutorial = () => {
  return (
    <div>
      <div className="bg-[url('/video.jpg')] h-[360px] relative bg-no-repeat bg-cover"
      // style={{backgroundPosition: "50% 98.9188px"}}
      >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className='flex justify-center'>

                  <FaCirclePlay className="w-[60px] h-[60px] text-[#FFBC13]"/>
                  </div>
                  <h2 className="text-[33px] font-montserrat font-bold tracking-widest mt-5">
                    WATCH OUR VIDEO TUTORIAL
                  </h2>
                  
                </div>
              </div>
            </div>
    </div>
  )
}

export default Tutorial
