# Instrukcje wdrożenia

## 🚀 Szybkie wdrożenie

### 1. Vercel (zalecane - najłatwiejsze)

1. **Przygotuj projekt:**
   ```bash
   npm install
   npm run build
   ```

2. **Wdróż na Vercel:**
   - Przejdź na [vercel.com](https://vercel.com)
   - Zaloguj się przez GitHub
   - Kliknij "New Project"
   - Wybierz swoje repozytorium
   - Vercel automatycznie wykryje Next.js i wdroży projekt

3. **Skonfiguruj formularz:**
   - Zastąp `YOUR_FORM_ID` w `components/Contact.js` swoim ID z Formspree
   - Lub użyj Netlify Forms (dodaj `netlify` do atrybutu `name`)

### 2. Netlify

1. **Przygotuj projekt:**
   ```bash
   npm install
   npm run export
   ```

2. **Wdróż na Netlify:**
   - Przejdź na [netlify.com](https://netlify.com)
   - Przeciągnij folder `out` do obszaru wdrożenia
   - Lub połącz z GitHub dla automatycznego wdrażania

3. **Skonfiguruj formularz:**
   - Dodaj `netlify` do atrybutu `name` w formularzu
   - Dodaj ukryte pole: `<input type="hidden" name="_to" value="twoj-email@example.com" />`

## 🔧 Konfiguracja formularza

### Formspree (zalecane)

1. **Utwórz konto na [formspree.io](https://formspree.io)**
2. **Utwórz nowy formularz**
3. **Skopiuj ID formularza**
4. **W pliku `components/Contact.js` zastąp:**
   ```javascript
   // Linia 25
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   **na:**
   ```javascript
   const response = await fetch('https://formspree.io/f/xpzgkqyw', {
   ```

### Netlify Forms

1. **Dodaj `netlify` do atrybutu `name` w formularzu:**
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

2. **Dodaj ukryte pole:**
   ```html
   <input type="hidden" name="_to" value="twoj-email@example.com" />
   ```

## 🎨 Dostosowywanie treści

### Zmiana nazwy firmy
1. **W `pages/index.js`:**
   - Linia 8: `<title>Twoja Firma - ...`
   - Linia 9: `<meta name="description" content="...`
   - Linia 45: `<h1 className="text-2xl font-bold text-gray-900">Twoja Firma</h1>`

2. **W `components/Hero.js`:**
   - Linia 15: `<span className="text-white">Twoja Firma</span>`

3. **W `components/Footer.js`:**
   - Linia 25: `<h3 className="text-2xl font-bold mb-4">Twoja Firma</h3>`

### Zmiana treści
- **Hero:** `components/Hero.js` linie 18-21
- **O nas:** `components/About.js` linie 20-35
- **Usługi:** `components/Services.js` linie 6-35
- **Kontakt:** `components/Contact.js` linie 45-65

### Zmiana obrazów
- **Hero:** `components/Hero.js` linia 12
- **About:** `components/About.js` linia 25

### Zmiana kolorów
Edytuj `tailwind.config.js` sekcja `colors.primary`

## 📱 Testowanie

1. **Lokalnie:**
   ```bash
   npm run dev
   ```

2. **Produkcja:**
   ```bash
   npm run build
   npm start
   ```

3. **Statyczny eksport:**
   ```bash
   npm run export
   ```

## 🔍 SEO

Projekt zawiera:
- Meta tagi Open Graph
- Meta tagi Twitter
- Strukturalne dane
- Alt teksty dla obrazów
- Semantyczny HTML

## ⚡ Optymalizacja

- Next.js Image component dla obrazów
- Preconnect do zewnętrznych domen
- Tailwind CSS z purging
- Lazy loading komponentów

## 🆘 Rozwiązywanie problemów

### Formularz nie działa
- Sprawdź konsolę przeglądarki
- Sprawdź czy ID Formspree jest poprawne
- Sprawdź czy formularz jest aktywny

### Problemy z obrazami
- Sprawdź czy URL są dostępne
- Użyj lokalnych obrazów w `public/`

### Problemy z wdrożeniem
- Sprawdź logi na platformie wdrożenia
- Sprawdź czy wszystkie zależności są zainstalowane

