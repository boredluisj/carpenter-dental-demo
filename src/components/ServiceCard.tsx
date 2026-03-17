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
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image, link, className = "", delay = 0 }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden bg-surface/40 backdrop-blur-sm border border-dark/5 flex flex-col hover:border-primary-500/20 transition-all duration-700 ${className}`}
    >
      {/* Spotlight Effect - Updated to Gold Blush */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(197, 141, 65, 0.05), transparent 40%)`,
        }}
      />

      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-dark/10 transition-colors z-10 group-hover:bg-transparent" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-surface/90 text-primary-600 border border-dark/5 flex items-center justify-center shadow-sm backdrop-blur-md">
          {icon}
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-grow relative z-20">
        <h3 className="text-2xl font-heading text-dark mb-4 group-hover:text-primary-600 transition-colors">{title}</h3>
        <p className="text-dark/60 text-sm leading-relaxed mb-10 flex-grow font-light">
          {description}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center gap-3 text-dark/40 text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-dark/10 pb-2 w-fit group/link hover:border-primary-500 hover:text-primary-600 transition-all"
        >
          Explore Procedure
          <ArrowRight size={14} className="transform group-hover/link:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
