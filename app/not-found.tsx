"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-center text-white"
      style={{
        backgroundImage: "url('/Images/Banner/DSC_6954.jpg')", 
      }}
    >
      <div className="bg-black/50 p-8 rounded-2xl backdrop-blur-sm">
        <h1 className="text-6xl font-extrabold mb-3 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-200 mb-8 max-w-md">
          Looks like you’ve taken a wrong turn. Don’t worry — let’s get you back on track.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-md font-medium shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
