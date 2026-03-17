import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1598256989800-fea5f6170560?auto=format&fit=crop&q=80&w=2600" 
          alt="Dental clinic background" 
          className="w-full h-full object-cover object-center opacity-20 transform scale-105"
        />
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-4 block">Take The First Step</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            Ready to Reclaim <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Your Smile?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Schedule your comprehensive 3D evaluation today. Find out if you're a candidate for our life-changing permanent implant procedures.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-all shadow-[0_0_20px_rgba(210,171,101,0.3)] hover:shadow-primary-500/50 text-lg hover:scale-105"
            >
              Book Free Consultation
              <ArrowRight size={20} />
            </Link>
            
              <a 
                href="tel:2814975001"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-surface/10 text-white font-medium hover:bg-surface/20 transition-all backdrop-blur-md text-lg border border-white/10"
              >
                <Phone size={20} className="text-primary-400" />
                (281) 497-5001
              </a>
          </div>
          <p className="mt-8 text-gray-400 text-sm">Flexible financing options available. We work with most major insurance plans.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
