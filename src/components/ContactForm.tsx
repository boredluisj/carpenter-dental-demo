import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  if (formStatus === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface border border-dark/10 p-12 text-center relative"
      >
        <div className="absolute -inset-2 border border-dark/5 -z-10 translate-x-3 translate-y-3" />
        <div className="w-16 h-16 border border-primary-600 text-primary-600 flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-heading text-dark mb-4 uppercase tracking-wide">Inquiry Received</h3>
        <p className="text-dark/60 text-lg font-light leading-relaxed">
          Your documentation has been received. Our clinical coordinators will contact you within 24 clinical hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-xs font-bold tracking-widest uppercase text-dark/40">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            required 
            className="w-full bg-surface/30 px-5 py-4 border border-dark/10 focus:border-primary-600 outline-none transition-colors text-dark placeholder:text-dark/20 font-light"
            placeholder="Alexandra"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-xs font-bold tracking-widest uppercase text-dark/40">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            required 
            className="w-full bg-surface/30 px-5 py-4 border border-dark/10 focus:border-primary-600 outline-none transition-colors text-dark placeholder:text-dark/20 font-light"
            placeholder="Sterling"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-dark/40">Email Address</label>
          <input 
            type="email" 
            id="email" 
            required 
            className="w-full bg-surface/30 px-5 py-4 border border-dark/10 focus:border-primary-600 outline-none transition-colors text-dark placeholder:text-dark/20 font-light"
            placeholder="alex.s@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold tracking-widest uppercase text-dark/40">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            className="w-full bg-surface/30 px-5 py-4 border border-dark/10 focus:border-primary-600 outline-none transition-colors text-dark placeholder:text-dark/20 font-light"
            placeholder="(713) 000-0000"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-dark/40">Procedure of Interest</label>
        <textarea 
          id="message" 
          rows={4} 
          className="w-full bg-surface/30 px-5 py-4 border border-dark/10 focus:border-primary-600 outline-none transition-colors text-dark placeholder:text-dark/20 font-light resize-none"
          placeholder="Please describe your restorative or aesthetic goals..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={formStatus === 'submitting'}
        className="w-full group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-dark transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <div className="relative border border-dark py-5 text-dark font-bold tracking-[0.2em] uppercase text-sm group-hover:text-surface transition-colors">
          {formStatus === 'submitting' ? 'Processing Documentation...' : 'Submit Clinical Inquiry'}
        </div>
      </button>

      <p className="text-[10px] text-dark/40 text-center uppercase tracking-widest leading-loose">
        Clinical confidentiality guaranteed. <br/> Protected under standard medical privacy protocols.
      </p>
    </form>
  );
};

export default ContactForm;
