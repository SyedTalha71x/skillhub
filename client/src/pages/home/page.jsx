/* eslint-disable no-unused-vars */
import React from 'react'
import HomeBanner from '../../components/homebanner/page'
import WhyChooseUs from '../../pages/whychooseus/page'
import Solutions from '../../pages/solutions/page'
import Services from '../../pages/services/page'
import Testimonials from '../../pages/testimonials/page'
import Joinus from '../../pages/joinus/page'
import Footer from '../../components/footer/page'
import Growth from '../growth/page'


const Page = () => {
  return (
    <>
    <div className='home-menu h-full'>
        <HomeBanner/>
    </div>
    <div>
        <WhyChooseUs/>
    </div>
    <div>
        <Solutions/>
    </div>
    <div>
        <Services/>
    </div>
    <div>
        <Testimonials/>
    </div>
    <div>
      <Growth/>
    </div>
    <div>
      <Joinus/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Page