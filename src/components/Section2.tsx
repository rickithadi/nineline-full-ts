import React from 'react';
import { Link } from 'react-router-dom';

const Section2 = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why Websites Fail & How We Fix It
            </h3>
            <p className="mt-4 text-gray-600">
              The hidden problems killing your online success
            </p>
            <div className="mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/placeholder.jpg"
              alt="Placeholder Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;