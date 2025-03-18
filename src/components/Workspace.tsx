import { cn } from "@/lib/utils";
import { CheckCircle, Coffee, Wifi, Zap } from "lucide-react";

export default function Workspace() {
  return (
    <section id="workspace" className="py-24 relative overflow-hidden">
      <div className="caffa-dark absolute top-0 left-0 w-full h-full -skew-y-3 origin-top-left -mt-24 -z-10"></div>

      <div className="caffa-container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="mb-5">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full mb-4">
              WORKSPACE EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Work & Socialize in Style
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Experience serenity at our workspaces, ideal for personal and
              group productivity. Indulge in light refreshments and beverages as
              you work.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    High-Speed Internet
                  </h3>
                  <p className="text-white/70">
                    Stay connected with reliable, high-speed internet for all
                    your digital needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Uninterruptible Power
                  </h3>
                  <p className="text-white/70">
                    Never worry about power outages affecting your productivity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Premium Coffee
                  </h3>
                  <p className="text-white/70">
                    Enjoy our signature coffee blends while you work,
                    socializing, or relax.
                  </p>
                </div>
              </div>
            </div>

            <a href="#booking" className="caffa-btn caffa-btn-primary">
              Book Your Space Today
            </a>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/340ef8a9-76b6-4d4d-ab77-f8ee673c5304.png"
                alt="Caffa Workspace"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-white font-medium">
                    Community Workspace
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-1/4 -right-10 transform translate-x-1/2 -translate-y-1/2 rotate-6 z-20 w-40 shadow-xl rounded-lg border-4 border-white overflow-hidden">
              <img
                src="/lovable-uploads/5638a5fe-7271-479c-b375-ad701a4cdc2b.png"
                alt="Working at Caffa"
                className="w-full aspect-square object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 transform rotate-[-6deg] z-20 w-36 shadow-xl rounded-lg border-4 border-white overflow-hidden">
              <img
                src="/lovable-uploads/9ba07f97-5e10-46ec-80e3-ed0c0c3a1e7d.png"
                alt="Chess at Caffa"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
