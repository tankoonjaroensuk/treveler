"use client"

import { useState } from "react"
import EmailLink from "./EmailLink"
import PhoneLink from "./PhoneLink"
import GoogleMap from "./GoogleMap"

import SuccessAlert from "./Alert/SuccessAlert"
import ErrorAlert from "./Alert/ErrorAlert"

export default function ContactForm() {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus("success")
        setEmail("")
        setSubject("")
        setMessage("")
      } else {
        setStatus("error")
        setErrorMessage(data.error || "Failed to send message")
      }
    } catch (err: any) {
      console.error(err)
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (

    <section className="py-24">
      <div className="fixed top-5 right-5 z-50">
        {status === "success" && <SuccessAlert message="Message sent successfully!" />}
        {status === "error" && <ErrorAlert message={errorMessage} />}
        {status === "sending" && (
          <div className="p-3 text-sm text-blue-700 bg-blue-100 rounded-lg shadow-md">
            Sending...
          </div>
        )}
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
          {/* Form */}
          <div className="md:mb-0 mb-4">
            <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5">
              Get In Touch With Us
            </h2>
            <p className="text-gray-600 text-md font-normal leading-7 mb-7">
              Enjoy exclusive travel deals and cross-platform perks in partnership with Thailand’s top-rated travel apps and service providers. This is Thailand through a new lens. Real. Local. Unforgettable.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                             dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Let us know how we can help you"
                  required
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm 
                             focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 
                             dark:shadow-sm-light"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a comment..."
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 
                             focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit 
                           hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 
                           dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="border-l-2 md:border-indigo-600 border-white px-10 py-6">
            <div className="mb-4">
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start flex text-center">
                Email Address
              </h6>
              <EmailLink email="jaroensuktankoon@gmail.com">
                jaroensuktankoon@gmail.com
              </EmailLink>
            </div>
            <div className="mb-4">
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start flex text-center">
                Phone Number
              </h6>
              <PhoneLink phone="+0982242536" />
            </div>
            <div className="mb-4">
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start flex text-center">
                Head Office
              </h6>
              <p>39 Soi Boonsri, Phetkasem 48 Road, Intersection 4-3, Bang Duan Subdistrict, Phasi Charoen District, Bangkok 10160, Thailand</p>
            </div>
            <div >
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start flex text-center">
                Follow Us
              </h6>
              <div className="flex -mx-1.5">

                <a className="mx-1.5 dark:hover:text-red-400 text-gray-400 transition-colors duration-300 transform hover:text-red-500" href="https://www.linkedin.com/in/tankoonjaroensuk" target="_blank">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2 8.8C16.4731 8.8 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.8 15.2 8.8Z" />
                    <path d="M7.2 9.6H4V19.2H7.2V9.6Z" />
                    <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" />
                  </svg>
                </a>

                <a className="mx-1.5 dark:hover:text-red-400 text-gray-400 transition-colors duration-300 transform hover:text-red-500" href="https://www.facebook.com/tankoonjaroensuk.3" target="_blank">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" />
                  </svg>
                </a>

                <a className="mx-1.5 dark:hover:text-red-400 text-gray-400 transition-colors duration-300 transform hover:text-red-500" href="https://www.instagram.com/_jjjjjojo_tankxxn" target="_blank">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
        <GoogleMap />


      </div>
    </section>
  )
}
