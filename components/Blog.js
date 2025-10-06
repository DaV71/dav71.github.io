import { motion } from 'framer-motion';
import Image from 'next/image';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Jak wybrać technologię do tworzenia strony internetowej? Poradnik 2025",
      excerpt: "Przewodnik po najpopularniejszych technologiach webowych: Next.js vs WordPress vs WooCommerce. Dowiedz się, która technologia będzie najlepsza dla Twojego biznesu.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Technologie",
      readTime: "8 min czytania",
      date: "15 stycznia 2025",
      slug: "jak-wybrac-technologie-strona-internetowa-2025"
    },
    {
      id: 2,
      title: "Optymalizacja SEO dla sklepów WooCommerce - 10 sprawdzonych metod",
      excerpt: "Poznaj najskuteczniejsze techniki SEO dla sklepów internetowych. Jak zwiększyć widoczność w Google i podnieść sprzedaż o 200% dzięki optymalizacji.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "SEO",
      readTime: "12 min czytania",
      date: "10 stycznia 2025",
      slug: "optymalizacja-seo-sklepy-woocommerce-metody"
    },
    {
      id: 3,
      title: "Next.js vs WordPress - Która technologia wygra w 2025 roku?",
      excerpt: "Szczegółowe porównanie Next.js i WordPress. Zalety, wady i przypadki użycia każdej z technologii. Kiedy wybrać Next.js, a kiedy WordPress?",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Porównania",
      readTime: "10 min czytania",
      date: "5 stycznia 2025",
      slug: "nextjs-vs-wordpress-porownanie-2025"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Blog - Poradniki i wskazówki
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Najnowsze trendy w tworzeniu stron internetowych, porady SEO i wskazówki 
            techniczne dla właścicieli firm
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <a
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Czytaj więcej
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Chcesz więcej porad i wskazówek?
            </h3>
            <p className="text-gray-600 mb-6">
              Zapisz się do naszego newslettera i otrzymuj najnowsze artykuły 
              o tworzeniu stron internetowych i optymalizacji SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Twój email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Zapisz się
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

