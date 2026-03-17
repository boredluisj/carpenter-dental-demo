import { motion } from 'framer-motion';

const CarpenterLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.svg 
        width="36" 
        height="36" 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <rect width="36" height="36" rx="10" className="fill-dark" />
        
        {/* Diamond/Tooth abstract shape */}
        <motion.path 
          d="M18 6L26 14L18 28L10 14L18 6Z" 
          stroke="url(#goldGradient)" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
        />
        
        <motion.path 
          d="M18 12L22 16L18 22L14 16L18 12Z" 
          fill="url(#goldGradient)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />

        <defs>
          <linearGradient id="goldGradient" x1="10" y1="6" x2="26" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d2ab65" />
            <stop offset="1" stopColor="#845e31" />
          </linearGradient>
        </defs>
      </motion.svg>
      <span className="font-heading font-black text-2xl tracking-tight text-dark uppercase">
        Carpenter<span className="text-primary-600 font-light">Dental</span>
      </span>
    </div>
  );
};

export default CarpenterLogo;
