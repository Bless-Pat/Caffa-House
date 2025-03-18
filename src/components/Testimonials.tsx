import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Tomiwa Samuel",
      role: "Business Analyst",
      quote:
        "I've met incredible people in this space, built meaningful connections, and even turned those bonds into business opportunities ",
      image: "/lovable-uploads/9a6cae99-439a-493f-962c-4c828a95d190.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Samuel Akinyemi",
      role: "AI consultant",
      quote:
        "I come here to study, the reliable power supply and great coffee make it my go-to place for focused learning",
      image: "/lovable-uploads/3e865a74-a700-456e-9a29-46adcc499a5d.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Blessing Patrick",
      role: "Front End Developer",
      quote:
        "Since discovering Caffa, I've made it my regular spot. The salon services are exceptional, and I love working here afterward.",
      image: "/lovable-uploads/56877cfa-a9e1-4860-bc63-4e1513e2a452.png",
      rating: 5,
    },
  ];

  const changeTestimonial = (newIndex: number) => {
    if (animating || newIndex === activeIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setAnimating(false);
    }, 500); // Match animation duration in CSS
  };

  const nextTestimonial = () =>
    changeTestimonial((activeIndex + 1) % testimonials.length);
  const prevTestimonial = () =>
    changeTestimonial(
      (activeIndex - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="testimonials"
      className="py-24 caffa-dark relative overflow-hidden"
    >
      <div className="caffa-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear from the people who have experienced our unique blend of
            services
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/10 relative overflow-hidden">
            <div className="md:col-span-4 flex justify-center">
              <div className="testimonial-image-container relative">
                <div className="w-36 h-36 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent/20 relative">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col justify-center">
              <div className="mb-5 flex">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent mr-1"
                  />
                ))}
              </div>

              <blockquote
                className={cn(
                  "relative transition-all duration-500 mb-6",
                  animating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                )}
              >
                <p className="text-xl md:text-2xl font-medium text-white">
                  {testimonials[activeIndex].quote}
                </p>
              </blockquote>

              <h4 className="text-xl font-bold text-white">
                {testimonials[activeIndex].name}
              </h4>
              <div className="text-white/80">
                {testimonials[activeIndex].role}
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white/10 hover:bg-accent transition-colors border border-white/10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => changeTestimonial(index)}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300",
                        activeIndex === index
                          ? "w-8 bg-accent"
                          : "w-2.5 bg-white/30 hover:bg-white/50"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white/10 hover:bg-accent transition-colors border border-white/10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
