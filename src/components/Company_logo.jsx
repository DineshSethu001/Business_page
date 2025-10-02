import React from 'react'

import amazon from '../assets/amazon.png'
import slack from '../assets/slack.png'
import sitepoint from '../assets/sitepoint.png'
import meundies from '../assets/meundies.png'
import woocommerce from '../assets/woocommerce.png'

const Company_logo = () => {
    const logos = [amazon, slack, sitepoint, meundies, woocommerce]
  return (
    <div className='w-full overflow-hidden container mx-auto py-20 flex gap-8 sm:flex-row flex-col sm:items-center items-start'>
        <div className="w-[300px] shrink-0 text-gray-600 px-5 border-l-4 z-10 border-blue-500 bg-white sm:text-base text-xl font-semibold text-left">Proud Partner at <br/> Hubspot and Segment </div>

        <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo,index)=>(
                <img key={index} src={logo} className='mx-12 h-8 w-36 grayscale object-contain opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' alt="company logo"/>
            ))}

              {logos.map((logo,index)=>(
                <img key={`duplicate-${index}`} src={logo} className=' mx-12 h-8 w-36 grayscale object-contain opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' alt="company logo"/>
            ))}
        </div>
    </div>
  )
}

export default Company_logo