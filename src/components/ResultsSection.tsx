import { motion } from 'framer-motion';

const ResultsSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Aesthetic Authority</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
              Clinical Mastery. <br/>Personalized Results.
            </h2>
            <p className="text-lg text-dark/60 mb-8 leading-relaxed font-light">
              Since 2002, Dr. Anne Carpenter has redefined the standard of cosmetic dentistry in Houston. Our patient-first methodology combines two decades of clinical experience with the most advanced aesthetic materials available.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 border border-dark/5 relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-600" />
                <div className="text-4xl font-black font-heading text-dark mb-2">20+</div>
                <div className="text-dark font-bold mb-1 uppercase tracking-widest text-xs">Years of Legacy</div>
                <div className="text-xs text-dark/40 uppercase tracking-wider">Trusted by Houston families for over two decades.</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 border border-dark/5 relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-600" />
                <div className="text-4xl font-black font-heading text-dark mb-2">Authorized</div>
                <div className="text-dark font-bold mb-1 uppercase tracking-widest text-xs">Lumineers® Provider</div>
                <div className="text-xs text-dark/40 uppercase tracking-wider">Specialized certification in non-invasive veneers.</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 border border-dark/5 relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-600" />
                <div className="text-4xl font-black font-heading text-dark mb-2">Native</div>
                <div className="text-dark font-bold mb-1 uppercase tracking-widest text-xs">Houston Roots</div>
                <div className="text-xs text-dark/40 uppercase tracking-wider">Educated and practicing in the heart of Texas.</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 border border-dark/5 relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-600" />
                <div className="text-4xl font-black font-heading text-dark mb-2">Bespoke</div>
                <div className="text-dark font-bold mb-1 uppercase tracking-widest text-xs">Clinical Design</div>
                <div className="text-xs text-dark/40 uppercase tracking-wider">Every procedure is architected for your unique anatomy.</div>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden group border border-dark/10"
            >
              <div className="absolute -inset-4 border border-dark/5 -z-10 translate-x-3 translate-y-3" />
              <img 
                src="/images/modern-clinic.png" 
                alt="Dr. Carpenter's Luxury Houston Clinic" 
                className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent flex items-end p-12">
                <div className="text-white">
                  <p className="font-heading text-2xl italic mb-6 leading-relaxed">"My philosophy is simple: restore health with absolute aesthetic precision. Your smile is the anchor of your confidence."</p>
                  <p className="text-xs tracking-[0.3em] font-bold text-primary-400 uppercase">— Dr. Anne M. Carpenter, DDS</p>
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
