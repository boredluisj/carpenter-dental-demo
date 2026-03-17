import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Anne Carpenter, DDS</title>
        <meta name="description" content="Terms and Conditions for Dr. Anne M. Carpenter's aesthetic and general dental services in Houston." />
      </Helmet>

      <section className="pt-32 pb-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <p className="text-gray-400">Last Updated: October 2023</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing our website and utilizing the services of Anne Carpenter, DDS, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website or services.
          </p>

          <h2>2. Medical Disclaimer</h2>
          <p>
            The content provided on this website—including text, graphics, images, and other material—is for informational purposes only. It is not intended as a substitute for professional dental or medical advice, diagnosis, or treatment. Always seek the advice of your dentist or qualified healthcare provider with any questions you may have regarding a medical or dental condition.
          </p>
          <p>
            Individual results for cosmetic makeovers, Lumineers®, and restorative procedures vary based on anatomical foundations, overall health, and post-operative care compliance.
          </p>

          <h2>3. Service Eligibility & Consultation</h2>
          <p>
            Booking a consultation does not guarantee candidacy for specific aesthetic procedures. Dr. Carpenter will evaluate your clinical diagnostics and medical history to determine the most appropriate treatment plan. We reserve the right to refuse service if a procedure poses a significant health risk to the patient.
          </p>

          <h2>4. Financial Responsibility</h2>
          <p>
            Patients are responsible for all charges incurred during treatment. While we provide cost estimates and assist with insurance claims or third-party financing, the final cost may vary depending on surgical complexities encountered during the procedure. Payment or financing arrangements must be finalized prior to surgery.
          </p>

          <h2>5. Clinical Standards Policy</h2>
          <p>
            Our commitment to clinical excellence is anchored in two decades of Houston dentistry. Dr. Carpenter maintains the highest standards for all restorative and aesthetic materials. Detailed aftercare instructions will be provided for all major procedures, and adherence to these protocols is required for optimal longevity of results.
          </p>

          <h2>6. Website Usage</h2>
          <p>
            You agree not to use this website for any unlawful purpose, or in any way that could damage, disable, overburden, or impair the site or interfere with any other party's use of the site.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For questions regarding these Terms, please contact:<br/>
            Anne Carpenter, DDS<br/>
            12121 Richmond Avenue, Suite 219<br/>
            Houston, TX 77082<br/>
            office@annecarpenterdds.com
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
