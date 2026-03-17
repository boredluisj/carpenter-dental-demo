import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Imprint = () => {
  return (
    <>
      <Helmet>
        <title>Imprint / Legal Notice | Apex Dental Implants</title>
        <meta name="description" content="Legal notice and company information for Apex Dental Implants." />
      </Helmet>

      <section className="pt-32 pb-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            Imprint / Legal Notice
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>Provider Identification</h2>
          <p>
            <strong>Apex Dental Implants, PC</strong><br />
            100 Premium Way, Suite 400<br />
            Beverly Hills, CA 90210<br />
            United States
          </p>

          <h2>Contact</h2>
          <ul>
            <li><strong>Phone:</strong> (800) 555-0199</li>
            <li><strong>Email:</strong> contact@apeximplants.com</li>
            <li><strong>Website:</strong> www.apeximplants.com</li>
          </ul>

          <h2>Responsible for Content</h2>
          <p>
            Dr. Michael Apex, DMD<br />
            Lead Oral Surgeon & Medical Director
          </p>

          <h2>Licensing & Certification</h2>
          <p>
            Our oral surgeons are licensed to practice dentistry and maxillofacial surgery in the State of California. Associated clinical guidelines are regulated by the Dental Board of California.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            We are dedicated to resolving patient concerns directly and amicably. Please contact our patient relations team at patientcare@apeximplants.com to address any issues.
          </p>

          <h2>Copyright Notice</h2>
          <p>
            The content and works published on this website are governed by the copyright laws of the United States. Any duplication, processing, distribution, or any form of utilization beyond the scope of copyright law shall require the prior written consent of the author or authors in question.
          </p>
        </div>
      </section>
    </>
  );
};

export default Imprint;
