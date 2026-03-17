import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Apex Dental Implants</title>
        <meta name="description" content="Terms and Conditions for Apex Dental Implants services and website usage." />
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
            By accessing our website and utilizing the services of Apex Dental Implants, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website or services.
          </p>

          <h2>2. Medical Disclaimer</h2>
          <p>
            The content provided on this website—including text, graphics, images, and other material—is for informational purposes only. It is not intended as a substitute for professional dental or medical advice, diagnosis, or treatment. Always seek the advice of your dentist or qualified healthcare provider with any questions you may have regarding a medical or dental condition.
          </p>
          <p>
            Individual results for dental implants, All-on-4 procedures, and bone grafting vary based on bone density, overall health, and post-operative care compliance.
          </p>

          <h2>3. Service Eligibility & Consultation</h2>
          <p>
            Booking a consultation does not guarantee candidacy for permanent dental implants. Our board-certified oral surgeons will evaluate your 3D CBCT scans and medical history to determine the most appropriate treatment plan. We reserve the right to refuse service if an implant procedure poses a significant health risk to the patient.
          </p>

          <h2>4. Financial Responsibility</h2>
          <p>
            Patients are responsible for all charges incurred during treatment. While we provide cost estimates and assist with insurance claims or third-party financing, the final cost may vary depending on surgical complexities encountered during the procedure. Payment or financing arrangements must be finalized prior to surgery.
          </p>

          <h2>5. Lifetime Warranty Policy</h2>
          <p>
            Our stated "Lifetime Warranty" applies to the titanium implant posts against structural failure, provided the patient adheres strictly to our post-operative care guidelines, maintains regular professional cleanings, and attends prescribed follow-up appointments. The warranty on zirconia crowns and prosthetic arches varies and will be detailed in your individual treatment agreement.
          </p>

          <h2>6. Website Usage</h2>
          <p>
            You agree not to use this website for any unlawful purpose, or in any way that could damage, disable, overburden, or impair the site or interfere with any other party's use of the site.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For questions regarding these Terms, please contact:<br/>
            Apex Dental Implants<br/>
            100 Premium Way, Suite 400<br/>
            Beverly Hills, CA 90210<br/>
            contact@apeximplants.com
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
