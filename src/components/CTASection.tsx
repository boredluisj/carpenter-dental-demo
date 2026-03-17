import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-surface border-t border-dark/5">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.cosmeticdentisthoustontx.com/images/slideshow/houston-dentist12.jpg" 
          alt="Dr. Carpenter's Clinic" 
          className="w-full h-full object-cover object-center opacity-30 blur-[2px] transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Refine Your Smile</span>
          <h2 className="text-5xl md:text-7xl font-heading text-dark mb-8">
            Ready for a New Standard of <span className="text-primary-600 italic">Dental Excellence?</span>
          </h2>
          <p className="text-xl text-dark/70 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Whether you are seeking restorative mastery or an aesthetic transformation, Dr. Anne M. Carpenter provides the clinical authority you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.zocdoc.com/practice/anne-m-carpenter-dds-17609?referrerType=widget" 
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-12 py-5 bg-dark text-surface font-medium hover:bg-primary-600 transition-all shadow-xl hover:-translate-y-1 text-lg"
            >
              Secure ZocDoc Appointment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="tel:2814975001"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-transparent text-dark font-medium hover:bg-dark/5 transition-all text-lg border border-dark/20"
            >
              <Phone size={20} className="text-primary-600" />
              (281) 497-5001
            </a>
          </div>
          <p className="mt-10 text-dark/50 text-sm tracking-wide">Serving the West Houston community since 2002. Clinical excellence prioritized.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
