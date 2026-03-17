import { motion } from 'framer-motion';

const ResultsSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <span className="text-primary-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Aesthetic Authority</span>
            <h2 className="text-5xl md:text-6xl font-bold font-heading text-dark mb-8 leading-[1.1]">
              Clinical Mastery. <br/><span className="italic font-light opacity-60 lowercase">Personalized Results.</span>
            </h2>
            <p className="text-lg text-dark/60 mb-12 leading-relaxed font-light max-w-xl">
              Since 2002, Dr. Anne Carpenter has redefined the standard of cosmetic dentistry in Houston. Our patient-first methodology combines two decades of clinical experience with the most advanced aesthetic materials available.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-surface p-10 border border-dark/5 relative group hover:border-primary-500/20 transition-all"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary-500/5 group-hover:bg-primary-500/10 transition-colors" />
                <div className="text-5xl font-bold font-heading text-dark mb-3">20+</div>
                <div className="text-dark/40 font-bold mb-2 uppercase tracking-[0.2em] text-[9px]">Years of Legacy</div>
                <div className="text-[11px] text-dark/30 uppercase tracking-widest leading-relaxed">Trusted by Houston families for over two decades.</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-surface p-10 border border-dark/5 relative group hover:border-primary-500/20 transition-all"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary-500/5 group-hover:bg-primary-500/10 transition-colors" />
                <div className="text-5xl font-bold font-heading text-dark mb-3 text-primary-600">Lumineers®</div>
                <div className="text-dark/40 font-bold mb-2 uppercase tracking-[0.2em] text-[9px]">Authorized Provider</div>
                <div className="text-[11px] text-dark/30 uppercase tracking-widest leading-relaxed">Specialized certification in non-invasive veneers.</div>
              </motion.div>
            </div>
          </div>
 
          <div className="lg:w-1/2 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden group border border-dark/5 shadow-2xl"
            >
              <div className="absolute -inset-4 border border-primary-500/5 -z-10 translate-x-4 translate-y-4" />
              <img 
                src="/images/modern-clinic.png" 
                alt="Dr. Carpenter's Luxury Houston Clinic" 
                className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent flex items-end p-12 lg:p-16">
                <div className="text-surface">
                  <p className="font-heading text-3xl italic mb-10 leading-relaxed font-light">"My philosophy is simple: restore health with absolute aesthetic precision. Your smile is the anchor of your confidence."</p>
                  <p className="text-[10px] tracking-[0.4em] font-semibold text-primary-500 uppercase flex items-center gap-4">
                    <span className="w-8 h-px bg-primary-500/30" />
                    Dr. Anne M. Carpenter, DDS
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
