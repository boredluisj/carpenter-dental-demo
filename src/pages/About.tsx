import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Apex Dental Implants</title>
        <meta name="description" content="Meet the board-certified oral surgeons and dental specialists at Apex Dental Implants. Committed to restoring your smile with precision and care." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">Mastery in Dental Restoration.</h1>
            <p className="text-xl text-gray-400">
              We are a dedicated team of board-certified oral surgeons specializing exclusively in permanent implant solutions. We don't just fix teeth; we restore confidence and quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                alt="Our specialists in action" 
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">A Different Kind of Practice</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Apex Dental Implants was founded on a simple principle: implant dentistry shouldn't be an intimidating, generalized service. It requires absolute specialization. 
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                By focusing solely on surgical implant placement and full-mouth restorations, we've refined our process to be faster, more comfortable, and incredibly precise using 3D CBCT guided surgery. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-black text-primary-600 mb-2">10k+</div>
                  <div className="text-sm font-bold text-dark">Implants Placed</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary-600 mb-2">15+</div>
                  <div className="text-sm font-bold text-dark">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary-600 mb-2">99%</div>
                  <div className="text-sm font-bold text-dark">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Our Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold font-heading text-dark mb-4">Uncompromising Quality</h3>
              <p className="text-gray-600">We exclusively use medical-grade titanium posts and pure zirconia crowns. We do not compromise on the materials that go into your body.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold font-heading text-dark mb-4">Board-Certified Expertise</h3>
              <p className="text-gray-600">Our surgeons undergo rigorous specialized training beyond standard dental school, mastering the complexities of maxillofacial surgery.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold font-heading text-dark mb-4">Patient-Centric Comfort</h3>
              <p className="text-gray-600">From IV sedation options to a spa-like recovery room, every aspect of our clinic is designed to eliminate anxiety and ensure comfort.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Meet Your Surgeons</h2>
            <p className="text-xl text-gray-600">Decades of combined experience dedicated to giving you the perfect smile.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" alt="Dr. Michael Apex" className="w-full h-80 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-dark mb-2">Dr. Michael Apex, DMD</h3>
                <p className="text-primary-600 font-medium mb-4">Lead Oral & Maxillofacial Surgeon</p>
                <p className="text-gray-600">Dual-degree surgeon with over 15 years of experience in complex full-arch rehabilitation.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <img src="https://images.unsplash.com/photo-1594824432258-f77e387c1be2?auto=format&fit=crop&q=80&w=800" alt="Dr. Sarah Chen" className="w-full h-80 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-dark mb-2">Dr. Sarah Chen, DDS</h3>
                <p className="text-primary-600 font-medium mb-4">Prosthodontist</p>
                <p className="text-gray-600">Specializes in the design and fabrication of flawless, natural-looking zirconia restorations.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <img src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=800" alt="Dr. Marcus Johnson" className="w-full h-80 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-dark mb-2">Dr. Marcus Johnson, MD</h3>
                <p className="text-primary-600 font-medium mb-4">Anesthesiologist</p>
                <p className="text-gray-600">Ensures patient safety and absolute comfort through monitored IV sedation protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
