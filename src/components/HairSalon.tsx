import { cn } from "@/lib/utils";
import { Scissors, User } from "lucide-react";

export default function HairSalon() {
  return (
    <section id="salon" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-5 diagonal-pattern -z-10"></div>

      <div className="caffa-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            SALON SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Professional Styling
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our unisex salon offers professional personal care with a touch of
            creativity, ideal for both ladies and gentlemen seeking to elevate
            their style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Scissors className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-2xl font-bold">Grooming & Natural Hair</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold">Haircuts & Styling</h4>
                    <span className="text-sm font-medium text-primary">
                      ₦2,000+
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Precision cuts and creative styling for all hair types.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold">Hair Coloring</h4>
                    <span className="text-sm font-medium text-primary">
                      ₦5,000+
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Expert color application for vibrant, long-lasting results.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold">Braiding & Extensions</h4>
                    <span className="text-sm font-medium text-primary">
                      ₦3,000+
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Beautiful braiding patterns and extension application.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold">Facial Grooming</h4>
                    <span className="text-sm font-medium text-primary">
                      ₦1,500+
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Beard trimming and shaping for a polished look.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Expert Stylists</h3>
                <p className="text-muted-foreground">
                  Our team of experienced stylists are dedicated to helping you
                  look and feel your best.
                </p>
              </div>
            </div>

            <a href="#booking" className="caffa-btn caffa-btn-primary">
              Book Your Styling Session
            </a>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-xl row-span-2">
                <img
                  src="/lovable-uploads/salon.jpg"
                  alt="Hair styling at Caffa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/51c09535-24ea-43de-90a2-0a0ef9c72020.png"
                  alt="Natural hair styling"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/hair.jpg"
                  alt="Caffa environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
