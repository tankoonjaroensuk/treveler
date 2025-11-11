"use client"

import React from "react"

export default function GoogleMap() {
    return (
        <div className="relative h-0 overflow-hidden mb-6" style={{ paddingBottom: "56.25%" }}>
            <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.8224058420096!2d100.534436!3d13.7226665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102959cd9067f47%3A0x599dec734ecd1838!2sAX%20GROUP!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
            ></iframe>
        </div>
    )
}
