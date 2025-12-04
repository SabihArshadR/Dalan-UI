import BlogPage from '@/components/Blogpage'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CommentSection from '@/components/Singleblog'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className='mt-20'>

      <BlogPage/>
      </div>
      <CommentSection/>
      <Footer/>
    </div>
  )
}

export default page