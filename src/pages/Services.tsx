import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Restorative Mastery | Dr. Anne M. Carpenter, DDS</title>
        <meta name="description" content="Explore a new standard of dental excellence. specialized Lumineers®, restorative crowns, and comprehensive clinical care in West Houston." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark text-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-6 block">Clinical Catalog</span>
            <h1 className="text-5xl md:text-7xl font-heading mb-8">Restorative Mastery. <br/><span className="italic">Aesthetic Precision.</span></h1>
            <p className="text-xl text-surface/60 font-light leading-relaxed max-w-2xl">
              From foundational restorative care to transformative aesthetic mastery, every procedure is executed with an uncompromising commitment to clinical authority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service 1: Restorative Mastery */}
      <section id="restorative" className="py-32 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-6 block">Clinical Pillar I</span>
              <h2 className="text-4xl md:text-5xl font-heading text-dark mb-8">Restorative Mastery</h2>
              <p className="text-dark/70 mb-8 leading-relaxed text-lg font-light">
                We specialize in restoring the structural integrity and natural aesthetics of your smile. Using advanced ceramics and precise clinical protocols, our restorative solutions are designed for lifelong durability.
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={14} className="text-primary-600" />
                  </div>
                  <div className="text-dark/80 font-medium">Precision Porcelain Crowns & Bridges</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={14} className="text-primary-600" />
                  </div>
                  <div className="text-dark/80 font-medium">Advanced Tooth-Colored Restorations</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={14} className="text-primary-600" />
                  </div>
                  <div className="text-dark/80 font-medium">Comprehensive Structural Rehabilitation</div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 border border-dark/5 -z-10 translate-x-8 translate-y-8" />
              <img 
                src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=1200" 
                alt="Restorative Dentistry Detail" 
                className="w-full h-[500px] object-cover border border-dark/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Aesthetic Excellence */}
      <section id="aesthetic" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
            <div className="lg:w-1/2">
              <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-6 block">Clinical Pillar II</span>
              <h2 className="text-4xl md:text-5xl font-heading text-dark mb-8">Aesthetic Excellence</h2>
              <p className="text-dark/70 mb-8 leading-relaxed text-lg font-light">
                As an authorized <span className="text-dark font-medium underline underline-offset-4 decoration-primary-600/30">Lumineers® Provider</span>, Dr. Carpenter executes transformative smile makeovers with minimal intervention and profound impact.
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={14} className="text-primary-600" />
                  </div>
                  <div className="text-dark/80 font-medium">Lumineers® Minimal-Prep Veneers</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={14} className="text-primary-600" />
                  </div>
                  <div className="text-dark/80 font-medium">Professional Boutique Whitening</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={14} className="text-primary-600" />
                  </div>
                  <div className="text-dark/80 font-medium">Comprehensive Cosmetic Simulation</div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 border border-dark/5 -z-10 -translate-x-8 translate-y-8" />
              <img 
                src="/images/aesthetic-outcome-v2.png" 
                alt="Aesthetic Dentistry Outcome" 
                className="w-full h-[500px] object-cover border border-dark/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Clinical Foundation */}
      <section id="foundation" className="py-32 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-6 block">Clinical Pillar III</span>
              <h2 className="text-4xl md:text-5xl font-heading text-dark mb-8">Clinical Foundation</h2>
              <p className="text-dark/70 mb-8 leading-relaxed text-lg font-light">
                Foundational care is the bedrock of long-term oral health. Our diagnostic and preventative protocols are designed to identify and manage issues before they escalate, utilizing state-of-the-art clinical technology.
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={14} className="text-primary-600" />
                  </div>
                  <div className="text-dark/80 font-medium">Comprehensive Clinical Examination</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={14} className="text-primary-600" />
                  </div>
                  <div className="text-dark/80 font-medium">Advanced Digital Radiography</div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary-600 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle size={14} className="text-primary-600" />
                  </div>
                  <div className="text-dark/80 font-medium">Arestin® Periodontal Therapy</div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 border border-dark/5 -z-10 translate-x-8 translate-y-8" />
              <img 
                src="https://www.cosmeticdentisthoustontx.com/images/slideshow/houston-dentist11.jpg" 
                alt="Preventative Clinical Care" 
                className="w-full h-[500px] object-cover border border-dark/10"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
