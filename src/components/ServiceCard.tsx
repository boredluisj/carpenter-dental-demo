import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-lg">
          {icon}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold font-heading text-dark mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors mt-auto group/link"
        >
          Learn more
          <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
