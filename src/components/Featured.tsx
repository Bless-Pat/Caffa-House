
import { useState } from "react";
import { cn } from "@/lib/utils";

const coffees = [
  {
    id: 1,
    name: "Ritual Blend",
    description: "Our signature blend, prepared with a traditional method that brings out the richness of the beans.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NzgzMTE1OQ&ixlib=rb-4.0.3&q=80&w=600"
  },
  {
    id: 2,
    name: "Heritage Roast",
    description: "A full-bodied, dark roast coffee with hints of chocolate and spice, a family recipe since 1954.",
    price: "$5.20",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTc0NjY2Nw&ixlib=rb-4.0.3&q=80&w=600"
  }
];

export default function Featured() {
  const [activeId, setActiveId] = useState(1);
  
  return (
    <section id="coffee" className="py-24 bg-coffee-beige relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-coffee-light/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#7D5A50_1px,transparent_1px)] opacity-[0.03] [background-size:20px_20px]"></div>
      
      <div className="caffa-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-coffee rounded-full mb-4">
            Our Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Signature Coffee
          </h2>
          <div className="w-16 h-1 bg-coffee-light mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            {coffees.map((coffee) => (
              <button
                key={coffee.id}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeId === coffee.id 
                    ? "bg-coffee text-white shadow-md" 
                    : "bg-white/70 text-coffee hover:bg-white"
                )}
                onClick={() => setActiveId(coffee.id)}
              >
                {coffee.name}
              </button>
            ))}
          </div>
          
          {coffees.map((coffee) => (
            <div 
              key={coffee.id}
              className={cn(
                "grid md:grid-cols-2 gap-8 items-center",
                "transition-all duration-500 ease-in-out",
                activeId === coffee.id ? "opacity-100" : "opacity-0 hidden"
              )}
            >
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-serif font-medium mb-4">{coffee.name}</h3>
                <p className="text-muted-foreground mb-6">{coffee.description}</p>
                
                <div className="flex items-center mb-8">
                  <span className="text-2xl font-serif text-coffee">{coffee.price}</span>
                  <div className="ml-4 h-px w-16 bg-coffee-light/50"></div>
                  <span className="ml-4 text-xs uppercase tracking-wider text-muted-foreground">Per cup</span>
                </div>
                
                <button className="px-6 py-3 bg-coffee text-white rounded-md shadow-md hover:bg-coffee-dark transition-colors duration-300">
                  Order Now
                </button>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img 
                    src={coffee.image} 
                    alt={coffee.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-coffee-light/20 -z-10"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-coffee-cream/50 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
