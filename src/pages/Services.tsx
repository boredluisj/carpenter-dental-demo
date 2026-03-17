import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import { ShieldCheck, Crosshair, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Treatment Options | Apex Dental Implants</title>
        <meta name="description" content="Explore our permanent dental implant solutions including All-on-4, single implants, and advanced bone grafting procedures." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">Permanent Solutions.</h1>
            <p className="text-xl text-gray-400">
              From replacing a single missing tooth to full-mouth restorations, we use state-of-the-art technology to rebuild your smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service 1: Single Implants */}
      <section id="single" className="py-24 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Individual Replacement</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Single Dental Implants</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                The absolute best solution for a single missing tooth. Unlike traditional bridges, a single implant does not require grinding down adjacent healthy teeth. It functions and feels exactly like your natural tooth.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-primary-500 shrink-0 mt-1" />
                  <span className="text-gray-700">Preserves jawbone density and facial structure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-primary-500 shrink-0 mt-1" />
                  <span className="text-gray-700">Color-matched exactly to your surrounding teeth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-primary-500 shrink-0 mt-1" />
                  <span className="text-gray-700">Lifelong durability with proper care.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=1200" 
                alt="Single Dental Implant Illustration" 
                className="rounded-3xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: All-on-4 */}
      <section id="all-on-4" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Full Arch Restoration</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">All-on-4® Implants</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                For patients missing all or most of their teeth, the All-on-4 procedure is a life-changing miracle. We place 4 strategically angled titanium posts to support a full arch of permanent, non-removable teeth.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Crosshair size={20} className="text-primary-500 shrink-0 mt-1" />
                  <span className="text-gray-700">Avoids the need for invasive bone grafting in most cases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Crosshair size={20} className="text-primary-500 shrink-0 mt-1" />
                  <span className="text-gray-700">Leave the clinic with new, functional teeth on the exact same day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Crosshair size={20} className="text-primary-500 shrink-0 mt-1" />
                  <span className="text-gray-700">No more messy adhesives or clicking dentures.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="All on 4 procedure" 
                className="rounded-3xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Bone Grafting & Sedation */}
      <section id="bone-grafting" className="py-24 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Advanced Procedures</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Bone Grafting & Sedation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                A solid foundation is crucial for implant success. If you lack sufficient jawbone density, our regenerative bone grafting and sinus lift procedures rebuild the bone. 
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Coupled with our board-certified IV sedation, you can sleep peacefully through these advanced procedures without any anxiety or memory of the surgery.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 shrink-0 mt-1" />
                  <span className="text-gray-700">Advanced sinus lift and ridge augmentation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 shrink-0 mt-1" />
                  <span className="text-gray-700">Monitored twilight sedation for total comfort.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary-500 shrink-0 mt-1" />
                  <span className="text-gray-700">Use of PRF (Platelet-Rich Fibrin) for accelerated natural healing.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200" 
                alt="Clinical setting" 
                className="rounded-3xl shadow-lg w-full"
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
