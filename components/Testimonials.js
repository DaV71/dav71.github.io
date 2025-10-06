import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalRef, setIntervalRef] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      position: "Właścicielka",
      company: "Restauracja Bella Vista",
      content: "Strona internetowa stworzona przez IT Solutions przyniosła nam niesamowite rezultaty! Liczba rezerwacji online wzrosła o 60%, a nasza restauracja jest teraz widoczna w Google. Profesjonalne podejście i terminowa realizacja.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michał Nowak",
      position: "Dyrektor",
      company: "Moda Fashion Sp. z o.o.",
      content: "Sklep WooCommerce stworzony przez IT Solutions przekroczył nasze oczekiwania. Sprzedaż wzrosła o 150%, a system jest bardzo intuicyjny w obsłudze. Polecam każdemu, kto myśli o sprzedaży online.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      position: "Prezes",
      company: "Agencja Marketingowa Pro",
      content: "Wizytówka w Next.js to strzał w dziesiątkę! Strona ładuje się błyskawicznie, wygląda profesjonalnie i generuje więcej zapytań od klientów. Szkolenie z obsługi było bardzo pomocne.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Piotr Zieliński",
      position: "Właściciel",
      company: "Gabinet Stomatologiczny",
      content: "System umawiania wizyt online zmienił sposób pracy naszego gabinetu. 80% umówień odbywa się teraz przez stronę internetową. Wsparcie techniczne jest zawsze dostępne i pomocne.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Magdalena Krawczyk",
      position: "Dyrektor IT",
      company: "Firma Konsultingowa",
      content: "Aplikacja Java Spring Boot stworzona przez IT Solutions zrewolucjonizowała nasze procesy biznesowe. Czas na administrację skrócił się o 70%, a produktywność wzrosła o 200%. Najlepsza inwestycja!",
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

    setIntervalRef(interval);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Function to reset auto-rotation interval
  const resetInterval = () => {
    if (intervalRef) {
      clearInterval(intervalRef);
    }
    const newInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    setIntervalRef(newInterval);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    resetInterval();
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    resetInterval();
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

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-center w-full"
          >
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {renderStars(testimonials[currentIndex].rating)}
            </div>

            {/* Quote */}
            <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed break-words">
              &quot;{testimonials[currentIndex].content}&quot;
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <img
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
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary-600 z-10"
            aria-label="Poprzednia opinia"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary-600 z-10"
            aria-label="Następna opinia"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

