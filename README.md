# **HTML Reader**

O aplicație full-stack realizată cu **Next.js**, **TypeScript** și **Material UI** pentru extragerea de informații din conținut HTML folosind **regex**.

---

## **Caracteristici**
- Permite utilizatorului să introducă conținut HTML într-un formular.
- Extrage automat informații precum:
  - **Titlu** (`<title>`)
  - **Meta descriere** (`<meta name="description">`)
  - **Link-uri** (`<a href="...">`)
  - **Imagini** (`<img src="...">`)
  - **Conținut dintre tag-uri personalizate** specificate (ex.: `<p>`, `<div>`, etc.).
- Afișează rezultatele într-o interfață modernă și responsivă folosind **Material UI**.

---

## **Structura Proiectului**

```plaintext
html-reader/
├─ src/
│  ├─ pages/
│  │  ├─ index.tsx        // Pagina principală cu UI
│  │  ├─ _app.tsx         // Custom App pentru Next.js, cu ThemeProvider
│  │  └─ api/
│  │     └─ extract.ts    // Endpoint API pentru procesarea HTML-ului
│  ├─ lib/
│  │  ├─ regexExtractors.ts // Funcții helper pentru regex
│  │  ├─ theme.ts           // Tema MUI
│  │  └─ types.ts           // Definiții de tipuri TypeScript
│  ├─ styles/
│  │  └─ globals.css        // Stiluri globale
│  └─ public/
│     └─ favicon.ico        // Resurse statice opționale
├─ tsconfig.json
├─ package.json
└─ README.md                // Documentația proiectului
