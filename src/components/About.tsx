
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-primary/5 -z-10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      
      <div className="caffa-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              WHO WE ARE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A Haven for Young Africans
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              At CaFFa House, we believe in creating spaces that inspire creativity, productivity, and community connection. Our name is coined from "Community aFFair" - a testament to our mission of influencing and inspiring through creativity and lifestyle.
            </p>
            
            <div className="mb-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="text-xl font-bold mb-2 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide a multifunctional space where young Africans can express themselves, connect with like-minded individuals, and experience exceptional services that enhance their lifestyle.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-white shadow-sm border border-border transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary">Create</h3>
                <p className="text-xs mt-1 text-muted-foreground">Express yourself</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white shadow-sm border border-border transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary">Connect</h3>
                <p className="text-xs mt-1 text-muted-foreground">Build community</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white shadow-sm border border-border transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary">Culture</h3>
                <p className="text-xs mt-1 text-muted-foreground">Get inspired</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/2004ef50-e523-4f00-abbb-88619b3e475e.png" 
                  alt="Caffa Environment" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="/lovable-uploads/51c09535-24ea-43de-90a2-0a0ef9c72020.png" 
                  alt="Caffa Environment" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="/lovable-uploads/b4103f36-af5b-4dac-bf08-0451007d51af.png" 
                  alt="Caffa Environment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
