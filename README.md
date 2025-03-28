# Simple Usability JS

**Simple Usability JS** is a lightweight, easy-to-integrate JavaScript library that automatically adds a complete accessibility panel to your website to improve usability, readability, and compliance with European accessibility regulations.

## 🎯 Goals

- Provide a simple accessibility interface for websites  
- Allow visual customizations (fonts, spacing, colors)  
- Support users with visual, motor, or cognitive disabilities  
- Facilitate compliance with Directive (EU) 2019/882 and the Italian Stanca Law (Law 4/2004)

## ⚙️ Main Features

- ✅ Ready-to-use accessibility interface  
- 🌍 Multilanguage support (IT, EN, FR, DE, ES)  
- 🔠 Font, spacing, line height, and alignment customization  
- 🎨 Color modes: high contrast, sepia, monochrome, night mode  
- 🔎 Reading mask, large cursor, hide images  
- 🔄 Pause dynamic animations  
- 🎧 Screen reader and ARIA support  
- ⌨️ Keyboard navigation  
- 📄 Modal with accessibility compliance statement  

## 🚀 How to Integrate

### 1. Include the file

```html
<script>
  window.accessibility_var = {
    lang: 'it', // it, en, fr, de, es
    title: 'Your website name',
    mail: 'info@yoursite.com'
  };
</script>

<script src="accessibility.js"></script>
```


🛠️ PHP-Based Dynamic Generation
The accessibility.js file can be dynamically generated using PHP. This allows, in the future, to:

Automatically inject site data (e.g., title, email, language)

Customize accessibility statement content dynamically

Enable or disable features based on website context

💾 Settings Persistence
User preferences are saved in localStorage, so configurations are preserved between visits.

🧩 Compatibility
Works on any HTML website with no external dependencies. Compatible with most modern browsers.

📜 License
MIT License — feel free to use, modify, and improve it!

🙌 Author
Lovingly crafted by Ludosweb
https://ludosweb.it
----------------------------------------------


**Simple Usability JS** è una libreria JavaScript leggera e facile da integrare che aggiunge automaticamente al tuo sito un pannello accessibilità completo per migliorarne l'usabilità, la leggibilità e la conformità alle normative europee sull'accessibilità.

## 🎯 Obiettivi

- Offrire un'interfaccia semplice per l'accessibilità del sito
- Consentire personalizzazioni visive (font, spaziature, colori)
- Supportare utenti con disabilità visive, motorie o cognitive
- Facilitare la conformità alla Direttiva (UE) 2019/882 e alla Legge Stanca (L. 4/2004)

## ⚙️ Funzionalità principali

- ✅ Interfaccia accessibilità pronta all’uso
- 🌍 Supporto multilingua (IT, EN, FR, DE, ES)
- 🔠 Personalizzazione font, spaziatura, interlinea, allineamento
- 🎨 Modalità colore: alto contrasto, seppia, monocromatico, notte
- 🔎 Maschera di lettura, cursore grande, nascondi immagini
- 🔄 Pausa animazioni dinamiche
- 🎧 Supporto screen reader e ARIA
- ⌨️ Navigazione da tastiera
- 📄 Modal con dichiarazione di conformità accessibilità

## 🚀 Come si integra

### 1. Includi il file

```html
<script>
  window.accessibility_var = {
    lang: 'it', // it, en, fr, de, es
    title: 'Nome del tuo sito',
    mail: 'info@iltuosito.com'
  };
</script>

<script src="accessibility.js"></script>
```


🛠️ Generazione dinamica con PHP
Il file accessibility.js può essere generato dinamicamente tramite PHP. Questo permette, in futuro, di:

Integrare automaticamente i dati del sito (es. titolo, email, lingua)

Personalizzare le voci o i testi della dichiarazione di conformità

Aggiungere o rimuovere funzionalità in base al contesto del sito


💾 Salvataggio delle impostazioni
Le preferenze dell'utente vengono salvate in localStorage, in modo che la configurazione venga mantenuta alla visita successiva.

🧩 Compatibilità
Funziona con qualsiasi sito HTML, senza dipendenze esterne. Compatibile con la maggior parte dei browser moderni.

📜 Licenza
MIT License — sentiti libero di usarlo, modificarlo e migliorarlo!

🙌 Autore
Realizzato con cura da Ludosweb
https://ludosweb.it


