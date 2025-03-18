import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="visit"
      className="pt-24 pb-10 relative overflow-hidden bg-[#1a1308]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>

      {/* Diagonal top shape */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#1a1308] -translate-y-12 transform-gpu rotate-1 scale-110"></div>

      <div className="caffa-container relative z-10">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-16">
          {/* Logo and about */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-8">
              <div className="font-serif font-bold text-2xl tracking-tight text-white">
                CaFFa
                <span className="block text-sm font-normal mt-0.5 text-accent">
                  Get Cultured
                </span>
              </div>
            </div>

            <p className="text-white/70 mb-8 text-base leading-relaxed">
              A one-of-a-kind space offering unisex salon services, a
              professional workspace, and premium coffee perfect for
              productivity and relaxation.
            </p>

            <a
              href="https://instagram.com/caffahouseng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 rounded-full transition-colors group"
            >
              <Instagram className="w-5 h-5 mr-2" />
              <span className="font-medium">@caffahouseng</span>
              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Quick links column */}
          <div className="lg:col-span-2 hidden lg:block">
            <h3 className="text-lg font-bold mb-6 text-white">
              <span className="inline-block w-8 h-0.5 bg-accent mr-2 align-middle"></span>
              Links
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#workspace"
                  className="hover:text-accent transition-colors"
                >
                  Workspace
                </a>
              </li>
              <li>
                <a
                  href="#salon"
                  className="hover:text-accent transition-colors"
                >
                  Salon
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-accent transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="hover:text-accent transition-colors"
                >
                  Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">
              <span className="inline-block w-8 h-0.5 bg-accent mr-2 align-middle"></span>
              Hours
            </h3>

            <div className="space-y-3">
              <div className="flex items-start text-white/70">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 mr-3" />
                <div>
                  <div className="flex justify-between w-full mb-1">
                    <span>Monday - Friday</span>
                    <span className="text-accent font-medium ml-4">
                      8am - 5pm
                    </span>
                  </div>
                  <div className="flex justify-between w-full mb-1">
                    <span>Saturday</span>
                    <span className="text-accent font-medium ml-4">
                      8am - 5pm
                    </span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Sunday</span>
                    <span className="text-accent font-medium ml-4">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">
              <span className="inline-block w-8 h-0.5 bg-accent mr-2 align-middle"></span>
              Visit Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start text-white/70">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 mr-3" />
                <address className="not-italic">
                  74 Adeniyi Close
                  <br />
                  Ogba
                  <br />
                  Lagos, Nigeria
                </address>
              </div>

              <div className="flex items-center text-white/70">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mr-3" />
                <a
                  href="tel:+2341234567890"
                  className="hover:text-accent transition-colors"
                >
                  +234 123 456 7890
                </a>
              </div>

              <div className="flex items-center text-white/70">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mr-3" />
                <a
                  href="mailto:info@caffa.example"
                  className="hover:text-accent transition-colors"
                >
                  caffahouseng.gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden mb-16 border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3762379064897!2d3.3349877!3d6.6214636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324570ea1da8!2sOgba%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1627299569938!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="CaFFa House Location"
          ></iframe>
        </div>

        {/* Copyright and credits */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {currentYear} CaFFa House - Get Cultured. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
