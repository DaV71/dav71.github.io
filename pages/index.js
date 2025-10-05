import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Twoja Firma - Profesjonalne usługi biznesowe</title>
        <meta name="description" content="Innowacyjne rozwiązania dla Twojego biznesu. Profesjonalne usługi na najwyższym poziomie. Konsulting, rozwój technologii, szkolenia i wsparcie techniczne." />
        <meta name="keywords" content="firma, usługi biznesowe, konsulting, rozwój technologii, szkolenia, wsparcie techniczne" />
        <meta name="author" content="Twoja Firma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twojafirma.pl/" />
        <meta property="og:title" content="Twoja Firma - Profesjonalne usługi biznesowe" />
        <meta property="og:description" content="Innowacyjne rozwiązania dla Twojego biznesu. Profesjonalne usługi na najwyższym poziomie." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twojafirma.pl/" />
        <meta property="twitter:title" content="Twoja Firma - Profesjonalne usługi biznesowe" />
        <meta property="twitter:description" content="Innowacyjne rozwiązania dla Twojego biznesu. Profesjonalne usługi na najwyższym poziomie." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />

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

      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Twoja Firma</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#about" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    O nas
                  </a>
                  <a href="#services" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    Usługi
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
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  aria-label="Otwórz menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Hero />
        <About />
        <Services />
        <Testimonials />
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

