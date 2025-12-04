import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className='mt-10'>

      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default page
