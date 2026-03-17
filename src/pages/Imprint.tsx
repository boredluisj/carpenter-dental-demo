import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Imprint = () => {
  return (
    <>
      <Helmet>
        <title>Imprint / Legal Notice | Anne Carpenter, DDS</title>
        <meta name="description" content="Legal notice and company information for Dr. Anne M. Carpenter's Houston dental practice." />
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
            <strong>Anne M. Carpenter, DDS</strong><br />
            12121 Richmond Avenue, Suite 219<br />
            Houston, TX 77082<br />
            United States
          </p>

          <h2>Contact</h2>
          <ul>
            <li><strong>Phone:</strong> (281) 497-5001</li>
            <li><strong>Email:</strong> office@annecarpenterdds.com</li>
            <li><strong>Website:</strong> www.cosmeticdentisthoustontx.com</li>
          </ul>

          <h2>Responsible for Content</h2>
          <p>
            Dr. Anne M. Carpenter, DDS<br />
            Medical Director
          </p>

          <h2>Licensing & Certification</h2>
          <p>
            Dr. Anne Carpenter is licensed to practice dentistry in the State of Texas. Clinical guidelines are regulated by the Texas State Board of Dental Examiners.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            We are dedicated to resolving patient concerns directly and amicably. Please contact our patient relations team at office@annecarpenterdds.com to address any issues.
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
