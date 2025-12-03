import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className='mt-20'>

      <Gallery/>
      </div>
      <Footer/>
    </div>
  )
}

export default page
