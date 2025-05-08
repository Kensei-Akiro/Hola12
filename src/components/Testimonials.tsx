import React from 'react';
import { Star } from 'lucide-react';

type TestimonialProps = {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
};

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, avatar, rating }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? '#F59E0B' : 'none'}
            className={i < rating ? 'text-amber-500' : 'text-gray-300 dark:text-gray-600'}
          />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{content}</p>
      <div className="flex items-center">
        <img
          src={avatar}
          alt={author}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Working with this team transformed our business. Their innovative approach and attention to detail exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 5
    },
    {
      content: "Their data-driven strategy helped us increase our conversion rates by 43% in just three months. Incredible results!",
      author: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 5
    },
    {
      content: "The team delivered exactly what we needed on time and within budget. Their communication throughout the project was excellent.",
      author: "Priya Patel",
      role: "Product Manager, InnovateX",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-blue-600 dark:text-blue-400">Clients</span> Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We've helped businesses of all sizes achieve their goals. Here's what some of them have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;