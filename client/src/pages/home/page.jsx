/* eslint-disable no-unused-vars */
import React from 'react'
import HomeBanner from '../../components/homebanner/page'
import WhyChooseUs from '../../pages/whychooseus/page'
import Solutions from '../../pages/solutions/page'
import Services from '../../pages/services/page'

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
    </>
  )
}

export default Page