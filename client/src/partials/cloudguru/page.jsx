/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './home/page'
import Engaging from './engaging/page'
import BuildOrganization from './buildorganization/page'
import Remarks from './remarks/page'
const Page = () => {
  return (
    <div>
        <div>
            <Home/>
        </div>
        <div>
            <Engaging/>
        </div>
        <div>
            <BuildOrganization/>
        </div>
        <div>
            <Remarks/>
        </div>
    </div>
  )
}

export default Page