import { motion } from 'framer-motion';
import Image from 'next/image';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Restauracja Bella Vista",
      category: "WordPress",
      description: "Elegancka strona restauracji z systemem rezerwacji online, galerią zdjęć i menu. Zwiększenie rezerwacji o 60%.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "WooCommerce", "Custom Theme", "SEO"],
      results: ["+60% rezerwacji", "+40% ruchu organicznego", "4.8/5 ocena klientów"],
      link: "#"
    },
    {
      id: 2,
      title: "Sklep Moda Fashion",
      category: "WooCommerce",
      description: "Kompletny sklep internetowy z butikiem odzieżowym. Integracja z systemami płatności i zarządzania magazynem.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["WooCommerce", "Stripe", "Mailchimp", "Google Analytics"],
      results: ["+150% sprzedaży", "+80% konwersji", "ROI 300%"],
      link: "#"
    },
    {
      id: 3,
      title: "Agencja Marketingowa Pro",
      category: "Next.js",
      description: "Nowoczesna wizytówka agencji z portfolio projektów, blogiem i formularzem kontaktowym. Szybkie ładowanie i SEO.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Headless CMS", "Vercel"],
      results: ["+90% szybkość ładowania", "+50% ruchu", "100% Lighthouse Score"],
      link: "#"
    },
    {
      id: 4,
      title: "System Zarządzania Firmą",
      category: "Java Spring Boot",
      description: "Kompleksowa aplikacja webowa do zarządzania projektami, klientami i fakturowaniem dla firmy konsultingowej.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Java Spring Boot", "Angular", "PostgreSQL", "Docker"],
      results: ["-70% czasu na administrację", "+200% produktywność", "99.9% uptime"],
      link: "#"
    },
    {
      id: 5,
      title: "Gabinet Stomatologiczny",
      category: "WordPress",
      description: "Profesjonalna strona gabinetu z systemem umawiania wizyt, galerią prac i informacjami o usługach.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddceeee3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "Booking Plugin", "SSL", "Mobile First"],
      results: ["+80% umówień online", "+45% nowych pacjentów", "5/5 ocena Google"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nasze realizacje - Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zobacz przykłady naszych projektów i przekonaj się, jak możemy pomóc 
            w rozwoju Twojego biznesu online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 text-sm mb-2">Technologie:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 text-sm mb-2">Wyniki:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={project.link}
                  className="w-full btn-primary text-center block"
                >
                  Zobacz projekt
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
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Chcesz podobne wyniki dla swojej firmy?
            </h3>
            <p className="text-gray-600 mb-6">
              Skontaktuj się z nami i omówmy Twój projekt. Każda strona to indywidualne 
              podejście i dostosowanie do potrzeb Twojego biznesu.
            </p>
            <a
              href="#contact"
              className="btn-primary"
            >
              Rozpocznij projekt
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

