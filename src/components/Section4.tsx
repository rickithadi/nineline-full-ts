import React from 'react';
import { Link } from 'react-router-dom';

const ComponentName = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mobile-Broken = Business-Broken
            </h4>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8">
              60% of visitors use mobile. Poor mobile design kills conversions. We build mobile-first.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Sign Up
              <svg
                className="-mr-1 ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="hidden lg:block">
            <img
              src="/images/mobile-device.jpg"
              alt="Mobile Device"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentName;