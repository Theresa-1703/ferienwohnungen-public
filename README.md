# 🏡 Ferienwohnungen im Barockpalais

Ein modernes, responsives Web-Projekt für die Vermietung exklusiver Ferienwohnungen. Diese Anwendung entstand als reales Projekt für einen Kunden und wurde für die Portfolio-Präsentation anonymisiert.

Die Live-Demo findest du hier:  
👉 [https://theresa-1703.github.io/ferienwohnungen-public/](https://theresa-1703.github.io/ferienwohnungen-public/)

---

## 🛠 Tech Stack
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
---

## 🧠 Besondere Herausforderungen & Learnings

### 1. Dynamisches Formular-Handling
Eine der spannendsten Aufgaben war die Implementierung der Buchungslogik. Ich wollte vermeiden, dass Nutzer ungültige Anfragen senden (z.B. 5 Personen für eine 4-Personen-Wohnung). Dies wurde durch ein dynamisches State-Management gelöst, das die Optionen im Dropdown in Echtzeit filtert.

### 2. UX-Optimierung im Detail
Um die Conversion-Rate der Verfügbarkeitsprüfung zu erhöhen, wurde der Kalender so programmiert, dass er nach der Wahl des Anreisedatums automatisch das Abreise-Popover öffnet. Solche Details machen den Unterschied zwischen einer "funktionierenden" und einer nutzerfreundlichen Website.

---

## 🚀 Installation & Lokale Ausführung

1.  Repository klonen:
    ```bash
    git clone https://github.com/theresa-1703/ferienwohnungen-public.git
    ```
2.  Abhängigkeiten installieren:
    ```bash
    npm install
    ```
3.  Development Server starten:
    ```bash
    npm run dev
    ```
