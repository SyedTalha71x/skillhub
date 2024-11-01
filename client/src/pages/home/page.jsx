/* eslint-disable no-unused-vars */
import React from 'react'
import HomeBanner from '../../components/homebanner/page'
import WhyChooseUs from '../../pages/whychooseus/page'

const Page = () => {
  return (
    <>
    <div className='home-menu h-full'>
        <HomeBanner/>

    </div>
    <div>
        <WhyChooseUs/>
    </div>
    </>
  )
}

export default Page