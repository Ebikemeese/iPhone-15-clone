import React from 'react'
import { footerLinks } from '../constants'
import { FaEnvelope } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa' 

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-8'>
        <div className="screen-max-width">
            <div>
                <p className='font-semibold text-gray text-xs'>
                    More ways to shop: {' '}
                <span className="underline text-blue">
                    Find an Apple Store 
                </span>{' '}
                    or {' '}
                <span className="underline text-blue">
                    other retailer 
                </span>{' '}
                    near you.
                </p>

                <p className='font-semibold text-gray text-xs'>
                    Or call +(234) 5678 910 2345
                </p>
            </div>

            <div className="bg-neutral-700 my-5 h-[1px] w-full">
                <div className="flex flex-row justify-between">
                    <p className="font-semibold my-5 text-gray text-xs">
                        Developed by Ebikeme Ese
                    </p>

                    <p className="text-2xl my-4 gap-4 flex flex-row">
                        <a className='cursor-pointer' href="mailto:ebikemeese@gmail.com?subject=iPhone-15-Clone" target='_blank'>
                            <FaEnvelope />
                        </a>

                        <a className='cursor-pointer' href="https://wa.me/2348123208257" target='_blank'>
                            <FaWhatsapp />
                        </a>
                    </p>
                </div>

            </div>
        </div>
        
    </footer>
  )
}

export default Footer