"use client"

import Image from "next/image"
import EmailLink from "./EmailLink"
import PhoneLink from "./PhoneLink"

export default function ContactFrom() {
  
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
          <div className="md:mb-0 mb-4">
            <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5 ">
              Get In Touch With Us
            </h2>
            <p className="text-gray-600 text-lg font-normal leading-7 mb-7">
              Enjoy exclusive travel deals and cross-platform perks in partnership with Thailand’s top-rated travel apps and service providers. This is Thailand through a new lens. Real. Local. Unforgettable.
            </p>
            <div className="flex md:items-start md:justify-start">
              <button className="w-36 h-12 rounded-full bg-indigo-600 transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6">
                Contact Us
              </button>
            </div>
          </div>

          <div className="border-l-2 md:border-indigo-600 border-white px-10 py-6">
            <div className="mb-8">
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start flex text-center">
                Email Address
              </h6>
              <EmailLink email="info@travelerthailand.com">
                info@travelerthailand.com
              </EmailLink>
            </div>
            <div>
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start flex text-center">
                Phone Number
              </h6>
                 <PhoneLink phone="+66022867561"></PhoneLink>
            </div>
            
          </div>
        </div>

        <div
      className="relative h-0 overflow-hidden mb-6"
      style={{ paddingBottom: "56.25%" }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.8224058420096!2d100.534436!3d13.7226665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102959cd9067f47%3A0x599dec734ecd1838!2sAX%20GROUP!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>


      </div>
    </section>
  )
}
