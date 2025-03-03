import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 shadow bg-purple border border-b border-gray-800 z-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-lightWhite">
                  &copy; Copyright 2024. All Rights Reserved by Express Echo.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-lightWhite">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-lightWhite">
                Support
              </h3>
              <ul>
                {/* <li className="mb-4">
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/"
                  >
                    Account
                  </Link>
                </li> */}
                {/* <li className="mb-4">
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/"
                  >
                    Help
                  </Link>
                </li> */}
                <li className="mb-4">
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/about-me"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/about-me"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-lightWhite">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/terms-and-conditions"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium duration-200 hover:text-blue-600 text-white"
                    to="/licensing"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
