import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function BlogIndex({ posts }) {
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
        <title>Blog - IT Solutions | Poradniki i wskazówki</title>
        <meta name="description" content="Najnowsze trendy w tworzeniu stron internetowych, porady SEO i wskazówki techniczne dla właścicieli firm. Next.js, WordPress, WooCommerce." />
        <meta name="keywords" content="blog IT Solutions, poradniki tworzenie stron, Next.js poradniki, WordPress wskazówki, SEO optymalizacja, WooCommerce" />
        <meta name="author" content="IT Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsolutions.pl/blog" />
        <meta property="og:title" content="Blog - IT Solutions | Poradniki i wskazówki" />
        <meta property="og:description" content="Najnowsze trendy w tworzeniu stron internetowych, porady SEO i wskazówki techniczne dla właścicieli firm." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://itsolutions.pl/blog" />
        <meta property="twitter:title" content="Blog - IT Solutions | Poradniki i wskazówki" />
        <meta property="twitter:description" content="Najnowsze trendy w tworzeniu stron internetowych, porady SEO i wskazówki techniczne dla właścicieli firm." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />

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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center space-x-2">
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
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link href="/#about" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    O nas
                  </Link>
                  <Link href="/#services" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    Usługi
                  </Link>
                  <Link href="/#portfolio" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    Portfolio
                  </Link>
                  <Link href="/blog" className="text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    Blog
                  </Link>
                  <Link href="/#contact" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                    Kontakt
                  </Link>
                  <Link href="/#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Skontaktuj się
                  </Link>
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
              <Link
                href="/#about"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                O nas
              </Link>
              <Link
                href="/#services"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Usługi
              </Link>
              <Link
                href="/#portfolio"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Kontakt
              </Link>
              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors text-center"
              >
                Skontaktuj się
              </Link>
            </div>
          </div>
        </nav>

        {/* Blog Header */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Blog - Poradniki i wskazówki
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Najnowsze trendy w tworzeniu stron internetowych, porady SEO i wskazówki 
                techniczne dla właścicieli firm. Dowiedz się jak rozwijać swój biznes online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      Czytaj więcej
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8 shadow-lg max-w-2xl mx-auto border border-primary-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
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

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 40 40" 
                    className="text-blue-400"
                    fill="currentColor"
                  >
                    <rect width="40" height="40" fill="url(#circuitGradient)" rx="8"/>
                    <path d="M8 12h8M8 20h12M8 28h6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
                    <path d="M24 8v8M32 8v8M28 20h8M28 28h8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
                    <rect x="16" y="16" width="8" height="8" fill="currentColor" opacity="0.8" rx="1"/>
                    <circle cx="8" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="8" cy="20" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="8" cy="28" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="24" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="32" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="28" cy="20" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="28" cy="28" r="1.5" fill="currentColor" opacity="0.6"/>
                    <defs>
                      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1"/>
                        <stop offset="50%" stopColor="#1E40AF" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-xl font-bold">
                    <span className="text-blue-400">IT</span> Solutions
                  </span>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Profesjonalne tworzenie stron internetowych w Next.js, WordPress i WooCommerce. 
                  Rozwijamy Twój biznes online od 2014 roku.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Usługi</h3>
                <ul className="space-y-2">
                  <li><Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Strony wizytówkowe</Link></li>
                  <li><Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Sklepy internetowe</Link></li>
                  <li><Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Aplikacje webowe</Link></li>
                  <li><Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Optymalizacja SEO</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>email@itsolutions.pl</li>
                  <li>+48 123 456 789</li>
                  <li>Warszawa, Polska</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 IT Solutions. Wszystkie prawa zastrzeżone.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'blog');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract excerpt without markdown and limit to 500 characters
    let excerpt = content
      .replace(/#{1,6}\s+/g, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
      .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
      .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
      .replace(/>\s*/g, '') // Remove blockquotes
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
    
    // Limit to 500 characters and add ellipsis if needed
    excerpt = excerpt.length > 500 ? excerpt.substring(0, 500).trim() + '...' : excerpt;
    
    // Generate slug from filename
    const slug = filename.replace('.md', '');
    
    // Determine category based on content
    let category = 'Technologie';
    if (content.toLowerCase().includes('seo') || content.toLowerCase().includes('optymalizacja')) {
      category = 'SEO';
    } else if (content.toLowerCase().includes('porównanie') || content.toLowerCase().includes('vs')) {
      category = 'Porównania';
    }
    
    // Calculate read time (average 200 words per minute)
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / 200);
    
    return {
      slug,
      title: data.title || filename.replace('.md', '').replace(/-/g, ' '),
      excerpt,
      content,
      category,
      readTime: `${readTime} min czytania`,
      date: data.date || new Date().toLocaleDateString('pl-PL'),
      image: data.image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    };
  });
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return {
    props: {
      posts,
    },
  };
}
