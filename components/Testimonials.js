import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      position: "Dyrektor Generalny",
      company: "TechCorp Sp. z o.o.",
      content: "Współpraca z Twoją Firmą przyniosła nam niesamowite rezultaty. Ich profesjonalne podejście i innowacyjne rozwiązania pomogły nam zwiększyć efektywność o 40% w ciągu pierwszych 6 miesięcy.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michał Nowak",
      position: "Prezes Zarządu",
      company: "Innova Solutions",
      content: "Zespół wykazał się niezwykłą wiedzą techniczną i kreatywnością. Projekt został zrealizowany na czas i przekroczył nasze oczekiwania. Polecam każdemu, kto szuka profesjonalnych usług.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      position: "Dyrektor Marketingu",
      company: "Digital Agency Pro",
      content: "Szkolenia przeprowadzone przez Twoją Firmę były na najwyższym poziomie. Nasz zespół zdobył nowe umiejętności, które bezpośrednio przełożyły się na wyniki sprzedażowe. Bardzo polecam!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Piotr Zieliński",
      position: "Właściciel",
      company: "StartupHub",
      content: "Wsparcie techniczne jest dostępne 24/7 i zawsze otrzymujemy szybką pomoc. To daje nam pewność, że nasze systemy działają bez przerw. Profesjonalizm na najwyższym poziomie.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Magdalena Krawczyk",
      position: "Dyrektor Finansowy",
      company: "FinanceMax",
      content: "Konsulting biznesowy pomógł nam zoptymalizować procesy i zaoszczędzić znaczące koszty. Zespół wykazał się głęboką wiedzą branżową i praktycznym podejściem do rozwiązywania problemów.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Opinie naszych klientów
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zobacz, co mówią o nas nasi zadowoleni klienci
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          >
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {renderStars(testimonials[currentIndex].rating)}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              &quot;{testimonials[currentIndex].content}&quot;
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <Image
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary-600 font-medium">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary-600"
            aria-label="Poprzednia opinia"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary-600"
            aria-label="Następna opinia"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Dołącz do grona zadowolonych klientów
            </h3>
            <p className="text-gray-600 mb-4">
              Przekonaj się sam, dlaczego nasi klienci polecają nas innym
            </p>
            <a
              href="#contact"
              className="btn-primary"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

