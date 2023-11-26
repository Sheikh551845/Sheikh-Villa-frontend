import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";

export default function Location() {
  return (
    <div>
    <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6 ">
        <div className="flex md:flex-row-reverse flex-col-reverse gap-6 items-center justify-center">
            <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
                <div className="flex flex-col items-center justify-center">
                    <div className="mt-7 flex flex-col items-center">
                        <div className="w-20 h-20 bg-black opacity-80 shadow rounded-full flex items-center justify-center text-white text-4xl" role="img" aria-label="bright ideas">
                            <FaMapLocationDot></FaMapLocationDot>
                        </div>
                        <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">Plot 9, Road 69 Gulshan North Ave, Dhaka 1212, Bangladesh </p>
                    </div>
                </div>
            </div>
            <div className="py-12 xl:w-1/2 lg:w-1/4 sm:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4256431480367!2d90.40770777533757!3d23.803458778634244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b4eede086d%3A0xb0bd0008837887be!2sShanta%20Northern%20Lights!5e0!3m2!1sen!2sbd!4v1700967577210!5m2!1sen!2sbd" className="h-80 w-80 border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4256431480367!2d90.40770777533757!3d23.803458778634244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b4eede086d%3A0xb0bd0008837887be!2sShanta%20Northern%20Lights!5e0!3m2!1sen!2sbd!4v1700967577210!5m2!1sen!2sbd" className="h-80 w-80 border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</div>
  )
}
