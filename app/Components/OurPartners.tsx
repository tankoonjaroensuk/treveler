"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function OurPartners() {
  const logos = [
    { name: "Transistor", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" ,href: "/"},
    { name: "Reform", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" },
    { name: "Tuple", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" },
    { name: "SavvyCal", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" },
    { name: "Statamic", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" },
    { name: "Laravel", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-gray-900.svg" },
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemWidthRef = useRef<number>(0)
  const indexRef = useRef(0)
  const intervalRef = useRef<number | null>(null)
  const isInteracting = useRef(false)

  const measureWidths = () => {
    const container = containerRef.current
    if (!container) return
    const items = Array.from(container.children) as HTMLElement[]
    if (items.length >= 2) {
      const w = Math.abs(items[1].offsetLeft - items[0].offsetLeft)
      itemWidthRef.current = Math.round(w)
    } else if (items.length === 1) {
      itemWidthRef.current = Math.round(items[0].offsetWidth)
    } else {
      itemWidthRef.current = 160 
    }
  }

  useEffect(() => {
    measureWidths()
    const onResize = () => {
      measureWidths()
      const container = containerRef.current
      if (!container) return
      const idx = indexRef.current
      container.scrollTo({ left: idx * itemWidthRef.current, behavior: "auto" })
    }
    window.addEventListener("resize", onResize)

    const startInterval = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
      intervalRef.current = window.setInterval(() => {
        if (isInteracting.current) return 
        const container = containerRef.current
        if (!container) return
        indexRef.current = (indexRef.current + 1) % logos.length
        const target = Math.round(indexRef.current * itemWidthRef.current)

        if (indexRef.current === 0) {
          container.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          container.scrollTo({ left: target, behavior: "smooth" })
        }
      }, 5000)
    }

    startInterval()
    return () => {
      window.removeEventListener("resize", onResize)
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [logos.length])

  const onUserInteractStart = () => {
    isInteracting.current = true
  }
  const onUserInteractEnd = () => {
    isInteracting.current = false
  }

  const dragState = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
  })

  const handleMouseDown = (e: React.MouseEvent) => {
    onUserInteractStart()
    dragState.current.active = true
    dragState.current.startX = e.pageX - (containerRef.current?.offsetLeft || 0)
    dragState.current.scrollLeft = containerRef.current?.scrollLeft || 0
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragState.current.active) return
    e.preventDefault()
    const x = e.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - dragState.current.startX) * 1.5
    if (containerRef.current) containerRef.current.scrollLeft = dragState.current.scrollLeft - walk
  }
  const handleMouseUpOrLeave = () => {
    if (!dragState.current.active) return
    dragState.current.active = false
    const container = containerRef.current
    if (!container) {
      onUserInteractEnd()
      return
    }
    const newIndex = Math.round(container.scrollLeft / Math.max(1, itemWidthRef.current))
    indexRef.current = Math.min(Math.max(newIndex, 0), logos.length - 1)
    container.scrollTo({ left: indexRef.current * itemWidthRef.current, behavior: "smooth" })
    setTimeout(() => onUserInteractEnd(), 300)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    onUserInteractStart()
    const touch = e.touches[0]
    dragState.current.active = true
    dragState.current.startX = touch.pageX - (containerRef.current?.offsetLeft || 0)
    dragState.current.scrollLeft = containerRef.current?.scrollLeft || 0
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragState.current.active) return
    const touch = e.touches[0]
    const x = touch.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - dragState.current.startX) * 1.5
    if (containerRef.current) containerRef.current.scrollLeft = dragState.current.scrollLeft - walk
  }
  const handleTouchEnd = () => {
    handleMouseUpOrLeave()
  }

  return (
    <section className="bg-red py-24 sm:py-32 select-none">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900 mb-10">
          Our Partner
        </h2>

        <div
          ref={containerRef}
          className="flex gap-12 overflow-x-scroll scroll-smooth cursor-grab active:cursor-grabbing hide-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
         {logos.map((logo, i) => (
  <div key={i} className="flex-shrink-0 flex justify-center items-center w-[180px] h-24">
    {logo.href ? (
      <Link href={logo.href} className="block">
        <Image
          src={logo.src}
          alt={logo.name}
          width={158}
          height={48}
          className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
          unoptimized
        />
      </Link>
    ) : (
      <Image
        src={logo.src}
        alt={logo.name}
        width={158}
        height={48}
        className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
        unoptimized
      />
    )}
  </div>
))}

        </div>
      </div>
    </section>
  )
}
