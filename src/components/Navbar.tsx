import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-3 bg-black/90 backdrop-blur-sm shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="caffa-container flex items-center justify-between">
        <div className="flex items-center space-x-3 mb-8">
          <div className="font-serif font-bold text-2xl tracking-tight text-white">
            CaFFa
            <span className="block text-sm font-normal mt-0.5 text-accent">
              Get Cultured
            </span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className=" text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#workspace"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Workspace
          </a>
          <a
            href="#booking"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Book Now
          </a>
          <a
            href="#visit"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Visit
          </a>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <a
              href="#about"
              className="text-white block text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white block text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#workspace"
              className="text-white block text-sm font-medium hover:text-primary transition-colors"
            >
              Workspace
            </a>
            <a
              href="#booking"
              className="text-white block text-sm font-medium hover:text-primary transition-colors"
            >
              Book Now
            </a>
            <a
              href="#visit"
              className="text-white block text-sm font-medium hover:text-primary transition-colors"
            >
              Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
