import Head from 'next/head';
import { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <Head>
        <title>IT Solutions - Tworzenie Stron Internetowych | Next.js, WordPress</title>
        <meta name="description" content="Profesjonalne tworzenie stron internetowych w Next.js, WordPress, WooCommerce. Sklepy internetowe i aplikacje webowe Java Spring Boot. Od 2000 zł za wizytówkę." />
        <meta name="keywords" content="tworzenie stron internetowych, strony www na zamówienie, Next.js, WordPress, WooCommerce, sklepy internetowe, aplikacje webowe Java Spring Boot, wizytówki internetowe, optymalizacja SEO" />
        <meta name="author" content="IT Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsolutions.pl/" />
        <meta property="og:title" content="IT Solutions - Profesjonalne Strony Internetowe" />
        <meta property="og:description" content="Tworzymy strony internetowe, które rozwijają Twój biznes. Next.js, WordPress, WooCommerce, aplikacje Java Spring Boot. Sprawdź nasze realizacje!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://itsolutions.pl/" />
        <meta property="twitter:title" content="IT Solutions - Profesjonalne Strony Internetowe" />
        <meta property="twitter:description" content="Tworzymy strony internetowe, które rozwijają Twój biznes. Next.js, WordPress, WooCommerce, aplikacje Java Spring Boot." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </Head>

      <main className="min-h-screen w-full max-w-full overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm w-full max-w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    className="text-blue-600"
                    fill="currentColor"
                  >
                    {/* Circuit board pattern background */}
                    <rect width="40" height="40" fill="url(#circuitGradient)" rx="8"/>
                    
                    {/* Circuit lines */}
                    <path d="M8 12h8M8 20h12M8 28h6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
                    <path d="M24 8v8M32 8v8M28 20h8M28 28h8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
                    
                    {/* Central processor chip */}
                    <rect x="16" y="16" width="8" height="8" fill="currentColor" opacity="0.8" rx="1"/>
                    
                    {/* Connection dots */}
                    <circle cx="8" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="8" cy="20" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="8" cy="28" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="24" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="32" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="28" cy="20" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="28" cy="28" r="1.5" fill="currentColor" opacity="0.6"/>
                    
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1"/>
                        <stop offset="50%" stopColor="#1E40AF" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    <span className="text-blue-600">IT</span> Solutions
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#about" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    O nas
                  </a>
                  <a href="#services" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    Usługi
                  </a>
                  <a href="#portfolio" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    Portfolio
                  </a>
                  <a href="#blog" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    Blog
                  </a>
                  <a href="#contact" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    Kontakt
                  </a>
                  <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Skontaktuj się
                  </a>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden flex-shrink-0 ml-4">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
                  aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
                >
                  {isMobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                O nas
              </a>
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Usługi
              </a>
              <a
                href="#portfolio"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#blog"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Kontakt
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors text-center"
              >
                Skontaktuj się
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

// Static generation for better performance
export async function getStaticProps() {
  return {
    props: {},
  };
}

