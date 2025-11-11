'use client'

import Image from 'next/image'

export default function DiscoverSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40">
        <div className="relative isolate overflow-hidden hover:shadow-2xl rounded-3xl grid grid-cols-1 lg:grid-cols-2 min-h-[650px] lg:min-h-[700px]">

          <div className="relative h-80 sm:h-96 lg:h-auto order-1 lg:order-1">
            <Image
              src="/Images/Etc/DSC_9328.jpg"
              alt="Discover Thailand"
              fill
              className="object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
              priority
            />
            <div className="absolute inset-0 bg-black/40 lg:rounded-l-3xl rounded-t-3xl" />
          </div>

          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-16 sm:py-20 flex flex-col order-2 lg:order-2  lg:text-left">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 h-[512px] w-[512px] -translate-x-1/2 -translate-y-1/2 opacity-40"
            >
              <circle
                r="512"
                cx="512"
                cy="512"
                fill="url(#gradient)"
                fillOpacity="0.7"
              />

            </svg>

            <h2 className="text-4xl sm:text-5xl text-black font-semibold tracking-tight leading-tight">
              Discover Thailand
            </h2>

            <p className="mt-8 text-md text-gray-700 max-w-xl mx-auto lg:mx-0">
              From the turquoise waters of the Andaman Sea to the golden temples of Chiang Mai — Thailand is a journey of sights, sounds, and flavors that captivate the soul.
              Experience the warmth of the people and the richness of the culture waiting to be discovered.
            </p>

            <div className="mt-8 text-md font-bold max-w-xl lg:mx-0 flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-bold text-red-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="ms-3">Enjoy world-class diving, sunsets, and beach bars</span>

            </div>
            <div className="mt-8 text-md font-bold max-w-xl lg:mx-0 flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-bold text-red-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="ms-3">Experience jungle ziplines and bamboo rafting in the North
              </span>
            </div>

            <div className="mt-8 text-md font-bold max-w-xl lg:mx-0 flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-bold text-red-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="ms-3">Shop, dine, and explore urban Thai culture
              </span>
            </div>

            <div className="mt-12 flex justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all"
              >
                Discover now!
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
