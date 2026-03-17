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
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-surface" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">Proven Excellence</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-dark mb-6">Patient Experiences</h2>
          <p className="text-xl text-gray-600">
            Discover why Dr. Carpenter has been Houston's choice for personalized dental care for over two decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-1 text-primary-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <Quote size={40} className="text-primary-100 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-8 italic flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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
