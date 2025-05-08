import React from 'react';
import { Lightbulb, LineChart, Shield, Users } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center md:items-start text-center md:text-left">
      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-5 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovative Solutions',
      description: 'We develop cutting-edge solutions tailored to your specific business needs and challenges.'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Data-Driven Approach',
      description: 'Our strategies are based on comprehensive data analysis to ensure measurable and sustainable results.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure & Reliable',
      description: 'We prioritize security in all our services, ensuring your data and operations remain protected.'
    },
    {
      icon: <Users size={24} />,
      title: 'Expert Team',
      description: 'Our team of experienced professionals brings diverse expertise to tackle complex business problems.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-blue-600 dark:text-blue-400">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We provide comprehensive solutions designed to meet your business goals and drive exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;