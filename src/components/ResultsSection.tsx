import { motion } from 'framer-motion';

const ResultsSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Clinical Excellence</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
              Expect More Than Just A "Dentist".
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              When you invest in your smile, you're investing in your quality of life. Our board-certified specialists use cutting-edge technology to ensure flawless, permanent results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-dark p-6 rounded-2xl border border-gray-800"
              >
                <div className="text-4xl font-black font-heading text-primary-500 mb-2">99%</div>
                <div className="text-white font-bold mb-1">Success Rate</div>
                <div className="text-sm text-gray-400">Our implant success rate far exceeds the national average.</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-dark p-6 rounded-2xl border border-gray-800"
              >
                <div className="text-4xl font-black font-heading text-primary-500 mb-2">3D</div>
                <div className="text-white font-bold mb-1">CBCT Imaging</div>
                <div className="text-sm text-gray-400">Computer-guided surgery for minimally invasive placement.</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-dark p-6 rounded-2xl border border-gray-800"
              >
                <div className="text-4xl font-black font-heading text-primary-500 mb-2">24h</div>
                <div className="text-white font-bold mb-1">Same-Day Smile</div>
                <div className="text-sm text-gray-400">Leave our clinic with teeth on the very first day.</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-dark p-6 rounded-2xl border border-gray-800"
              >
                <div className="text-4xl font-black font-heading text-primary-500 mb-2">Life</div>
                <div className="text-white font-bold mb-1">Guaranteed</div>
                <div className="text-sm text-gray-400">Comprehensive warranty on titanium posts and zirconia crowns.</div>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern dental clinic" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent flex items-end p-8">
                <div className="bg-surface/80 backdrop-blur-md border border-gray-700 p-6 rounded-2xl text-white">
                  <p className="font-medium text-lg italic mb-2">"It's not just about teeth. It's about confidently eating the foods you love and smiling without hesitation."</p>
                  <p className="text-sm text-primary-400 font-bold">— Dr. Michael Apex, Lead Surgeon</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-600/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-600/30 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
