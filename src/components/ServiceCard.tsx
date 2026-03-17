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
      className="group relative bg-white border border-dark/10 flex flex-col h-full hover:border-primary-600/30 transition-all duration-500"
    >
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-dark/5 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 hover:grayscale-0 hover:scale-110"
        />
        <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-surface text-dark border border-dark/10 flex items-center justify-center shadow-sm">
          {icon}
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-3xl font-heading text-dark mb-4">{title}</h3>
        <p className="text-dark/70 leading-relaxed mb-10 flex-grow font-light">
          {description}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center gap-3 text-dark font-medium border-b border-dark/20 pb-1 w-fit group/link hover:border-primary-600 hover:text-primary-600 transition-all"
        >
          Explore Procedure
          <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
