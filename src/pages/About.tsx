import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Clinical Mastery | Dr. Anne M. Carpenter, DDS</title>
        <meta name="description" content="Discover the legacy of Dr. Anne Carpenter. A Houston native and Rice University alumna with over 20 years of clinical mastery in restorative and aesthetic dentistry." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark text-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-6 block">The Legacy of Excellence</span>
            <h1 className="text-5xl md:text-7xl font-heading mb-8 leading-[1.1]">
              A Houston Native. <br/>A Clinical <span className="italic">Authority.</span>
            </h1>
            <p className="text-xl text-surface/60 font-light leading-relaxed max-w-2xl">
              Dr. Anne M. Carpenter pairs Ivy-league precision with a compassionate, neighborly approach that has defined West Houston's restorative standard for over two decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 border border-dark/5 -z-10 translate-x-8 translate-y-8" />
              <img 
                src="/images/modern-clinic.png" 
                alt="Dr. Carpenter's Houston Practice" 
                className="w-full h-[600px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-heading text-dark mb-8">Restoring More Than Just Smiles.</h2>
              <div className="space-y-6 text-dark/70 text-lg font-light leading-relaxed">
                <p>
                  As a distinguished graduate of <span className="text-dark font-medium">Rice University</span> and the <span className="text-dark font-medium">University of Texas Health Science Center at San Antonio</span>, Dr. Carpenter brings academic rigor to every restoration.
                </p>
                <p>
                  Her clinical focus is centered on the intersection of long-term oral health and refined aesthetics. Her mastery of Lumineers®, porcelain crowns, and complex restorative procedures ensures results that are both durable and indistinguishable from nature.
                </p>
                <p>
                  Since 2002, her private practice in West Houston has remained committed to a single principle: providing an uncompromising level of personalized care in an environment of absolute comfort.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-12 mt-12 pt-12 border-t border-dark/10">
                <div>
                  <div className="text-4xl font-heading text-primary-600 mb-2">20+</div>
                  <div className="text-xs tracking-widest uppercase text-dark/40">Years Mastery</div>
                </div>
                <div>
                  <div className="text-4xl font-heading text-primary-600 mb-2">Rice</div>
                  <div className="text-xs tracking-widest uppercase text-dark/40">University Alum</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Foundations */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l border-dark/5 pl-8"
            >
              <span className="text-primary-600 text-sm font-bold tracking-widest uppercase mb-4 block">Foundations</span>
              <h3 className="text-2xl font-heading text-dark mb-6">Ivy-League Precision</h3>
              <p className="text-dark/60 font-light leading-relaxed">
                Her background at Rice University fuels a clinical approach rooted in analytical precision and obsessive attention to detail throughout the restorative process.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-l border-dark/5 pl-8"
            >
              <span className="text-primary-600 text-sm font-bold tracking-widest uppercase mb-4 block">San Antonio Mastery</span>
              <h3 className="text-2xl font-heading text-dark mb-6">Clinical Authority</h3>
              <p className="text-dark/60 font-light leading-relaxed">
                Training at UTHSC San Antonio provided the surgical and restorative foundation required to manage complex cases with predictable, aesthetic outcomes.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l border-dark/5 pl-8"
            >
              <span className="text-primary-600 text-sm font-bold tracking-widest uppercase mb-4 block">Specialized Care</span>
              <h3 className="text-2xl font-heading text-dark mb-6">Restorative Focus</h3>
              <p className="text-dark/60 font-light leading-relaxed">
                Focusing specifically on restorative and aesthetic mastery allows for a depth of knowledge that generalized practices simply cannot replicate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
