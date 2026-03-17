import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import HowItWorks from '../components/HowItWorks';
import ResultsSection from '../components/ResultsSection';
import { Activity, Droplet, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Anne Carpenter, DDS | Luxury Cosmetic & General Dentistry Houston</title>
        <meta name="description" content="Houston's authority in aesthetic dental makeovers. Dr. Anne M. Carpenter offers transformative cosmetic dentistry, Lumineers®, and comprehensive care in a state-of-the-art Houston office." />
      </Helmet>

      <Hero />

      {/* Trust Badges */}
      <section className="bg-surface py-16 border-b border-dark/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            <h3 className="text-[11px] font-semibold text-dark/40 uppercase tracking-[0.3em] flex items-center gap-4"><ShieldCheck className="text-primary-500/50" size={16} /> Authorized Lumineers® Provider</h3>
            <h3 className="text-[11px] font-semibold text-dark/40 uppercase tracking-[0.3em] flex items-center gap-4"><Activity className="text-primary-500/50" size={16} /> Houston Native (UT Branch)</h3>
            <h3 className="text-[11px] font-semibold text-dark/40 uppercase tracking-[0.3em] flex items-center gap-4"><Heart className="text-primary-500/50" size={16} /> Serving West Houston Since 2002</h3>
          </div>
        </div>
      </section>
 
      {/* Services Overview - Bento Grid Transformation */}
      <section className="py-32 bg-surface relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-dots-pattern [background-size:20px_20px] opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl">
              <span className="text-primary-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Clinical Expertise</span>
              <h2 className="text-5xl md:text-7xl font-bold font-heading text-dark mb-10 leading-[1]">Elite Procedures. <br/><span className="italic font-light opacity-60 lowercase">Redefining Mastery.</span></h2>
            </div>
            <p className="text-lg text-dark/60 max-w-sm font-light leading-relaxed mb-4">
              From sophisticated aesthetic makeovers to comprehensive clinical restoration. Houston's standard for precision.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-full auto-rows-[minmax(250px,auto)]">
            <ServiceCard 
              title="Cosmetic Makeovers"
              description="Transform your confidence with porcelain crowns, veneers, and smile-lengthening procedures tailored to your face."
              icon={<Heart size={20} className="text-primary-600" />}
              image="/images/cosmetic-makeover.png"
              link="/services#cosmetic"
              className="md:col-span-2 lg:col-span-3 lg:row-span-2 h-full"
              delay={0}
            />
            <ServiceCard 
              title="Lumineers®"
              description="The permanent, non-invasive way to correct gaps and discoloration without drilling."
              icon={<ShieldCheck size={20} className="text-primary-600" />}
              image="/images/lumineers.png"
              link="/services#lumineers"
              className="md:col-span-2 lg:col-span-3 h-full"
              delay={0.1}
            />
            <ServiceCard 
              title="State-of-the-Art Clinic"
              description="West Houston's standard for routine diagnostics and maintenance."
              icon={<Activity size={20} className="text-primary-600" />}
              image="/images/modern-clinic.png"
              link="/services#general"
              className="md:col-span-4 lg:col-span-3 h-full"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <HowItWorks />
      
      <ResultsSection />

      <TestimonialSection />
      
      <CTASection />
    </>
  );
};

export default Home;
