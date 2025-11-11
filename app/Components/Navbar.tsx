"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { categories } from "@/app/category/data" 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/Images/TravelerTH.jpg" alt="Traveler Thailand Logo" width={100} height={100} />
        </Link>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
                         bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 
                         md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded-sm md:p-0 transition-colors ${
                  isActive("/") ? "text-red-600" : "text-gray-900 hover:text-red-600 dark:text-white"
                }`}
              >
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm 
                           hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-red-600
                           md:p-0 md:w-auto dark:text-white dark:hover:text-red-600 transition-colors"
              >
                Stay, Eat & Explore
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 z-10 mt-2 w-56 bg-white divide-y divide-gray-100 rounded-lg 
                                shadow-sm dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    {categories.map(cat => (
                      <li key={cat.slug}>
                        <Link
                          href={`/category/${cat.slug}`} 
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 dark:hover:bg-gray-600 dark:hover:text-red-500 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {cat.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/about-us"
                className={`block py-2 px-3 rounded-sm md:p-0 transition-colors ${
                  isActive("/about-us") ? "text-red-600" : "text-gray-900 hover:text-red-600 dark:text-white"
                }`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`block py-2 px-3 rounded-sm md:p-0 transition-colors ${
                  isActive("/contact") ? "text-red-600" : "text-gray-900 hover:text-red-600 dark:text-white"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
