"use client"

import React from "react"

export default function GoogleMap() {
    return (
        <div className="relative h-0 overflow-hidden mb-6" style={{ paddingBottom: "56.25%" }}>
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.426028611698!2d100.4418875096883!3d13.721088034959207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2982134802351%3A0xa38fe2e25aaf564a!2s39%20Phet%20Kasem%2048%20Alley%2C%20Lane%204-3%2C%20Khwaeng%20Bang%20Duan%2C%20Khet%20Phasi%20Charoen%2C%20Krung%20Thep%20Maha%20Nakhon%2010160!5e0!3m2!1sen!2sth!4v1762920834354!5m2!1sen!2sth"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden="false"
                tabIndex={0}
            ></iframe>
        </div>
    )
}
