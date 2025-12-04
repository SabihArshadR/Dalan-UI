import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className='mt-20'>
      <div className="bg-[url('/slider2.jpg')] h-[600px] relative font-roboto">
      <div className="absolute top-1/2 left-[200px] "> 


      <p className="text-[14px] tracking-[5px] font-bold">
        <span className="text-[#605B5B]">

        Home {" "}
        </span>
        <span className="text-[#6E6E6E]">

        / Gallery
        </span>
      </p>
      <h1 className="text-[45px] text-[#333333] font-medium tracking-[4px]">
        OUR GALLERY
      </h1>
      </div>
      </div>
      <Gallery/>
      </div>
      <Footer/>
    </div>
  )
}

export default page
