HTML Reader

O aplicație full-stack realizată cu Next.js, TypeScript și Material UI pentru extragerea de informații din conținut HTML folosind regex.

Caracteristici
	•	Permite utilizatorului să introducă conținut HTML într-un formular.
	•	Extrage automat informații precum:
	•	Titlu (<title>)
	•	Meta descriere (<meta name="description">)
	•	Link-uri (<a href="...">)
	•	Imagini (<img src="...">)
	•	Conținut dintre tag-uri personalizate specificate (ex.: <p>, <div>, etc.).
	•	Afișează rezultatele într-o interfață modernă și responsivă folosind Material UI.

Structura Proiectului

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

Tehnologii Utilizate
	•	Framework Front-End/Back-End: Next.js
	•	Limbaj: TypeScript
	•	UI Library: Material UI
	•	Regex: Folosit pentru extragerea datelor din HTML

Instalare și Rulare
	1.	Clonarea proiectului
Clonează acest repository local:

git clone https://github.com/username/html-reader.git
cd html-reader


	2.	Instalarea dependențelor
Rulează comanda:

npm install


	3.	Rularea aplicației local
Lansează serverul de dezvoltare:

npm run dev

Aplicația va fi disponibilă la:
http://localhost:3000

	4.	Build pentru producție
Pentru a crea un build de producție:

npm run build
npm start

Cum Funcționează?
	1.	Introdu HTML-ul
Utilizatorul introduce conținut HTML în formularul oferit.
	2.	Extragerea Datelor
La apăsarea butonului “Analizează”, aplicația trimite o cerere POST către API-ul intern /api/extract.
	3.	Procesarea Backend
Endpoint-ul /api/extract procesează conținutul HTML folosind regex pentru a extrage:
	•	Titlu
	•	Meta descriere
	•	Link-uri
	•	Imagini
	•	Conținutul dintre tag-uri personalizate.
	4.	Afișarea Rezultatelor
Rezultatele sunt afișate într-o interfață ordonată, folosind componente Material UI.

Exemple de Input/Output

Input:
HTML introdus de utilizator:

<!DOCTYPE html>
<html>
  <head>
    <title>Pagina de Test</title>
    <meta name="description" content="Aceasta este o meta descriere.">
  </head>
  <body>
    <a href="https://example.com">Link 1</a>
    <img src="image1.jpg" />
    <div>Conținut într-un div.</div>
  </body>
</html>

Output:

Titlu: Pagina de Test
Meta Descriere: Aceasta este o meta descriere.

Link-uri:
- https://example.com

Imagini:
- image1.jpg

Conținut pentru <div>:
- Conținut într-un div.

Extensii și Îmbunătățiri Opționale
	•	Adaugă validări pentru a verifica dacă HTML-ul introdus este corect.
	•	Adaugă notificări (ex.: Snackbar din MUI) pentru a indica erori sau succes.
	•	Extinde regex-urile pentru a extrage și alte elemente (script-uri, style-uri, etc.).
	•	Integrează teste unitare folosind Jest.

Probleme Frecvente
	•	Eroare “Cannot find module”
Asigură-te că:
	•	baseUrl și paths sunt configurate corect în tsconfig.json.
	•	Ai repornit serverul (npm run dev) după modificări.
	•	Rezultatele sunt goale
Verifică sintaxa HTML-ului introdus. Asigură-te că tag-urile sunt închise corect.

Autor

Proiect dezvoltat de Vasile Bordei.
Contact: vasilebordei@student.usv.ro

🎉 Spor la codare!
