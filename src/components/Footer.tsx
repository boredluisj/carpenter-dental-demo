import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-surface/60 pt-24 pb-12 border-t border-dark/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1 pr-8">
            <Link to="/" onClick={handleScrollToTop} className="inline-block mb-8">
              <span className="font-heading text-3xl text-surface tracking-tight">DR. ANNE M. CARPENTER</span>
            </Link>
            <p className="text-surface/50 mb-8 text-sm leading-relaxed font-light">
              Restoring confidence through clinical mastery and aesthetic precision. Serving the West Houston community since 2002.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="group w-10 h-10 border border-surface/10 flex items-center justify-center text-surface/40 hover:border-surface hover:text-surface transition-all"><Instagram size={18} /></a>
              <a href="#" className="group w-10 h-10 border border-surface/10 flex items-center justify-center text-surface/40 hover:border-surface hover:text-surface transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-surface mb-8">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-surface/50 hover:text-surface transition-colors text-sm font-light">About Dr. Carpenter</Link></li>
              <li><Link to="/services" className="text-surface/50 hover:text-surface transition-colors text-sm font-light">Services & Procedures</Link></li>
              <li><a href="https://www.zocdoc.com/practice/anne-m-carpenter-dds-17609?referrerType=widget" target="_blank" className="text-surface/50 hover:text-surface transition-colors text-sm font-light">Book Appointment</a></li>
              <li><a href="#testimonials" className="text-surface/50 hover:text-surface transition-colors text-sm font-light">Patient Experiences</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl text-surface mb-8">Inquiries</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-surface/50 text-sm font-light">
                <MapPin size={18} className="text-primary-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">12121 Richmond Avenue<br/>Suite 219, Houston, TX 77082</span>
              </li>
              <li className="flex items-center gap-4 text-surface/50 text-sm font-light">
                <Phone size={18} className="text-primary-600 shrink-0" />
                <span>(281) 497-5001</span>
              </li>
              <li className="flex items-center gap-4 text-surface/50 text-sm font-light">
                <Mail size={18} className="text-primary-600 shrink-0" />
                <span>office@annecarpenterdds.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-xl text-surface mb-8">Hours</h3>
            <ul className="space-y-4 text-sm text-surface/50 font-light">
              <li className="flex justify-between border-b border-surface/10 pb-2">
                <span>Mon — Thu</span>
                <span className="text-surface">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-surface/10 pb-2">
                <span>Friday</span>
                <span className="text-surface">8:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sat — Sun</span>
                <span className="text-primary-600 italic">By Appointment</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-10 border-t border-surface/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-surface/30 text-[10px] tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Anne M. Carpenter, DDS. Restorative & Aesthetic Mastery.
          </p>
          <div className="flex items-center justify-center gap-8">
            <Link to="/privacy-policy" className="text-surface/30 hover:text-surface transition-colors text-[10px] tracking-widest uppercase">Privacy</Link>
            <Link to="/terms-conditions" className="text-surface/30 hover:text-surface transition-colors text-[10px] tracking-widest uppercase">Terms</Link>
            <Link to="/imprint" className="text-surface/30 hover:text-surface transition-colors text-[10px] tracking-widest uppercase">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
