/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
    const {id} = useParams();

  return (
    <div>
        {id}
    </div>
  )
}

export default Page