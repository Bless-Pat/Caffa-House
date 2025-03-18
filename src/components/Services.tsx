import { cn } from "@/lib/utils";
import { Coffee, Scissors, Laptop } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Unisex Salon",
    icon: Scissors,
    description:
      "Professional styling services for both men and women, provided by our experienced team of stylists.",
    features: [
      "Haircuts & Styling",
      "Hair Coloring",
      "Braiding & Extensions",
      "Facial Grooming",
    ],
    image: "/lovable-uploads/salon.jpg",
  },
  {
    id: 2,
    name: "Workspace",
    icon: Laptop,
    description:
      "A comfortable, productive environment with uninterruptible power supply for professionals and students.",
    price: "1,500 just workspace with internet ₦3,500",
    features: [
      "High-Speed Internet",
      "Uninterruptible Power",
      "Comfortable Seating",
      "Quiet Environment",
    ],
    image: "/lovable-uploads/workspace.jpg",
  },
  {
    id: 3,
    name: "Coffee Shop",
    icon: Coffee,
    description:
      "Premium coffee and light refreshments to keep you energized throughout your visit.",
    price: "Varies",
    features: [
      "Specialty Coffee",
      "Tea Selection",
      "Light Snacks",
      "Refreshing Beverages",
    ],
    image: "/lovable-uploads/48af7cd4-ad2e-4bb3-8068-3b8396de7ccb.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden diagonal-pattern"
    >
      <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-transparent to-primary/5"></div>

      <div className="caffa-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our three core services designed to make your visit
            productive, refreshing, and stylish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="service-card bg-white group">
              <div className="relative overflow-hidden w-full aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <service.icon className="w-5 h-5 text-accent" />
                      <h3 className="text-xl font-bold text-white">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm">{service.price}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.id !== 3 && (
                  <a
                    href="#booking"
                    className="caffa-btn caffa-btn-primary w-full"
                  >
                    Book Now
                  </a>
                )}

                {service.id === 3 && (
                  <a
                    href="#booking"
                    className="caffa-btn caffa-btn-outline w-full"
                  >
                    View Menu
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
