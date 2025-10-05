# Business Card Website

Profesjonalna strona wizytówka firmy stworzona w Next.js z Tailwind CSS.

## 🚀 Funkcje

- **Responsywny design** - Dostosowany do wszystkich urządzeń
- **Nowoczesny interfejs** - Czytelny i profesjonalny wygląd
- **Animacje** - Płynne efekty wizualne z Framer Motion
- **Formularz kontaktowy** - Integracja z Formspree
- **SEO-optimized** - Meta tagi i semantyczny HTML
- **Szybkość** - Zoptymalizowane obrazy i kod

## 📋 Wymagania

- Node.js 18+ 
- npm lub yarn

## 🛠 Instalacja

1. **Sklonuj repozytorium:**
   ```bash
   git clone <repository-url>
   cd business-card-website
   ```

2. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

3. **Skonfiguruj formularz kontaktowy:**
   
   **Opcja A: Formspree (zalecane)**
   - Przejdź na [formspree.io](https://formspree.io)
   - Utwórz nowy formularz
   - Skopiuj ID formularza
   - W pliku `components/Contact.js` zastąp `YOUR_FORM_ID` swoim ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

   **Opcja B: Netlify Forms**
   - Dodaj `netlify` do atrybutu `name` w formularzu
   - Dodaj ukryte pole: `<input type="hidden" name="_to" value="your-email@example.com" />`

4. **Uruchom projekt lokalnie:**
   ```bash
   npm run dev
   ```

5. **Otwórz w przeglądarce:**
   ```
   http://localhost:3000
   ```

## 🏗 Budowanie

```bash
# Budowanie dla produkcji
npm run build

# Eksport statyczny (dla Netlify)
npm run export
```

## 🚀 Wdrożenie

### Vercel (zalecane)

1. **Zainstaluj Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Wdróż:**
   ```bash
   vercel
   ```

3. **Lub połącz z GitHub:**
   - Przejdź na [vercel.com](https://vercel.com)
   - Połącz swoje repozytorium GitHub
   - Vercel automatycznie wdroży projekt

### Netlify

1. **Zbuduj projekt:**
   ```bash
   npm run export
   ```

2. **Wdróż folder `out`:**
   - Przejdź na [netlify.com](https://netlify.com)
   - Przeciągnij folder `out` do obszaru wdrożenia
   - Lub połącz z GitHub dla automatycznego wdrażania

## 🎨 Dostosowywanie

### Kolory
Edytuj `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Zmień kolory główne
    500: '#3b82f6', // Niebieski
    600: '#2563eb',
  }
}
```

### Treść
- **Nazwa firmy:** `pages/index.js` (title, meta tags)
- **Hero section:** `components/Hero.js`
- **O nas:** `components/About.js`
- **Usługi:** `components/Services.js`
- **Kontakt:** `components/Contact.js`
- **Stopka:** `components/Footer.js`

### Obrazy
Zastąp URL obrazów w komponentach:
- Hero: `components/Hero.js` linia 12
- About: `components/About.js` linia 25

### Ikony
Użyj [Heroicons](https://heroicons.com) lub [Lucide](https://lucide.dev) dla spójnych ikon.

## 📱 Responsywność

Projekt używa Tailwind CSS z breakpointami:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

## ⚡ Optymalizacja

- **Obrazy:** Używa Next.js Image component
- **Fonty:** Google Fonts z preconnect
- **CSS:** Tailwind CSS z purging
- **JavaScript:** Code splitting automatyczny

## 🔧 Rozwiązywanie problemów

### Błąd formularza
- Sprawdź czy ID Formspree jest poprawne
- Sprawdź czy formularz jest aktywny na Formspree
- Sprawdź konsolę przeglądarki pod kątem błędów

### Problemy z obrazami
- Sprawdź czy URL obrazów są dostępne
- Użyj lokalnych obrazów w folderze `public/`

### Problemy z wdrożeniem
- Sprawdź czy wszystkie zależności są zainstalowane
- Sprawdź logi wdrożenia na platformie

## 📄 Licencja

Ten projekt jest dostępny na licencji MIT.

## 🤝 Wsparcie

Jeśli masz pytania lub potrzebujesz pomocy:
- Sprawdź dokumentację Next.js
- Sprawdź dokumentację Tailwind CSS
- Sprawdź dokumentację Formspree

---

**Miłego kodowania! 🎉**

