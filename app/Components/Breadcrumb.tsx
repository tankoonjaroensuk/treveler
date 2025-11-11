'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PATH_NAME_MAPPING: Record<string, string> = {
 '/': 'Home',
  '/food-beverage': 'Food & Beverage',
  '/wellness-spa': 'Wellness & Spa',
  '/accommodation': 'Accommodation',
  '/healthcare-beauty': 'Healthcare & Beauty',
  '/car-bike-rental': 'Car & Bike Rental',
  '/shopping': 'Shopping',
  '/properties': 'Properties',
  '/worth-seeing': 'Worth Seeing', 
  '/education': 'Education',
  '/professional-services': 'Professional Services',
  '/about-us': 'About Us',
  '/contact': 'Contact',
  '/privacy-policy': 'Privacy Policy',
  '/our-partner': 'Our Partner',

}

const Breadcrumb = () => {
  const pathname = usePathname() || '/'
  const pathSegments = pathname.split('/').filter(Boolean)

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  ...pathSegments.map((segment, idx) => {
    const href = '/' + pathSegments.slice(0, idx + 1).join('/')

    const name =
      href === '/category'
        ? 'Stay, Eat & Explore'
        : PATH_NAME_MAPPING[href] ||
          segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

    return { name, href }
  }),
]

  return (
    <nav
      className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 relative z-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
      aria-label="Breadcrumb"
    >
      {breadcrumbItems.map((item, idx) => {
        const isLast = idx === breadcrumbItems.length - 1
        return (
          <span key={idx} className="flex items-center">
            {!isLast ? (
              <>
                <Link
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-white transition-colors duration-150"
                >
                  {item.name}
                </Link>
                <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
              </>
            ) : (
              <span className="text-red-600 font-semibold dark:text-red-400">{item.name}</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
