import React from 'react';
import { Link } from 'react-router-dom';

const ComponentName = ({
  id,
  headings,
  paragraphs,
  images,
  buttons,
  html,
  availableImages,
}: ComponentNameProps) => {
  return (
    <section
      id={id}
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div>
            {headings.map((heading, index) => (
              <h4
                key={index}
                className="text-2xl font-bold text-gray-900 sm:text-3xl"
              >
                {heading.text}
              </h4>
            ))}
            <div className="mt-6 space-y-6 text-gray-500">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  to={button.href}
                  className="inline-flex items-center rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:order-first">
            {/* Implement responsive image grid */}
            {/* Use available images from the provided data */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentName;