'use client'

import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/app/category/data'

export default function Category() {
  const gridCategories = [
    { slug: 'food-beverage', span: 'row-span-2' },
    { slug: 'wellness-spa', span: 'col-span-3 row-span-2' },
    { slug: 'accommodation', span: 'row-span-2 col-start-5' },
    { slug: 'healthcare-beauty', span: 'col-span-2 row-span-2 row-start-3' },
    { slug: 'car-bike-rental', span: 'row-span-2 col-start-3 row-start-3' },
    { slug: 'shopping', span: 'col-span-2 row-span-2 col-start-4 row-start-3' },
    { slug: 'properties', span: 'col-span-2 row-start-5' },
    { slug: 'worth-seeing', span: 'col-start-4 row-start-5' },
    { slug: 'education', span: 'col-start-3 row-start-5' },
    { slug: 'professional-services', span: 'col-start-5 row-start-5' },
  ]

  return (
    <div className="mx-auto max-w-1xl lg:max-w-7xl lg:px-8">
      <div className="text-center my-10">
        <p className="mt-2 text-lg/8 text-gray-600">Destination lists</p>
        <h2 className="text-6xl font-semibold tracking-tight text-red-600 sm:text-5xl">
          Stay , Eat & Explore
        </h2>
      </div>

      <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[900px]">
        {gridCategories.map((gc) => {
          const category = categories.find((c) => c.slug === gc.slug)
          if (!category) return null
          return (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className={`${gc.span} relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all" />
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg">
                {category.title}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
