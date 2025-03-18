
import { useState } from "react";
import { cn } from "@/lib/utils";

// Generate time slots from 8am to 5pm
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour <= 16; hour++) {
    const timeString = `${hour}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    const displayHour = hour > 12 ? hour - 12 : hour;
    const displayTime = `${displayHour}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    
    slots.push({
      id: timeString,
      time: displayTime,
      available: Math.random() > 0.3 // Randomly set some as unavailable for demo
    });
  }
  return slots;
};

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("salon");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const timeSlots = generateTimeSlots();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${selectedService} on ${selectedDate} at ${selectedTime}`);
    // Here you would typically send this data to your backend
  };
  
  return (
    <section id="booking" className="py-24 wood-gradient text-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2) 1px,transparent 1px)] opacity-[0.1] [background-size:20px_20px]"></div>
      
      <div className="caffa-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-primary rounded-full mb-4">
            Reserve Now
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Book Your Session
          </h2>
          <div className="w-16 h-1 bg-white/50 mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Book your salon or workspace session now. We're open from 8:00 AM to 5:00 PM daily.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card bg-white/10 p-8 rounded-2xl">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Service</label>
                    <div className="flex rounded-md overflow-hidden">
                      <button 
                        type="button"
                        className={cn(
                          "flex-1 py-2 text-sm font-medium transition-colors",
                          selectedService === "salon" 
                            ? "bg-white text-primary" 
                            : "bg-white/30 hover:bg-white/40"
                        )}
                        onClick={() => setSelectedService("salon")}
                      >
                        Salon
                      </button>
                      <button 
                        type="button"
                        className={cn(
                          "flex-1 py-2 text-sm font-medium transition-colors",
                          selectedService === "workspace" 
                            ? "bg-white text-primary" 
                            : "bg-white/30 hover:bg-white/40"
                        )}
                        onClick={() => setSelectedService("workspace")}
                      >
                        Workspace
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                    <input 
                      type="date" 
                      id="date"
                      className="w-full px-4 py-2 bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Time</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          className={cn(
                            "booking-time-btn",
                            slot.available 
                              ? selectedTime === slot.id 
                                ? "selected" 
                                : "available"
                              : "unavailable"
                          )}
                          onClick={() => slot.available && setSelectedTime(slot.id)}
                          disabled={!slot.available}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-2 bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-2 bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full px-4 py-2 bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  type="submit"
                  className="w-full py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors"
                >
                  Confirm Booking - ₦2,000
                </button>
                <p className="text-center text-sm mt-2 text-white/70">
                  You'll receive a confirmation email once your booking is processed
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
