import React from 'react'

function About() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">About Qorvia</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Qorvia is a platform built to revolutionize event management. Organizers can create and manage 
          both venue-based and online events, while users gain seamless access to live streams, 
          interactive features, and ticket purchasing—all driven by a powerful suite of APIs designed 
          for exceptional digital experiences.
        </p>

        <div className="grid gap-8 mt-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Qorvia strives to empower event organizers with tools to streamline workflows and elevate 
              user engagement. From scheduling events and managing bookings to enabling real-time 
              interactions, the platform delivers a secure, seamless experience through its APIs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Secure user account management and authentication for organizers and attendees</li>
              <li>Event creation, scheduling, and booking operations for venues and online streams</li>
              <li>Real-time communication with live streaming and interactive comment features</li>
              <li>Blog and feedback tools to boost engagement and gather insights</li>
              <li>Timely email and push notifications to keep users informed</li>
              <li>Payment processing with transaction tracking for ticket sales and organizer payouts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Qorvia</h2>
            <p className="text-gray-600">
              Qorvia combines robust functionality with user-friendly design, making it easy to manage 
              events, connect with audiences, and handle transactions—all in one place. The platform’s 
              APIs power everything from live streaming to ticket sales, ensuring a smooth experience 
              for organizers and attendees alike.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About