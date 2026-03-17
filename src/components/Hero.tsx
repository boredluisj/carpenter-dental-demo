import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLuxuryClick } from '../hooks/useLuxuryClick';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playClick = useLuxuryClick();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background Gradients & Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-dark/5 to-dark/20 pointer-events-none" />
      
      {/* Animated Spotlight */}
      <div className="absolute -top-[20%] -left-[10%] w-[100%] h-[100%] bg-primary-600/10 blur-[120px] rounded-full opacity-50 animate-spotlight pointer-events-none" />

      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-7xl mx-auto px-6 w-full relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface/5 border border-surface/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-surface/60 text-[10px] uppercase tracking-[0.2em] font-medium"> Clinical Mastery Since 2002 </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading text-surface mb-10 leading-[1] tracking-tight">
              Clinical Artistry. <br/>
              <span className="text-primary-400 italic font-light lowercase">Enduring Results.</span>
            </h1>
            
            <p className="text-xl text-surface/70 font-light leading-relaxed mb-12 max-w-xl">
              Dr. Anne M. Carpenter combines two decades of clinical mastery with aesthetic precision to rebuild not just smiles, but confidence. Houston's destination for elite restorative dentistry.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="https://www.zocdoc.com/practice/anne-m-carpenter-dds-17609?referrerType=widget" 
                target="_blank"
                rel="noopener noreferrer"
                onMouseDown={playClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary-500 text-dark font-semibold hover:bg-primary-400 transition-all shadow-2xl shadow-primary-900/40 rounded-sm active:scale-95"
              >
                Book via ZocDoc
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/services" 
                onMouseDown={playClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-transparent text-surface border border-surface/30 hover:bg-surface/10 transition-all rounded-sm font-medium active:scale-95"
              >
                Clinical Procedures
              </Link>
            </div>

            <div className="mt-20 flex flex-wrap gap-10">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-surface/40 font-medium">
                <CheckCircle2 size={14} className="text-primary-500" /> Advanced Restoration
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-surface/40 font-medium">
                <CheckCircle2 size={14} className="text-primary-500" /> IV Sedation Safety
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 border border-primary-600/20 translate-x-4 translate-y-4 -z-10" />
            <div className="relative overflow-hidden aspect-[4/5] lg:aspect-square">
                <img 
                    src="/images/modern-clinic.png" 
                    alt="Dr. Carpenter Clinical Suite" 
                    className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
