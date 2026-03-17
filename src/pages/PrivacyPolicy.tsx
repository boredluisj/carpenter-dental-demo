import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Apex Dental Implants</title>
        <meta name="description" content="Privacy Policy and HIPAA compliance information for Apex Dental Implants." />
      </Helmet>

      <section className="pt-32 pb-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-gray-400">Last Updated: October 2023</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>1. Introduction</h2>
          <p>
            Apex Dental Implants ("we," "our," or "us") respects your privacy and is committed to protecting your personal and medical information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. HIPAA Compliance & Protected Health Information (PHI)</h2>
          <p>
            As a healthcare provider, we are fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). Any medical information, dental history, or consultation details you provide are considered Protected Health Information (PHI) and are stored in secure, encrypted, HIPAA-compliant electronic health record (EHR) systems.
          </p>
          <p>
            We will never sell, rent, or share your PHI with unauthorized third parties. Your information is only accessed by your treating oral surgeons, clinical staff, and necessary administrative personnel for the purposes of your treatment and billing.
          </p>

          <h2>3. Information We Collect</h2>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and physical address.</li>
            <li><strong>Medical & Dental Information:</strong> Dental history, current medications, 3D CBCT scans, X-rays, and treatment plans.</li>
            <li><strong>Financial Information:</strong> Payment details, insurance information, and financing applications (processed securely via third-party gateways).</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our website, collected via cookies and analytics tools.</li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To evaluate your candidacy for dental implants and full-arch restorations.</li>
            <li>To schedule consultations and manage appointments.</li>
            <li>To process payments and coordinate with insurance providers or third-party financing.</li>
            <li>To communicate with you regarding your treatment, pre-op, and post-op care.</li>
            <li>To improve our website functionality and patient experience.</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures, including SSL encryption, multi-factor authentication for staff, and secure servers, to protect your personal and medical data from unauthorized access, alteration, or disclosure.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Privacy Officer at:<br/>
            Email: privacy@apeximplants.com<br/>
            Phone: (800) 555-0199
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
