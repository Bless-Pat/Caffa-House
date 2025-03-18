
import { cn } from "@/lib/utils";
import { Calendar, Users, Music, Coffee } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-pattern -z-10"></div>
      
      <div className="caffa-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            COMMUNITY EXPERIENCES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Event Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Network and chill at our bi-monthly community mixer—Culture Night, featuring captivating themed conversations and fun activities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="/lovable-uploads/f48a0676-0794-4d92-a0eb-3dd776b375db.png" 
                alt="Event at Caffa" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-block px-3 py-1 text-xs font-medium bg-accent text-secondary rounded-full mb-2">
                    #CaFFaNChill
                  </div>
                  <h3 className="text-2xl font-bold text-white">Culture Night</h3>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white z-10">
              <img 
                src="/lovable-uploads/f00a031a-6275-4985-8310-61f57a6e20a4.png" 
                alt="Chess at Caffa" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="space-y-8">
              <div className="event-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Bi-Monthly Meetups</h3>
                    <p className="text-muted-foreground">
                      Join us every other month for themed conversations, networking, and fun activities with like-minded individuals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="event-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Games</h3>
                    <p className="text-muted-foreground">
                      Challenge others to friendly games of chess, scrabble, and other board games in our relaxed environment.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="event-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Live Music & DJ</h3>
                    <p className="text-muted-foreground">
                      Enjoy curated playlists and occasional live performances that set the perfect ambiance for socializing.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="event-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Coffee Tasting</h3>
                    <p className="text-muted-foreground">
                      Discover the nuances of different coffee blends with our occasional coffee tasting sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://instagram.com/caffahouseng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="caffa-btn caffa-btn-primary"
              >
                Follow Us for Event Updates
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
