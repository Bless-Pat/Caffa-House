import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col justify-center caffa-dark overflow-hidden">
      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5 -z-10"></div>

      {/* Main content */}
      <div className="caffa-container pt-32 pb-16 flex flex-col items-center md:items-start lg:max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div
            className="md:col-span-6 text-center md:text-left z-10 reveal"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-none">
              <span className="block">Welcome to</span>
              <span className="text-accent">CaFFa House</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-xl">
              A one-of-a-kind space where style meets productivity, a
              professional workspace, and premium coffee perfect for
              productivity and relaxation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#booking" className="caffa-btn caffa-btn-primary">
                Book Now
              </a>
              <a href="#services" className="caffa-btn caffa-btn-outline">
                Explore Our Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 justify-center md:justify-start">
              <p className="text-white/70 text-sm">Follow us</p>
              <a
                href="https://instagram.com/caffahouseng"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-6 relative">
            <div
              className="relative z-10 ml-auto reveal"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-square max-w-md mx-auto">
                  <img
                    src="/lovable-uploads/f00a031a-6275-4985-8310-61f57a6e20a4.png"
                    alt="People playing chess at Caffa"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 bg-accent p-2 rounded-lg shadow-lg">
                  <img
                    src="/lovable-uploads/e8183e1b-462a-46d5-8895-529d832f4e65.png"
                    alt="Caffa Logo"
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              {/* Floating image */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-xl float">
                <img
                  src="/lovable-uploads/48af7cd4-ad2e-4bb3-8068-3b8396de7ccb.png"
                  alt="Caffa Coffee Cup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Accent circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
        <div className="flex flex-col items-center animate-bounce animation-duration-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="text-xs text-white mt-1">Scroll</span>
        </div>
      </div>

      {/* Definition Card - Absolute positioned */}
      <div
        className="absolute bottom-12 right-12 max-w-xs bg-black/70 backdrop-blur-md rounded-xl overflow-hidden p-4 border border-white/10 shadow-xl hidden lg:block reveal"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex flex-col space-y-4">
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-accent"></div>
              <h3 className="text-lg font-bold text-white">CaFFa</h3>
            </div>
            <p className="text-sm text-white/80 mt-1">
              Coined from "Community aFFair" meaning to influence and inspire
              through creativity and lifestyle products.
            </p>
          </div>
          <div className="w-full h-px bg-white/10"></div>
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-accent"></div>
              <h3 className="text-lg font-bold text-white">House</h3>
            </div>
            <p className="text-sm text-white/80 mt-1">
              More than just a building, it's a melting pot for diversity and
              shared experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
