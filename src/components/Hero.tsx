import React from 'react';
import { Link } from 'react-router-dom';

// Component props interface
interface HeroProps {
  heading: string;
  subheading: string;
  cta: { label: string; href: string }[];
  backgroundImage: string;
  fullText: string;
}

const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  cta,
  backgroundImage,
  fullText,
}) => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-32 px-4 md:px-8 lg:px-16 gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {heading}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mt-4 mb-8">
            {subheading}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            {cta.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <p className="text-gray-200 font-medium">{fullText}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;