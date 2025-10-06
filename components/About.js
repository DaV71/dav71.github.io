import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            O nas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Poznaj naszą historię i wartości, które przyświecają naszej pracy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Zespół IT Solutions - specjaliści od tworzenia stron internetowych"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              IT Solutions - Tworzenie stron internetowych od 2014 roku
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              Od ponad 10 lat specjalizujemy się w tworzeniu profesjonalnych stron internetowych 
              i aplikacji webowych. Nasza firma powstała z pasji do nowoczesnych technologii 
              i chęci pomocy przedsiębiorcom w rozwoju ich biznesu online.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Zespół doświadczonych programistów, projektantów UX/UI i specjalistów SEO 
              tworzy strony, które nie tylko wyglądają profesjonalnie, ale także 
              generują realne wyniki biznesowe. Każdy projekt traktujemy indywidualnie, 
              dostosowując rozwiązania do specyfiki branży i celów klienta.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Nasze wartości:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Jakość ponad wszystko - używamy tylko sprawdzonych technologii</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Transparentność - jasne ceny i terminowe realizacje</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Wsparcie po realizacji - pomagamy w rozwoju i utrzymaniu</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Stron internetowych</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Sklepów WooCommerce</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
                <div className="text-sm text-gray-600">Aplikacji Java</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

