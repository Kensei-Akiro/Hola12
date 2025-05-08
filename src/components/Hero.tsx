import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 lg:pt-24">
      {/* Background decorative element */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80 blur-3xl">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              <span className="block">Transform Your</span>
              <span className="text-blue-600 dark:text-blue-400">Business</span>
              <span className="block">With Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              We help ambitious companies like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative w-full h-full">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-1">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaborating" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;