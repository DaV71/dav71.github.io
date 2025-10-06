import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Ile kosztuje stworzenie strony internetowej w Next.js?",
      answer: "Cena strony wizytówkowej w Next.js zaczyna się od 2000 zł. Ostateczna cena zależy od liczby stron, funkcjonalności i poziomu personalizacji. W cenie zawarte są: responsywny design, optymalizacja SEO, podstawowe animacje i trening z zarządzania treścią."
    },
    {
      question: "Jak długo trwa realizacja projektu strony internetowej?",
      answer: "Standardowa wizytówka w Next.js: 2-3 tygodnie. Strona WordPress: 3-4 tygodnie. Sklep WooCommerce: 4-6 tygodni. Aplikacja Java Spring Boot: 2-4 miesiące. Terminy mogą się różnić w zależności od złożoności projektu i dostępności materiałów od klienta."
    },
    {
      question: "Czy oferujecie wsparcie po uruchomieniu strony?",
      answer: "Tak! Oferujemy 3 miesiące bezpłatnego wsparcia technicznego po uruchomieniu. W ramach wsparcia pomagamy w aktualizacji treści, rozwiązywaniu problemów technicznych i podstawowych modyfikacjach. Po tym okresie oferujemy pakiety wsparcia od 200 zł/miesiąc."
    },
    {
      question: "Jakie technologie używacie do tworzenia sklepów internetowych?",
      answer: "Głównie specjalizujemy się w WooCommerce (WordPress) i PrestaShop. WooCommerce jest idealne dla większości sklepów - oferuje łatwość zarządzania, bogatą funkcjonalność i integracje z systemami płatności. PrestaShop wybieramy dla większych sklepów wymagających zaawansowanych funkcji."
    },
    {
      question: "Czy strony są zoptymalizowane pod kątem SEO?",
      answer: "Tak, wszystkie nasze strony są tworzone z myślą o SEO. Wykonujemy: optymalizację meta tagów, strukturę nagłówków H1-H6, optymalizację obrazów, szybkość ładowania, responsywność, schema markup i podstawową optymalizację treści. Oferujemy też dodatkowe usługi SEO."
    },
    {
      question: "Czy mogę samodzielnie edytować treści na stronie?",
      answer: "Oczywiście! Strony WordPress i WooCommerce mają intuicyjny panel administracyjny, gdzie możesz łatwo edytować treści, dodawać nowe strony, zarządzać produktami i blogiem. Przeprowadzamy szkolenie z obsługi panelu administracyjnego po uruchomieniu strony."
    },
    {
      question: "Co zawiera cena strony internetowej?",
      answer: "W podstawowej cenie zawarte są: projekt graficzny, kodowanie strony, responsywny design, podstawowa optymalizacja SEO, instalacja na serwerze, domena i hosting na pierwszy rok, szkolenie z obsługi oraz 3 miesiące wsparcia. Dodatkowe funkcje jak integracje czy zaawansowane animacje są wyceniane osobno."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Odpowiedzi na najważniejsze pytania dotyczące tworzenia stron internetowych 
            i współpracy z naszą firmą
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.svg
                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
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
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </h3>
            <p className="text-gray-600 mb-6">
              Skontaktuj się z nami bezpośrednio. Chętnie odpowiemy na wszystkie 
              pytania dotyczące Twojego projektu strony internetowej.
            </p>
            <a
              href="#contact"
              className="btn-primary"
            >
              Zadaj pytanie
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

