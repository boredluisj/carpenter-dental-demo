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
      <section className="bg-white py-12 border-b border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80">
            {/* Logos represent authority markers */}
            <h3 className="text-lg font-heading text-dark flex items-center gap-3"><ShieldCheck className="text-primary-600" size={20} /> Authorized Lumineers® Provider</h3>
            <h3 className="text-lg font-heading text-dark flex items-center gap-3"><Activity className="text-primary-600" size={20} /> Houston Native (UT Branch)</h3>
            <h3 className="text-lg font-heading text-dark flex items-center gap-3"><Heart className="text-primary-600" size={20} /> Serving West Houston Since 2002</h3>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Treatments</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-dark mb-6">Elevating Every Aspect of Your Smile.</h2>
            <p className="text-xl text-gray-600">
              From sophisticated aesthetic makeovers to comprehensive preventive care, we deliver results that maximize your personal health and appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Cosmetic Makeovers"
              description="Transform your confidence with porcelain crowns, veneers, and smile-lengthening procedures tailored to your face."
              icon={<Heart size={20} className="text-primary-600" />}
              image="/images/cosmetic-makeover.png"
              link="/services#cosmetic"
              delay={0}
            />
            <ServiceCard 
              title="Lumineers®"
              description="The permanent, non-invasive way to correct gaps and discoloration without the traditional drilling of veneers."
              icon={<ShieldCheck size={20} className="text-primary-600" />}
              image="/images/lumineers.png"
              link="/services#lumineers"
              delay={0.1}
            />
            <ServiceCard 
              title="Comprehensive Care"
              description="West Houston's standard for routine cleanings, digital diagnostics, and oral health maintenance for all ages."
              icon={<Activity size={20} className="text-primary-600" />}
              image="/images/modern-clinic.png"
              link="/services#general"
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
