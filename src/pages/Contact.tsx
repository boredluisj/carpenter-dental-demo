import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Connect | Dr. Anne M. Carpenter, DDS</title>
        <meta name="description" content="Reach our Houston clinical offices. Dedicated patient support and restorative consultations in the heart of West Houston." />
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
            <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-6 block">Communication</span>
            <h1 className="text-5xl md:text-7xl font-heading mb-8">Clinical Inquiry. <br/><span className="italic">Direct Contact.</span></h1>
            <p className="text-xl text-surface/60 font-light leading-relaxed max-w-2xl">
              Our clinical administration is dedicated to facilitating a seamless experience from your initial inquiry to restorative completion. Reach out to our Houston office today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-heading text-dark mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our patient coordinators are here to answer your questions about procedures, financing, and scheduling.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-primary-600 flex items-center justify-center text-primary-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-primary-600 mb-2">Practice Location</p>
                    <p className="text-dark/80 font-medium leading-relaxed">12121 Richmond Avenue, Suite 219<br/>Houston, TX 77082</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-primary-600 flex items-center justify-center text-primary-600 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-primary-600 mb-2">Direct Line</p>
                    <p className="text-dark/80 font-medium">(281) 497-5001</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-primary-600 flex items-center justify-center text-primary-600 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-primary-600 mb-2">Clinical Inquiry</p>
                    <p className="text-dark/80 font-medium">office@annecarpenterdds.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-primary-600 flex items-center justify-center text-primary-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-primary-600 mb-2">Office Hours</p>
                    <p className="text-dark/80 font-medium leading-relaxed">
                      Mon – Thur: 8:00 AM – 5:00 PM<br/>
                      Fri – Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 border border-dark/10 relative">
                <div className="absolute -inset-2 border border-dark/5 -z-10 translate-x-4 translate-y-4" />
                <h3 className="text-2xl font-bold font-heading text-dark mb-8 uppercase tracking-wide">Consultation Inquiry</h3>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 w-full relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-50" />
            <p className="font-medium">Interactive Map Integration</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
