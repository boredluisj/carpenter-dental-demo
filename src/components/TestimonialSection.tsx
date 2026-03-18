import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Lumineers® Makeover",
    content: "Dr. Carpenter is a Houston native and it shows in how she treats her neighbors. I was terrified of dental work, but her gentle approach and the Lumineers have completely changed how I feel about my smile. No needles, no pain.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Robert Miller",
    role: "Comprehensive Care",
    content: "I've been coming to this office since 2002. Dr. Carpenter and her team are consistent, professional, and they truly care about long-term dental health rather than just quick fixes. The new technology in the office is impressive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Elena Rodriguez",
    role: "Aesthetic Restoration",
    content: "The aesthetic results Dr. Carpenter achieved with my porcelain crowns are indistinguishable from my natural teeth. Her attention to detail is why she's the best in West Houston. I couldn't be happier with the result.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-surface" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Proven Reputation</span>
          <h2 className="text-5xl md:text-6xl font-heading text-dark mb-8">Clinical Authority. Patient Trust.</h2>
          <p className="text-xl text-dark/70 font-light">
            Reflecting over two decades of restorative excellence and personalized care in the heart of West Houston.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-12 border border-dark/5 flex flex-col hover:border-primary-500/20 transition-all duration-700 relative group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary-500/[0.02] -z-10 group-hover:bg-primary-500/[0.05] transition-colors" />
              <div className="flex items-center gap-1.5 text-primary-500 mb-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <Quote size={40} className="text-primary-500/10 mb-8" />
              <p className="text-dark/70 leading-relaxed mb-12 italic flex-grow font-light text-xl">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-5 mt-auto border-t border-dark/5 pt-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 object-cover border border-dark/5 grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div>
                  <h4 className="font-heading text-2xl text-dark mb-1">{testimonial.name}</h4>
                  <p className="text-[10px] text-dark/30 tracking-[0.2em] font-bold uppercase">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
