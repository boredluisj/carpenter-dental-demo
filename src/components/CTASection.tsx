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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Refine Your Smile</span>
          <h2 className="text-6xl md:text-8xl font-heading text-dark mb-10 leading-[1] tracking-tight">
            Clinical Authority. <br/><span className="italic font-light opacity-60 lowercase">Aesthetic Precision.</span>
          </h2>
          <p className="text-xl text-dark/60 mb-16 leading-relaxed max-w-2xl mx-auto font-light">
            Whether you are seeking restorative mastery or an aesthetic transformation, Dr. Anne M. Carpenter provides the clinical authority you deserve. Houston's standard since 2002.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <a 
              href="https://www.zocdoc.com/practice/anne-m-carpenter-dds-17609?referrerType=widget" 
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-14 py-6 bg-primary-500 text-dark font-bold hover:bg-primary-400 transition-all shadow-2xl shadow-primary-900/30 rounded-sm text-lg uppercase tracking-widest"
            >
              Secure via ZocDoc
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </a>
            
            <a 
              href="tel:2814975001"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 px-14 py-6 bg-transparent text-dark font-semibold hover:bg-dark/5 transition-all text-lg border border-dark/10 rounded-sm tracking-widest uppercase"
            >
              <Phone size={20} className="text-primary-600 group-hover:scale-110 transition-transform" />
              (281) 497-5001
            </a>
          </div>

          <div className="mt-12 inline-block border border-primary-500/30 bg-primary-500/5 px-8 py-4 rounded-sm relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface px-4 text-[10px] font-bold tracking-[0.2em] text-primary-600 uppercase">New Patient Special</span>
            <p className="text-dark/80 font-medium tracking-wide">
              Free Take-Home Whitening after initial visit <span className="text-primary-600 px-2">|</span> $50 Off Dental Care
            </p>
          </div>

          <p className="mt-12 text-dark/30 text-[10px] font-bold tracking-[0.3em] uppercase">Private Clinical Excellence • West Houston Destination</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
