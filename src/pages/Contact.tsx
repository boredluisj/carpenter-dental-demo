import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Apex Dental Implants</title>
        <meta name="description" content="Schedule your free consultation for dental implants. Reach out to the Apex Dental team today." />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">Let's Talk About Your Smile.</h1>
            <p className="text-xl text-gray-400">
              Ready to take the first step towards a permanent, beautiful smile? Contact us today to schedule your complimentary 3D evaluation.
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

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Clinic Location</p>
                    <p className="text-gray-600">100 Premium Way, Suite 400<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Call Us</p>
                    <p className="text-gray-600">(800) 555-0199</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Email Us</p>
                    <p className="text-gray-600">contact@apeximplants.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Hours of Operation</p>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat: By Appointment Only<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold font-heading text-dark mb-6">Request a Consultation</h3>
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
