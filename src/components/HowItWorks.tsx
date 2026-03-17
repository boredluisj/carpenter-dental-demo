import { motion } from 'framer-motion';
import { Microscope, Syringe, Clock, Smile } from 'lucide-react';

const steps = [
  {
    icon: <Microscope size={32} />,
    title: "Comprehensive Evaluation",
    description: "We utilize advanced 3D CBCT scanning to evaluate your bone density and create a hyper-precise surgical guide."
  },
  {
    icon: <Syringe size={32} />,
    title: "Precision Placement",
    description: "While you rest comfortably under IV sedation, our specialists place the medical-grade titanium implants."
  },
  {
    icon: <Clock size={32} />,
    title: "Same-Day Smile",
    description: "Leave our clinic the very same day with a perfectly functional, beautiful temporary restoration while you heal."
  },
  {
    icon: <Smile size={32} />,
    title: "Final zirconia Restoration",
    description: "Once healed, your permanent, custom-crafted zirconia teeth are affixed, designed to last a lifetime."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <span className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">Your Path to a New Smile.</h2>
          <p className="text-xl text-gray-400">
            A streamlined, state-of-the-art procedure designed for maximum comfort and guaranteed results.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-0 w-full h-[2px] bg-gradient-to-r from-dark via-gray-700 to-dark z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-[88px] h-[88px] rounded-2xl bg-surface border border-gray-800 flex items-center justify-center text-primary-400 mb-8 shadow-2xl relative z-10 group hover:border-primary-500 hover:text-dark hover:bg-primary-500 transition-all duration-300">
                    {step.icon}
                    <div className="absolute -bottom-4 right-[-10px] w-8 h-8 rounded-full bg-dark border-4 border-gray-800 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:bg-primary-600 group-hover:border-primary-700 group-hover:text-white transition-all">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
