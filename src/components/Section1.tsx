import React from 'react';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              F|fo
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              AI-powered competitive intelligence and smart automation that
              continuously evolves your digital presence. No guesswork. No tech
              headaches. Just results that compound.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                GET FREE ANALYSIS
              </Link>
              <p className="text-gray-500">Free intelligence report · No commitment</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                Avg. Google Traffic Increase
              </p>
              <p className="text-gray-500">Average Search Position</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                Average Market Position
              </p>
              <p className="text-gray-500">Average Search Position</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;