import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{role}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{bio}</p>
        <div className="flex space-x-3">
          <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const team = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      bio: "Alex has over 15 years of experience in business strategy and digital transformation.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Jamie Rivera",
      role: "CTO",
      bio: "Jamie leads our technical team with expertise in emerging technologies and enterprise solutions.",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Taylor Kim",
      role: "Head of Design",
      bio: "Taylor brings creative vision and user-centered design principles to all our projects.",
      image: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Jordan Smith",
      role: "Marketing Director",
      bio: "Jordan specializes in developing comprehensive marketing strategies that drive growth.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our <span className="text-blue-600 dark:text-blue-400">Team</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our talented team of experts is dedicated to delivering exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;