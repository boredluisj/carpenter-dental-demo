import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-surface">
      {/* Background Image with Elegant Wash */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/modern-clinic.png"
          alt="Dr. Carpenter's Clinic Interior"
          className="w-full h-full object-cover object-center opacity-40 blur-[2px] transition-transform duration-[20s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-dark/10 text-dark/70 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              West Houston's Premier Clinical Standard Since 2002
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl font-heading text-dark mb-8 leading-[1.05] tracking-tight"
            >
              The New Era of <br />
              <span className="text-primary-600 italic">Dental Artistry.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-dark/70 max-w-xl mb-12 leading-relaxed font-light"
            >
              Where clinical rigor meets aesthetic refinement. Dr. Anne M. Carpenter defines the Houston standard for transformative restorative care and luxury cosmetic dentistry.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a 
                href="https://www.zocdoc.com/practice/anne-m-carpenter-dds-17609?referrerType=widget" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-12 py-5 rounded-full bg-dark text-surface font-medium hover:bg-primary-600 transition-all shadow-xl hover:-translate-y-1 text-lg"
              >
                Secure Appointment on ZocDoc
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 rounded-full bg-transparent text-dark font-medium hover:bg-dark/5 border border-dark/20 transition-all text-lg"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-8 text-sm text-dark/60 pt-8 border-t border-dark/10"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-600" />
                <span>Advanced Restoration Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-600" />
                <span>IV Sedation Safety Protocol</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-600" />
                <span>Clinical Precision Guarantee</span>
              </div>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
