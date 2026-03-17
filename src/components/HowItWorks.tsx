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
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Methodology</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight uppercase">
              The Path to <br/>Mastery.
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-sm font-light leading-relaxed border-l border-primary-600/30 pl-8">
            Our clinical workflow is designed to be invisible—leaving only the spectacular, natural result behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border-t border-white/5">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 hover:bg-white/[0.02] transition-colors border-l border-white/5 first:border-l-0"
            >
              <div className="text-primary-400 mb-8 w-12 h-12 border border-primary-400/20 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-4 uppercase tracking-tighter">{step.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                {step.description}
              </p>
              <div className="mt-8 text-[10px] font-black tracking-widest text-primary-600/50 uppercase">
                Phase 0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
