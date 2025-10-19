'use client';
import React, { useState } from 'react';
import { Sparkles, Instagram, MessageCircle, Star, Award, Camera, Heart, MapPin, Phone } from 'lucide-react';

const MastuTouchWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = "2348012345678"; // REPLACE THIS
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Mastu%20Touch,%20I'd%20like%20to%20book%20a%20makeup%20session`;
  const instagramLink = "https://instagram.com/mastu_touch_";

  return (
    <div className="min-h-screen" style={{backgroundColor: '#1a0b2e'}}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-fuchsia-100 backdrop-blur-sm border-b border-purple-900 /30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Sparkles className="text-purple-900 " size={32} />
              <div>
                <div className="text-2xl font-bold text-purple-900 ">Mastu Touch</div>
                <div className="text-xs text-black">Professional Makeup Artist</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-purple-900  hover:text-purple-900  transition">Services</a>
              <a href="#portfolio" className="text-purple-800 hover:text-purple-800 transition">Portfolio</a>
              <a href="#contact" className="text-purple-800 hover:text-purple-800 transition">Contact</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-800 text-fuchsia-100 px-6 py-3 rounded-full font-bold transition flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Book Now
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-purple-800/30 pt-4">
              <a href="#services" className="block text-purple-900  py-2">Services</a>
              <a href="#portfolio" className="block text-purple-900  py-2">Portfolio</a>
              <a href="#contact" className="block text-purple-900  py-2">Contact</a>
              <a href={whatsappLink} className="block bg-purple-800 text-purple-900 px-6 py-3 rounded-full font-bold text-center">
                Book Now
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Like the example */}
      <section className="relative pt-20 pb-0 overflow-hidden" style={{background: 'linear-gradient(135deg, #fde8f5 0%, #f5e6ff 50%, #fff5e6 100%)'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
            {/* Left - Main Image */}
            <div className="relative lg:mt-0 mt-10 order-1 lg:order-1">
            <div className="inline-flex lg:hidden  mb-5  items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-900  px-4 py-2 rounded-full shadow-sm">
                <Sparkles size={16} className="text-purple-600" />
                <span className="text-sm text-purple-800 font-semibold tracking-wide">TOP BRANDS</span>
              </div>
              {/* Decorative leaves - top left */}
              <div className="absolute -top-10 -left-10 w-32 h-40 opacity-60 z-10">
                <svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 Q30 40 40 70 T50 130" stroke="#7cb342" strokeWidth="3" fill="none"/>
                  <ellipse cx="35" cy="50" rx="15" ry="30" fill="#7cb342" opacity="0.8"/>
                  <ellipse cx="45" cy="80" rx="12" ry="28" fill="#689f38" opacity="0.7"/>
                </svg>
              </div>

              {/* Decorative leaves - bottom right */}
              <div className="absolute -bottom-20 -right-10 w-40 h-48 opacity-50 z-10 rotate-45">
                <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 10 Q40 50 50 90 T60 150" stroke="#7cb342" strokeWidth="3" fill="none"/>
                  <ellipse cx="45" cy="60" rx="18" ry="35" fill="#7cb342" opacity="0.8"/>
                  <ellipse cx="55" cy="100" rx="15" ry="32" fill="#689f38" opacity="0.7"/>
                </svg>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-20 right-10 w-16 h-16 opacity-40">
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="25" fill="#e1bee7" opacity="0.5"/>
                  <circle cx="30" cy="30" r="15" fill="#ce93d8" opacity="0.6"/>
                </svg>
              </div>

              <div className="absolute bottom-32 left-10 w-12 h-12 opacity-30">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="20" fill="#fff9c4" opacity="0.6"/>
                  <circle cx="25" cy="25" r="12" fill="#fff59d" opacity="0.7"/>
                </svg>
              </div>

              {/* Main Hero Image */}
              <div className="relative z-0 ">
  <img
    src="https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872994/IMG_7576_esdqox.jpg"
    alt="Beautiful makeup by Mastu Touch"
    className="w-full h-full object-contain rounded-3xl"
    onError={(e) => {
      e.currentTarget.src =
        "https://via.placeholder.com/900x1000/f8bbd0/FFFFFF?text=Mastu+Touch";
    }}
  />
</div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8 order-2 lg:order-2 lg:py-12 py-10">
              <div className=" lg:inline-flex hidden items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-900  px-4 py-2 rounded-full shadow-sm">
                <Sparkles size={16} className="text-purple-600" />
                <span className="text-sm text-purple-800 font-semibold tracking-wide">TOP BRANDS</span>
              </div>

              <div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  Spotless Beauty
                  <br />
                  For Your
                  <br />
                  <span className="text-purple-800">Healthy Skin</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Professional makeup artistry that enhances your natural beauty. From bridal glam to everyday elegance, 
                  let me create the perfect look for you.
                </p>
              </div>

              <div className="flex flex-wrap lg:gap-4 gap-2">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-800  text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition"
                >
                  Book Now
                </a>
                <a 
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition"
                >
                  Read More
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">4+</div>
                  <div className="text-gray-600 text-sm">Years Pro</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} className="text-purple-600" />
                <span className="text-sm font-medium">Ilorin, Nigeria • Available Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#9333EA" fillOpacity="0.1"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-fuchsia-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Sparkles className="mx-auto mb-4 text-purple-900" size={40} />
            <h2 className="text-5xl font-bold text-purple-900 mb-4">My Services</h2>
            <p className="text-xl text-purple-900 ">Making you look and feel amazing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {icon: Heart, title: "Bridal Makeup", desc: "Flawless looks for your special day", color: "yellow"},
              {icon: Camera, title: "Photoshoot Glam", desc: "Camera-ready professional makeup", color: "pink"},
              {icon: Sparkles, title: "Special Events", desc: "Stand out at any celebration", color: "purple"},
              {icon: Star, title: "Makeup Classes", desc: "Learn pro techniques from me", color: "yellow"}
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-[#1a0b2e] p-8 rounded-2xl border hover:border-purple-900  transition shadow-xl">
                  <div className={`w-16 h-16 bg-${service.color}-500 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-purple-900 ">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-20 bg-fuchsia-100" >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Camera className="mx-auto mb-4 text-purple-900 " size={40} />
            <h2 className="text-5xl font-bold text-purple-900 mb-4">My Work</h2>
            <p className="text-xl text-purple-900 ">Recent transformations</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760873019/IMG_7572_uur3pf.jpg",
              "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760873009/IMG_7573_dtxxa9.jpg",
              "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872998/IMG_7578_i9q76n.jpg",
              "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872994/IMG_7577_zq91jq.jpg",
              "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872996/IMG_7579_xvprzt.jpg",
              "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872993/IMG_7580_lba95v.jpg",
              "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872997/IMG_7575_cz3e5v.jpg",
              "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872993/IMG_7580_lba95v.jpg",
              "https://res.cloudinary.com/dy9yoeiq2/image/upload/v1760872994/IMG_7576_esdqox.jpg"
            ].map((img, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border-4 border-purple-700 hover:border-purple-900  transition shadow-xl group cursor-pointer">
                <img 
                  src={img}
                  alt={`Makeup work ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/600/9333EA/FFFFFF?text=Work+${i+1}`;
                  }}
                />
                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/60 transition flex items-center justify-center">
                  <Heart className="text-white opacity-0 group-hover:opacity-100 transition" size={48} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center  text-left gap-3 text-purple-900  hover:text-yellow-400 font-bold text-xl transition"
            >
              <Instagram size={28} />
              See more on Instagram @mastu_touch_
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-fuchsia-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Sparkles className="mx-auto mb-6 text-purple-900 " size={56} />
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Glow?</h2>
          <p className="text-2xl text-purple-900  mb-10">
            Book your makeup session today and let's create magic! ✨
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-900  hover:bg-yellow-600 text-purple-900 px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 shadow-xl transition"
            >
              <MessageCircle size={28} />
              Book on WhatsApp
            </a>
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 hover:bg-purple-600 text-white px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 transition"
            >
              <Instagram size={28} />
              Follow Me
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 text-purple-900 ">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-purple-900 " />
              <span>Ilorin, Nigeria</span>
            </div>
            <p>Available for bookings nationwide and internationally</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-900 " style={{backgroundColor: '#1a0b2e'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-purple-900 " size={32} />
            <span className="text-2xl font-bold text-white">Mastu Touch</span>
          </div>
          <p className="text-purple-300 mb-6">Professional Makeup Artistry • Ilorin, Nigeria</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href={whatsappLink} className="w-12 h-12 bg-purple-900  hover:bg-purple-900  rounded-full flex items-center justify-center transition">
              <MessageCircle className="text-white" size={24} />
            </a>
            <a href={instagramLink} className="w-12 h-12 bg-purple-900  hover:bg-purple-900  rounded-full flex items-center justify-center transition">
              <Instagram className="text-white" size={24} />
            </a>
          </div>
          <p className="text-purple-400 text-sm">&copy; 2025 Mastu Touch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MastuTouchWebsite;