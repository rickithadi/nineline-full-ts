import React from 'react';
import { Link } from 'react-router-dom';

const Section3 = ({ heading, paragraph1, paragraph2, ctaLabel, ctaUrl }) => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h4>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8">
            {paragraph1}
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-12">
            {paragraph2}
          </p>
          <Link
            to={ctaUrl}
            className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section3;