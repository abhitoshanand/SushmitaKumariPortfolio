import { Mail, Linkedin, Phone, ArrowDown } from 'lucide-react';

export function Profile() {
  return (
    <section id="profile" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16">
      <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden animate-fade-in hover:scale-105 transition-transform duration-300 border-4 border-secondary">
        <img
          src="/IMG-20241116-WA0008.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left animate-slide-up">
        <p className="text-lg font-semibold text-primary dark:text-light mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white">Sushmita Kumari</h1>
        <p className="text-2xl text-primary dark:text-light mb-8">English Teacher</p>
        <div className="flex gap-4 justify-center md:justify-start mb-8">
          <button onClick={() => window.open('/Sushmita_Kumari.pdf')} className="btn-secondary">
            Download CV
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Contact Info
          </button>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="tel:+919852982926"
            className="text-primary hover:text-secondary dark:text-light dark:hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
          >
            <Phone size={24} />
          </a>
          <a
            href="mailto:sushmitakumari1604@gmail.com"
            className="text-primary hover:text-secondary dark:text-light dark:hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sushmita-kumari-b9028716a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary dark:text-light dark:hover:text-secondary transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <ArrowDown className="text-secondary dark:text-light" size={24} />
        </div>
      </div>
    </section>
  );
}
