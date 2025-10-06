import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Wizytówki w Next.js",
      description: "Szybkie, responsywne i SEO-friendly strony wizytówkowe. Idealne dla małych firm i freelancerów. Od 2000 zł.",
      features: ["Responsywny design", "Optymalizacja SEO", "Szybkie ładowanie", "Łatwa edycja treści"],
      price: "od 2000 zł"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Strony WordPress",
      description: "Profesjonalne strony z systemem CMS. Łatwe zarządzanie treścią i możliwość rozbudowy. Od 3000 zł.",
      features: ["Custom themes", "Panel administracyjny", "Integracje zewnętrzne", "Backup i bezpieczeństwo"],
      price: "od 3000 zł"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Sklepy WooCommerce",
      description: "Kompletne sklepy internetowe z integracją płatności, zarządzaniem zamówieniami i optymalizacją konwersji.",
      features: ["Integracja płatności", "Zarządzanie produktami", "Optymalizacja konwersji", "Analytics i raporty"],
      price: "od 5000 zł"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Aplikacje Java Spring Boot",
      description: "Skalowalne aplikacje webowe z Angular/React/Next.js. Idealne dla średnich i dużych przedsiębiorstw.",
      features: ["Architektura mikroserwisów", "Bezpieczeństwo", "Skalowalność", "Integracje API"],
      price: "od 15000 zł"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nasze usługi - Tworzenie stron internetowych
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specjalizujemy się w tworzeniu profesjonalnych stron internetowych, sklepów online 
            i aplikacji webowych. Wybierz technologię odpowiednią dla Twojego biznesu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-primary-600">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">{service.price}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">W cenie:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6">
                <a
                  href="#contact"
                  className="w-full btn-primary text-center block"
                >
                  Wyceń projekt
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-primary"
          >
            Dowiedz się więcej
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

