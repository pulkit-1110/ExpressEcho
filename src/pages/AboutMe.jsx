import React from 'react'
import conf from '../conf/conf'

function AboutMe() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> Pulkit Uppal
        </p>
        <p>
          <strong>Phone:</strong> {conf.phoneNumber}
        </p>
        <p>
          <strong>Address:</strong> {conf.address}
        </p>
      </div>
    </div>
  )
}

export default AboutMe
