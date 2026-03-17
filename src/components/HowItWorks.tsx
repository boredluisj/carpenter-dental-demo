import { motion } from 'framer-motion';
import { Microscope, PencilRuler, Zap, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <Microscope size={32} />,
    title: "Clinical Analysis",
    description: "A comprehensive digital diagnostic pass to evaluate structural health and anatomical foundations."
  },
  {
    icon: <PencilRuler size={32} />,
    title: "Aesthetic Blueprinting",
    description: "Dr. Carpenter personally architects your future smile, mapping every contour to your specific facial symmetry."
  },
  {
    icon: <Zap size={32} />,
    title: "Seamless Integration",
    description: "Implementation of restorative mastery—whether Lumineers® or Porcelain—with absolute clinical precision."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "The Legacy Care",
    description: "Continued health maintenance under Dr. Carpenter’s watchful eye, ensuring your results last a lifetime."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-dark text-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-primary-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Methodology</span>
            <h2 className="text-5xl md:text-7xl font-bold font-heading leading-[1] uppercase tracking-tighter">
              The Path to <br/><span className="italic font-light opacity-60">Clinical Mastery.</span>
            </h2>
          </div>
          <p className="text-surface/40 text-lg max-w-sm font-light leading-relaxed border-l border-primary-500/20 pl-10 mb-2">
            Our clinical workflow is designed to be invisible—leaving only the spectacular, natural result behind.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border-t border-surface/5">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-12 hover:bg-surface/[0.02] transition-colors border-l border-surface/5 first:border-l-0"
            >
              <div className="text-primary-500 mb-10 w-14 h-14 border border-primary-500/20 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-6 uppercase tracking-tighter">{step.title}</h3>
              <p className="text-surface/50 font-light leading-relaxed text-sm">
                {step.description}
              </p>
              <div className="mt-12 text-[10px] font-bold tracking-[0.3em] text-primary-500/30 uppercase">
                Step 0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
