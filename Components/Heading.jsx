import React from 'react'
import Image from 'next/image'
import yellowBox from '../assets/images/svg/box-yellow.svg' 

const Heading = ({heading,para}) => {
  return (
    <>
        <Image src={yellowBox}/>
            <h4 className="text-3xl text-blue uppercase medium-font mb-3 mt-2">
                {heading}
            </h4>
           {para && <p className="text-grey light-font w-3/5 text-center ">
           {para[0]} <br />
           {para[1]}
            </p>}
    </>
  )
}

export default Heading