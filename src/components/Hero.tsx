import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80"
          className="w-full h-full object-cover object-center opacity-70"
        >
          {/* Relaxing spa/water/wellness video from Pexels */}
          <source src="https://videos.pexels.com/video-files/4490548/4490548-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-transparent z-10" />
        {/* Soft Teal Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-900/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-800/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 text-sm font-medium mb-8 backdrop-blur-md shadow-2xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              West Houston's Trusted Authority since 2002
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight"
            >
              The New Standard in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-white italic">Dental Restoration.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-light"
            >
              Mastering the intersection of clinical excellence and aesthetic prestige. Dr. Anne M. Carpenter provides Houston's most discerning patients with transformative care—from advanced general dentistry to high-end cosmetic makeovers.
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
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-all shadow-lg hover:shadow-primary-600/25 text-lg"
              >
                Secure Appointment on ZocDoc
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 border border-white/10 transition-all backdrop-blur-md text-lg"
              >
                View Services
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-8 text-sm text-gray-300 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-400" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-400" />
                <span>IV Sedation Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-400" />
                <span>Board-Certified Surgeons</span>
              </div>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
