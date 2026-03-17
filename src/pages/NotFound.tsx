import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Apex Dental Implants</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center bg-surface py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-black font-heading text-primary-500 mb-4 tracking-tighter shadow-sm blur-[1px]">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Looks like we're missing a tooth.</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We can't seem to find the page you're looking for. It might have been moved or doesn't exist. Let's get you back to restoring your smile.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-all shadow-lg text-lg"
              >
                <Home size={20} />
                Return Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-dark font-medium hover:bg-gray-50 transition-all shadow-sm border border-gray-200 text-lg"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
