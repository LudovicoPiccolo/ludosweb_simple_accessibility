(function () {

  const userLang = (window.accessibility_var && window.accessibility_var.lang) || 'it';
  const siteTitle = (window.accessibility_var && window.accessibility_var.title) || 'Sito generico';
  const siteMail = (window.accessibility_var && window.accessibility_var.mail) || 'info@example.com';

  const i18n = {
    it: {
      resetBtn: "Ripristina impostazioni",
      scaleContents: "Scala i contenuti",
      pageScaleLabel: "Scala pagina",
      fontSize: "Dimensione testo",
      letterSpacing: "Spaziatura lettere",
      lineHeight: "Altezza riga",
      textAlign: "Allineamento testo",
      textAlignA: "Predefinito",
      textAlignleft: "Sinistra",
      textAligncenter: "Centro",
      textAlignright: "Destra",
      readableFont: "Carattere leggibile",
      contrastHigh: "Contrasto elevato",
      contrastLow: "Contrasto basso",
      monochrome: "Monocromatico",
      sepiaTone: "Modalità seppia",
      nightMode: "Modalità notte",
      screenReader: "Compatibilità screen reader",
      keyboardNav: "Navigazione da tastiera",
      dynamicContentPause: "Pausa contenuti dinamici",
      highlightHover: "Evidenzia al passaggio del mouse",
      hideImages: "Nascondi immagini",
      largeCursor: "Grande cursore",
      readingMask: "Maschera di lettura",
      scaleContents_tooltip: "Ingrandisce l’intera pagina per facilitarne la lettura.",
      complianceBtn: "Dichiarazione di conformità",
      complianceTitle: "Dichiarazione di conformità",
      complianceStatus: "Stato: Parzialmente conforme",
      complianceDescription: `<p>Questo sito web è parzialmente conforme 
        ai requisiti previsti dalla norma UNI CEI EN 301549 e dalla Direttiva (UE) 2019/882 
        sull'accessibilità dei prodotti e dei servizi.</p>
         <h2 style="margin-top: 1rem;">Contenuti non accessibili</h2>
    <ul>
      <li><strong>Contrasto colore</strong>: alcune aree hanno rapporto inferiore a 3:1</li>
      <li><strong>Spaziatura del testo</strong>: alcune personalizzazioni causano perdita di informazioni</li>
      <li><strong>Stati e ruoli di elementi</strong>: non sempre esplicitati correttamente</li>
      <li><strong>Messaggi di stato</strong>: non sempre accessibili da screen reader</li>
    </ul>

    <h2>Normativa di riferimento</h2>
    <ul>
      <li><strong>Legge 9 gennaio 2004, n. 4</strong> ("Legge Stanca") sull'accessibilità dei siti web</li>
      <li><strong>Direttiva (UE) 2019/882</strong>: obbliga accessibilità per servizi digitali dal 2025</li>
      <li><strong>UNI CEI EN 301549</strong>: norma tecnica che specifica i requisiti di accessibilità ICT</li>
    </ul>

    <h2>Redazione della dichiarazione</h2>
    <p>Redatta da ${siteTitle} il 04/03/2024, con test tecnici e valutazioni soggettive in conformità all'art. 3 della decisione di esecuzione UE 2018/1523.</p>

    <h2>Contatti</h2>
    <p>Scrivi a: <a href="mailto:${siteMail}">${siteMail}</a></p>

    <h2>Informazioni aggiuntive</h2>
    <ul>
      <li>Data pubblicazione sito: 12/09/2022</li>
      <li>Test di usabilità: effettuati</li>
      <li>CMS: Custom Solutions</li>
    </ul>`,
      fontSize_tooltip: "Modifica la dimensione del testo per migliorare la leggibilità.",
      letterSpacing_tooltip: "Aumenta la spaziatura tra le lettere per rendere il testo più chiaro.",
      lineHeight_tooltip: "Aumenta l’interlinea per ridurre l’affaticamento visivo.",
      textAlign_tooltip: "Imposta l’allineamento del testo: utile per chi ha difficoltà cognitive.",
      readableFont_tooltip: "Applica un font ad alta leggibilità (come Arial).",
      contrastHighe_tooltip: "Attiva un contrasto elevato per persone ipovedenti.",
      contrastLow_tooltip: "Aumenta il contrasto leggermente per una visione più rilassata.",
      monochrome_tooltip: "Disattiva i colori per eliminare distrazioni o disturbi neurologici.",
      sepiaTone_tooltip: "Applica una tinta seppia per un’esperienza visiva più calda.",
      nightMode_tooltip: "Modalità notte con sfondo scuro: ideale per chi soffre la luce.",
      screenReader_tooltip: "Aggiunge attributi ARIA per migliorare l’accesso tramite screen reader.",
      supp_title: "Supporto accessibilità",
      keyboardNav_tooltip: "Evidenzia il focus da tastiera: utile per chi non usa il mouse.",
      dynamicContentPause_tooltip: "Disattiva le animazioni: utile per chi soffre di vertigini o disturbi cognitivi.",
      orient_title: "Orientamento",
      highlightHover_tooltip: "Evidenzia gli elementi quando ci passi sopra con il mouse.",
      hideImages_tooltip: "Nasconde le immagini, utile per concentrazione o problemi cognitivi.",
      largeCursor_tooltip: "Ingrandisce il cursore per chi ha difficoltà visive o motorie.",
      readingMask_tooltip: "Aggiunge una maschera di lettura che segue il cursore per aiutare la concentrazione.",
      mod_col_title: "Modalità colore",
    },
    en: {
      resetBtn: "Reset settings",
      scaleContents: "Scale contents",
      pageScaleLabel: "Page scale",
      fontSize: "Font size",
      letterSpacing: "Letter spacing",
      lineHeight: "Line height",
      textAlign: "Text alignment",
      textAlignA: "Default",
      textAlignleft: "Left",
      textAligncenter: "Center",
      textAlignright: "Right",
      readableFont: "Readable font",
      contrastHigh: "High contrast",
      contrastLow: "Low contrast",
      monochrome: "Monochrome",
      sepiaTone: "Sepia tone",
      nightMode: "Night mode",
      screenReader: "Screen reader compatibility",
      keyboardNav: "Keyboard navigation",
      dynamicContentPause: "Pause dynamic content",
      highlightHover: "Highlight on hover",
      hideImages: "Hide images",
      largeCursor: "Large cursor",
      readingMask: "Reading mask",
      scaleContents_tooltip: "Enlarges the entire page to improve readability.",
      complianceBtn: "Accessibility statement",
      complianceTitle: "Accessibility Statement",
      complianceStatus: "Status: Partially compliant",
      complianceDescription: `<p>This website is partially compliant 
        with the requirements of UNI CEI EN 301549 and Directive (EU) 2019/882 
        on the accessibility of products and services.</p>
         <h2 style="margin-top: 1rem;">Non-accessible content</h2>
    <ul>
      <li><strong>Color contrast</strong>: some areas have a contrast ratio lower than 3:1</li>
      <li><strong>Text spacing</strong>: some customizations may lead to information loss</li>
      <li><strong>Element states and roles</strong>: not always correctly specified</li>
      <li><strong>Status messages</strong>: not always accessible via screen readers</li>
    </ul>
    
    <h2>Reference regulations</h2>
    <ul>
      <li><strong>Italian Law of January 9, 2004, no. 4</strong> ("Stanca Law") on website accessibility</li>
      <li><strong>Directive (EU) 2019/882</strong>: mandates digital service accessibility starting in 2025</li>
      <li><strong>UNI CEI EN 301549</strong>: technical standard specifying ICT accessibility requirements</li>
    </ul>
    
    <h2>Declaration drafting</h2>
    <p>Drafted by ${siteTitle} on 03/04/2024, with technical tests and subjective evaluations in accordance with Article 3 of EU Implementing Decision 2018/1523.</p>
    
    <h2>Contacts</h2>
    <p>Email: <a href="mailto:${siteMail}">${siteMail}</a></p>
    
    <h2>Additional information</h2>
    <ul>
      <li>Website publication date: 09/12/2022</li>
      <li>Usability tests: completed</li>
      <li>CMS: Custom Solutions</li>
    </ul>`,
      fontSize_tooltip: "Adjusts the text size to improve readability.",
      letterSpacing_tooltip: "Increases letter spacing to make text clearer.",
      lineHeight_tooltip: "Increases line spacing to reduce visual fatigue.",
      textAlign_tooltip: "Sets text alignment: helpful for cognitive disabilities.",
      readableFont_tooltip: "Applies a high-readability font (such as Arial).",
      contrastHighe_tooltip: "Enables high contrast for visually impaired users.",
      contrastLow_tooltip: "Slightly increases contrast for a more relaxed viewing experience.",
      monochrome_tooltip: "Disables colors to reduce distractions or neurological issues.",
      sepiaTone_tooltip: "Applies a sepia tone for a warmer visual experience.",
      nightMode_tooltip: "Dark mode: ideal for light sensitivity.",
      screenReader_tooltip: "Adds ARIA attributes to enhance screen reader access.",
      supp_title: "Accessibility support",
      keyboardNav_tooltip: "Highlights keyboard focus: helpful for non-mouse users.",
      dynamicContentPause_tooltip: "Disables animations: useful for people with dizziness or cognitive issues.",
      orient_title: "Orientation",
      highlightHover_tooltip: "Highlights elements when hovered with the mouse.",
      hideImages_tooltip: "Hides images, useful for focus or cognitive challenges.",
      largeCursor_tooltip: "Enlarges the cursor for users with visual or motor difficulties.",
      readingMask_tooltip: "Adds a reading mask that follows the cursor to help concentration.",
      mod_col_title: "Color modes"
    },    
    fr: {
      resetBtn: "Réinitialiser les paramètres",
      scaleContents: "Agrandir le contenu",
      pageScaleLabel: "Échelle de la page",
      fontSize: "Taille du texte",
      letterSpacing: "Espacement des lettres",
      lineHeight: "Hauteur de ligne",
      textAlign: "Alignement du texte",
      textAlignA: "Par défaut",
      textAlignleft: "Gauche",
      textAligncenter: "Centre",
      textAlignright: "Droite",
      readableFont: "Police lisible",
      contrastHigh: "Contraste élevé",
      contrastLow: "Contraste faible",
      monochrome: "Monochrome",
      sepiaTone: "Tons sépia",
      nightMode: "Mode nuit",
      screenReader: "Compatibilité lecteur d’écran",
      keyboardNav: "Navigation au clavier",
      dynamicContentPause: "Pause du contenu dynamique",
      highlightHover: "Surlignage au survol",
      hideImages: "Masquer les images",
      largeCursor: "Curseur agrandi",
      readingMask: "Masque de lecture",
      scaleContents_tooltip: "Agrandit toute la page pour en faciliter la lecture.",
      complianceBtn: "Déclaration de conformité",
      complianceTitle: "Déclaration de conformité",
      complianceStatus: "État : Partiellement conforme",
      complianceDescription: `<p>Ce site web est partiellement conforme 
        aux exigences de la norme UNI CEI EN 301549 et de la Directive (UE) 2019/882 
        sur l’accessibilité des produits et services.</p>
         <h2 style="margin-top: 1rem;">Contenu non accessible</h2>
    <ul>
      <li><strong>Contraste des couleurs</strong> : certaines zones ont un rapport inférieur à 3:1</li>
      <li><strong>Espacement du texte</strong> : certaines personnalisations entraînent une perte d’informations</li>
      <li><strong>États et rôles des éléments</strong> : pas toujours correctement spécifiés</li>
      <li><strong>Messages d’état</strong> : pas toujours accessibles aux lecteurs d’écran</li>
    </ul>
    
    <h2>Réglementation de référence</h2>
    <ul>
      <li><strong>Loi du 9 janvier 2004, n° 4</strong> ("Loi Stanca") sur l’accessibilité des sites web</li>
      <li><strong>Directive (UE) 2019/882</strong> : rend l’accessibilité numérique obligatoire à partir de 2025</li>
      <li><strong>UNI CEI EN 301549</strong> : norme technique précisant les exigences d’accessibilité TIC</li>
    </ul>
    
    <h2>Rédaction de la déclaration</h2>
    <p>Rédigée par ${siteTitle} le 04/03/2024, avec des tests techniques et des évaluations subjectives conformément à l’art. 3 de la décision d’exécution UE 2018/1523.</p>
    
    <h2>Contacts</h2>
    <p>Écrire à : <a href="mailto:${siteMail}">${siteMail}</a></p>
    
    <h2>Informations complémentaires</h2>
    <ul>
      <li>Date de publication du site : 12/09/2022</li>
      <li>Tests d’utilisabilité : effectués</li>
      <li>CMS : Solutions personnalisées</li>
    </ul>`,
      fontSize_tooltip: "Modifie la taille du texte pour améliorer la lisibilité.",
      letterSpacing_tooltip: "Augmente l’espacement entre les lettres pour rendre le texte plus lisible.",
      lineHeight_tooltip: "Augmente l’interligne pour réduire la fatigue visuelle.",
      textAlign_tooltip: "Définit l’alignement du texte : utile pour les troubles cognitifs.",
      readableFont_tooltip: "Applique une police très lisible (comme Arial).",
      contrastHighe_tooltip: "Active un contraste élevé pour les personnes malvoyantes.",
      contrastLow_tooltip: "Augmente légèrement le contraste pour une vision plus détendue.",
      monochrome_tooltip: "Désactive les couleurs pour limiter les distractions ou troubles neurologiques.",
      sepiaTone_tooltip: "Applique une teinte sépia pour une expérience visuelle plus chaleureuse.",
      nightMode_tooltip: "Mode nuit avec fond sombre : idéal pour la sensibilité à la lumière.",
      screenReader_tooltip: "Ajoute des attributs ARIA pour améliorer l’accès via lecteur d’écran.",
      supp_title: "Assistance à l’accessibilité",
      keyboardNav_tooltip: "Met en évidence le focus clavier : utile sans souris.",
      dynamicContentPause_tooltip: "Désactive les animations : utile en cas de vertiges ou de troubles cognitifs.",
      orient_title: "Orientation",
      highlightHover_tooltip: "Surligne les éléments au passage de la souris.",
      hideImages_tooltip: "Masque les images, utile pour la concentration ou les troubles cognitifs.",
      largeCursor_tooltip: "Agrandit le curseur pour les personnes malvoyantes ou à mobilité réduite.",
      readingMask_tooltip: "Ajoute un masque de lecture qui suit le curseur pour aider à se concentrer.",
      mod_col_title: "Modes de couleur"
    },    
    de: {
      resetBtn: "Einstellungen zurücksetzen",
      scaleContents: "Inhalte skalieren",
      pageScaleLabel: "Seitenskalierung",
      fontSize: "Textgröße",
      letterSpacing: "Buchstabenabstand",
      lineHeight: "Zeilenhöhe",
      textAlign: "Textausrichtung",
      textAlignA: "Standard",
      textAlignleft: "Links",
      textAligncenter: "Zentriert",
      textAlignright: "Rechts",
      readableFont: "Gut lesbare Schriftart",
      contrastHigh: "Hoher Kontrast",
      contrastLow: "Niedriger Kontrast",
      monochrome: "Monochrom",
      sepiaTone: "Sepia-Modus",
      nightMode: "Nachtmodus",
      screenReader: "Screenreader-Kompatibilität",
      keyboardNav: "Tastaturnavigation",
      dynamicContentPause: "Dynamische Inhalte pausieren",
      highlightHover: "Hover-Effekt hervorheben",
      hideImages: "Bilder ausblenden",
      largeCursor: "Großer Mauszeiger",
      readingMask: "Lesemaske",
      scaleContents_tooltip: "Vergrößert die gesamte Seite zur besseren Lesbarkeit.",
      complianceBtn: "Konformitätserklärung",
      complianceTitle: "Konformitätserklärung",
      complianceStatus: "Status: Teilweise konform",
      complianceDescription: `<p>Diese Website entspricht teilweise 
        den Anforderungen der Norm UNI CEI EN 301549 und der Richtlinie (EU) 2019/882 
        zur Barrierefreiheit von Produkten und Dienstleistungen.</p>
         <h2 style="margin-top: 1rem;">Nicht barrierefreie Inhalte</h2>
    <ul>
      <li><strong>Farbkontrast</strong>: Einige Bereiche haben ein Kontrastverhältnis unter 3:1</li>
      <li><strong>Textabstand</strong>: Einige Anpassungen können Informationsverlust verursachen</li>
      <li><strong>Zustände und Rollen von Elementen</strong>: Nicht immer korrekt angegeben</li>
      <li><strong>Statusmeldungen</strong>: Nicht immer für Screenreader zugänglich</li>
    </ul>
    
    <h2>Rechtsvorschriften</h2>
    <ul>
      <li><strong>Gesetz vom 9. Januar 2004, Nr. 4</strong> („Stanca-Gesetz“) über die Barrierefreiheit von Websites</li>
      <li><strong>Richtlinie (EU) 2019/882</strong>: Verpflichtet zur digitalen Barrierefreiheit ab 2025</li>
      <li><strong>UNI CEI EN 301549</strong>: Technische Norm mit Anforderungen an barrierefreie IKT</li>
    </ul>
    
    <h2>Erstellung der Erklärung</h2>
    <p>Erstellt von ${siteTitle} am 04.03.2024 mit technischen Tests und subjektiven Bewertungen gemäß Art. 3 des Durchführungsbeschlusses (EU) 2018/1523.</p>
    
    <h2>Kontakt</h2>
    <p>Schreiben Sie an: <a href="mailto:${siteMail}">${siteMail}</a></p>
    
    <h2>Weitere Informationen</h2>
    <ul>
      <li>Veröffentlichungsdatum der Website: 12.09.2022</li>
      <li>Usability-Tests: durchgeführt</li>
      <li>CMS: Maßgeschneiderte Lösung</li>
    </ul>`,
      fontSize_tooltip: "Ändert die Textgröße zur besseren Lesbarkeit.",
      letterSpacing_tooltip: "Erhöht den Abstand zwischen Buchstaben für bessere Lesbarkeit.",
      lineHeight_tooltip: "Erhöht den Zeilenabstand zur Verringerung visueller Ermüdung.",
      textAlign_tooltip: "Legt die Textausrichtung fest: Hilfreich bei kognitiven Beeinträchtigungen.",
      readableFont_tooltip: "Verwendet eine gut lesbare Schriftart (z. B. Arial).",
      contrastHighe_tooltip: "Aktiviert hohen Kontrast für sehbehinderte Nutzer.",
      contrastLow_tooltip: "Erhöht leicht den Kontrast für ein entspannteres Seherlebnis.",
      monochrome_tooltip: "Deaktiviert Farben zur Reduzierung von Ablenkungen oder neurologischen Reizen.",
      sepiaTone_tooltip: "Wendet einen Sepia-Ton für ein wärmeres Erscheinungsbild an.",
      nightMode_tooltip: "Dunkelmodus: ideal bei Lichtempfindlichkeit.",
      screenReader_tooltip: "Fügt ARIA-Attribute hinzu zur besseren Unterstützung von Screenreadern.",
      supp_title: "Barrierefreiheitshilfe",
      keyboardNav_tooltip: "Hebt den Tastaturfokus hervor: Nützlich ohne Maus.",
      dynamicContentPause_tooltip: "Deaktiviert Animationen: Hilfreich bei Schwindel oder kognitiven Problemen.",
      orient_title: "Orientierung",
      highlightHover_tooltip: "Hebt Elemente beim Darüberfahren mit der Maus hervor.",
      hideImages_tooltip: "Blendet Bilder aus – hilfreich für Konzentration oder bei kognitiven Problemen.",
      largeCursor_tooltip: "Vergrößert den Mauszeiger für Menschen mit Seh- oder Bewegungsbeeinträchtigungen.",
      readingMask_tooltip: "Fügt eine Lesemaske hinzu, die dem Mauszeiger folgt und beim Konzentrieren hilft.",
      mod_col_title: "Farbmodi"
    },
    es: {
      resetBtn: "Restablecer ajustes",
      scaleContents: "Escalar contenido",
      pageScaleLabel: "Escala de la página",
      fontSize: "Tamaño del texto",
      letterSpacing: "Espaciado entre letras",
      lineHeight: "Altura de línea",
      textAlign: "Alineación del texto",
      textAlignA: "Por defecto",
      textAlignleft: "Izquierda",
      textAligncenter: "Centro",
      textAlignright: "Derecha",
      readableFont: "Fuente legible",
      contrastHigh: "Alto contraste",
      contrastLow: "Bajo contraste",
      monochrome: "Monocromático",
      sepiaTone: "Tono sepia",
      nightMode: "Modo nocturno",
      screenReader: "Compatibilidad con lector de pantalla",
      keyboardNav: "Navegación por teclado",
      dynamicContentPause: "Pausar contenido dinámico",
      highlightHover: "Resaltar al pasar el cursor",
      hideImages: "Ocultar imágenes",
      largeCursor: "Cursor grande",
      readingMask: "Máscara de lectura",
      scaleContents_tooltip: "Amplía toda la página para facilitar la lectura.",
      complianceBtn: "Declaración de conformidad",
      complianceTitle: "Declaración de conformidad",
      complianceStatus: "Estado: Parcialmente conforme",
      complianceDescription: `<p>Este sitio web es parcialmente conforme 
        con los requisitos de la norma UNI CEI EN 301549 y la Directiva (UE) 2019/882 
        sobre accesibilidad de productos y servicios.</p>
         <h2 style="margin-top: 1rem;">Contenido no accesible</h2>
    <ul>
      <li><strong>Contraste de color</strong>: algunas áreas tienen una relación inferior a 3:1</li>
      <li><strong>Espaciado del texto</strong>: algunas personalizaciones pueden causar pérdida de información</li>
      <li><strong>Estados y roles de elementos</strong>: no siempre especificados correctamente</li>
      <li><strong>Mensajes de estado</strong>: no siempre accesibles para lectores de pantalla</li>
    </ul>
    
    <h2>Normativa de referencia</h2>
    <ul>
      <li><strong>Ley 9 de enero de 2004, n.º 4</strong> ("Ley Stanca") sobre accesibilidad web</li>
      <li><strong>Directiva (UE) 2019/882</strong>: obliga a la accesibilidad digital desde 2025</li>
      <li><strong>UNI CEI EN 301549</strong>: norma técnica que especifica los requisitos de accesibilidad TIC</li>
    </ul>
    
    <h2>Redacción de la declaración</h2>
    <p>Redactada por ${siteTitle} el 04/03/2024, con pruebas técnicas y evaluaciones subjetivas conforme al art. 3 de la decisión de ejecución UE 2018/1523.</p>
    
    <h2>Contacto</h2>
    <p>Escribir a: <a href="mailto:${siteMail}">${siteMail}</a></p>
    
    <h2>Información adicional</h2>
    <ul>
      <li>Fecha de publicación del sitio: 12/09/2022</li>
      <li>Pruebas de usabilidad: realizadas</li>
      <li>CMS: Soluciones personalizadas</li>
    </ul>`,
      fontSize_tooltip: "Modifica el tamaño del texto para mejorar su legibilidad.",
      letterSpacing_tooltip: "Aumenta el espaciado entre letras para mayor claridad.",
      lineHeight_tooltip: "Aumenta el interlineado para reducir la fatiga visual.",
      textAlign_tooltip: "Configura la alineación del texto: útil para personas con dificultades cognitivas.",
      readableFont_tooltip: "Aplica una fuente de alta legibilidad (como Arial).",
      contrastHighe_tooltip: "Activa un alto contraste para personas con baja visión.",
      contrastLow_tooltip: "Aumenta ligeramente el contraste para una visualización más cómoda.",
      monochrome_tooltip: "Desactiva los colores para reducir distracciones o molestias neurológicas.",
      sepiaTone_tooltip: "Aplica un tono sepia para una experiencia visual más cálida.",
      nightMode_tooltip: "Modo oscuro: ideal para personas con sensibilidad a la luz.",
      screenReader_tooltip: "Añade atributos ARIA para mejorar la accesibilidad con lectores de pantalla.",
      supp_title: "Soporte de accesibilidad",
      keyboardNav_tooltip: "Destaca el enfoque del teclado: útil si no se usa ratón.",
      dynamicContentPause_tooltip: "Desactiva animaciones: útil para personas con vértigo o dificultades cognitivas.",
      orient_title: "Orientación",
      highlightHover_tooltip: "Resalta elementos al pasar el cursor por encima.",
      hideImages_tooltip: "Oculta las imágenes, útil para concentración o dificultades cognitivas.",
      largeCursor_tooltip: "Aumenta el tamaño del cursor para personas con dificultades visuales o motoras.",
      readingMask_tooltip: "Añade una máscara de lectura que sigue al cursor para ayudar a concentrarse.",
      mod_col_title: "Modos de color"
    }
    
  };
  window.i18nAccessibility = i18n;






  const html = `<div id="accessibility-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
        </svg>
    </div>

<div id="accessibility-panel">
  <button id="reset-btn" onclick="resetAccessibility()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
    </svg>
    <span data-i18n="resetBtn"></span>
  </button>
  
  <!-- Select per cambio lingua -->
  <select id="languageSelect" style="margin-top: 0.5rem; width: 100%;">
      <option value="it">Italiano</option>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
  </select>

  <h4>Contenuti</h4>

  <label class="label-tooltip">
  <span data-i18n="scaleContents"></span>
    <input type="range" id="pageScale" min="90" max="110" step="5" value="100">
    <span class="tooltip-content" data-i18n="scaleContents_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <span data-i18n="fontSize"></span>
    <input type="range" id="fontSize" min="90" max="300" step="10" value="100">
    <span class="tooltip-content" data-i18n="fontSize_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <span data-i18n="letterSpacing"></span>
    <input type="range" id="letterSpacing" min="0" max="10" step="0.5" value="0">
    <span class="tooltip-content" data-i18n="letterSpacing_tooltip"></span>
  </label>

  <label class="label-tooltip">
    
    <span data-i18n="lineHeight"></span>
    <input type="range" id="lineHeight" min="1" max="3" step="0.1" value="1.5">
    <span class="tooltip-content" data-i18n="lineHeight_tooltip"></span>
  </label>

  <label class="label-tooltip">
    
    <span data-i18n="textAlign"></span>
    <select id="textAlign">
      <option value="" data-i18n="textAlignA"></option>
      <option value="left" data-i18n="textAlignleft"></option>
      <option value="center" data-i18n="textAligncenter"></option>
      <option value="right" data-i18n="textAlignright"></option>
    </select>
    <span class="tooltip-content" data-i18n="textAlign_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="readableFont"> <span data-i18n="readableFont"></span>
    <span class="tooltip-content" data-i18n="readableFont_tooltip"></span>
  </label>

  <h4 data-i18n="mod_col_title"></h4>

  <label class="label-tooltip">
    <input type="checkbox" id="contrastHigh"> <span data-i18n="contrastHigh"></span>
    <span class="tooltip-content" data-i18n="contrastHighe_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="contrastLow"> <span data-i18n="contrastLow"></span>
    <span class="tooltip-content" data-i18n="contrastLow_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="monochrome"> <span data-i18n="monochrome"></span>
    <span class="tooltip-content" data-i18n="monochrome_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="sepiaTone"> <span data-i18n="sepiaTone"></span>
    <span class="tooltip-content" data-i18n="sepiaTone_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="nightMode"> <span data-i18n="nightMode"></span>
    <span class="tooltip-content" data-i18n="nightMode_tooltip"></span>
  </label>

  <h4 data-i18n="supp_title"></h4>

  <label class="label-tooltip">
    <input type="checkbox" id="screenReader"> <span data-i18n="screenReader"></span>
    <span class="tooltip-content" data-i18n="screenReader_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="keyboardNav"> <span data-i18n="keyboardNav"></span>
    <span class="tooltip-content" data-i18n="keyboardNav_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="dynamicContentPause"> <span data-i18n="dynamicContentPause"></span>
    <span class="tooltip-content" data-i18n="dynamicContentPause_tooltip"></span>
  </label>

  <h4 data-i18n="orient_title"></h4>

  <label class="label-tooltip">
    <input type="checkbox" id="highlightHover"> <span data-i18n="highlightHover"></span>
    <span class="tooltip-content" data-i18n="highlightHover_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="hideImages"> <span data-i18n="hideImages"></span>
    <span class="tooltip-content" data-i18n="hideImages_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="largeCursor"> <span data-i18n="largeCursor"></span>
    <span class="tooltip-content" data-i18n="largeCursor_tooltip"></span>
  </label>

  <label class="label-tooltip">
    <input type="checkbox" id="readingMask"> <span data-i18n="readingMask"></span>
    <span class="tooltip-content" data-i18n="readingMask_tooltip"></span>
  </label>

<div id="accessibility-footer" style="margin-top: 2rem; text-align: center; font-size: 0.8rem;">
  <p>Powered by <strong>Ludosweb</strong></p>
  <button id="openCompliance" data-i18n="complianceBtn" style="margin-top: 0.5rem; padding: 6px 12px; font-size: 0.85rem; background: var(--primary-color); color: white; border: none; border-radius: 6px; cursor: pointer;">
  </button>
</div>

</div>

<div id="complianceModal" style="
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  z-index: 10000;
  justify-content: center;
  align-items: center;
">
  <div style="
    background: white;
    width: 70%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 2rem;
    border-radius: 10px;
    position: relative;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  ">
    <button onclick="document.getElementById('complianceModal').style.display='none'" style="
      position: absolute;
      top: 10px; right: 15px;
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      color: #333;
    ">✕</button>

    <h1 data-i18n="complianceTitle" style="color: var(--primary-color); font-size: 1.4rem;"></h1>

    <p data-i18n="complianceStatus"></p>

    <div data-i18n="complianceDescription"></div>

   
  </div>
</div>`;

  const js = `


const panel = document.getElementById("accessibility-panel");
const btn = document.getElementById("accessibility-btn");

const defaultFontSettings = {
  fontSize: 100,
  letterSpacing: '0',
  lineHeight: '1.5',
  textAlign: 'inherit',
  fontFamily: 'inherit',
  readableFont: false,
  pageScale: '100'
};

const elements = {
  fontSize: document.getElementById("fontSize"),
  letterSpacing: document.getElementById("letterSpacing"),
  lineHeight: document.getElementById("lineHeight"),
  textAlign: document.getElementById("textAlign"),
  readableFont: document.getElementById("readableFont"),
  contrastHigh: document.getElementById("contrastHigh"),
  contrastLow: document.getElementById("contrastLow"),
  monochrome: document.getElementById("monochrome"),
  sepiaTone: document.getElementById("sepiaTone"),
  nightMode: document.getElementById("nightMode"),
  highlightHover: document.getElementById("highlightHover"),
  hideImages: document.getElementById("hideImages"),
  largeCursor: document.getElementById("largeCursor"),
  readingMask: document.getElementById("readingMask"),
  screenReader: document.getElementById("screenReader"),
  keyboardNav: document.getElementById("keyboardNav"),
  dynamicContentPause: document.getElementById("dynamicContentPause"),
  pageScale: document.getElementById("pageScale"),
};

function enableKeyboardFocusStyles() {
  document.addEventListener("keydown", handleFirstTab);
}

function disableKeyboardFocusStyles() {
  document.removeEventListener("keydown", handleFirstTab);
  document.body.classList.remove("user-is-tabbing");
}

function handleFirstTab(e) {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");
    document.removeEventListener("keydown", handleFirstTab);
  }
}

function applyAccessibility() {
  const html = document.documentElement;
  const body = document.body;

  // --- FONT SETTINGS ---
  const letterSpacing = elements.letterSpacing.value;
  const lineHeight = elements.lineHeight.value;
  const textAlign = elements.textAlign.value || 'inherit';
  const fontFamily = elements.readableFont.checked ? 'Arial, sans-serif' : 'inherit';
  const fontSize = parseInt(elements.fontSize.value);

  const fontSettingsChanged =
    fontSize !== defaultFontSettings.fontSize ||
    letterSpacing !== defaultFontSettings.letterSpacing ||
    lineHeight !== defaultFontSettings.lineHeight ||
    textAlign !== defaultFontSettings.textAlign ||
    elements.readableFont.checked !== defaultFontSettings.readableFont;

  html.style.removeProperty('--acc-font-size');
  html.style.removeProperty('--acc-letter-spacing');
  html.style.removeProperty('--acc-line-height');
  html.style.removeProperty('--acc-text-align');
  html.style.removeProperty('--acc-font-family');
  html.classList.remove("accessible_font");

  if (fontSettingsChanged) {

    applyFontScaling(fontSize / 100 * 16);
    html.style.setProperty('--acc-letter-spacing', letterSpacing + 'px');
    html.style.setProperty('--acc-line-height', lineHeight);
    html.style.setProperty('--acc-text-align', textAlign);
    html.style.setProperty('--acc-font-family', fontFamily);
    html.classList.add("accessible_font");
  }

  // --- ALTRE IMPOSTAZIONI ---
  html.classList.add("accessible");
  html.classList.toggle("large-cursor", elements.largeCursor.checked);
  body.classList.toggle("contrast-high", elements.contrastHigh.checked);
  body.classList.toggle("contrast-low", elements.contrastLow.checked);
  body.classList.toggle("monochrome", elements.monochrome.checked);
  body.classList.toggle("sepia-mode", elements.sepiaTone.checked);
  body.classList.toggle("night-mode", elements.nightMode.checked);
  body.classList.toggle("highlight-hover", elements.highlightHover.checked);
  body.classList.toggle("no-images", elements.hideImages.checked);

  const scaleValue = elements.pageScale.value;
  if (scaleValue !== "100") {
    document.documentElement.style.zoom = scaleValue + '%';
  } else {
    document.documentElement.style.removeProperty('zoom');
  }

  // Screen reader ARIA (usa la lingua selezionata)
  if (elements.screenReader.checked) {
    const currentLang = document.getElementById('languageSelect').value || 'it';
    html.setAttribute("lang", currentLang);
    html.setAttribute("role", "document");
    html.setAttribute("aria-label", "Contenuto principale della pagina");
  } else {
    html.removeAttribute("lang");
    html.removeAttribute("role");
    html.removeAttribute("aria-label");
  }

  if (elements.keyboardNav.checked) {
    enableKeyboardFocusStyles();
  } else {
    disableKeyboardFocusStyles();
  }

  if (elements.dynamicContentPause.checked) {
    if (!document.getElementById("pause-dynamics")) {
      const style = document.createElement("style");
      style.id = "pause-dynamics";
      style.textContent = \`* {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }\`;
      document.head.appendChild(style);
    }
  } else {
    const pauseStyle = document.getElementById("pause-dynamics");
    if (pauseStyle) pauseStyle.remove();
  }

  const existingOverlay = document.querySelector('.reading-mask-follow');
  if (elements.readingMask.checked && !existingOverlay) {
    const overlay = document.createElement('div');
    overlay.className = 'reading-mask-follow';
    overlay.innerHTML = '<div class="mask-strip" id="mask-strip"></div>';
    document.body.appendChild(overlay);
    document.addEventListener('mousemove', followMouse);
  } else if (!elements.readingMask.checked && existingOverlay) {
    existingOverlay.remove();
    document.removeEventListener('mousemove', followMouse);
  }

  saveSettings();
}

function resetAccessibility() {
  const html = document.documentElement;
  const body = document.body;

  html.classList.remove("accessible");
  html.classList.remove("accessible_font");

  html.style.removeProperty('--acc-letter-spacing');
  html.style.removeProperty('--acc-line-height');
  html.style.removeProperty('--acc-text-align');
  html.style.removeProperty('--acc-font-family');

  document.body.style.removeProperty('transform');
  document.body.style.removeProperty('transform-origin');
  document.documentElement.style.removeProperty('zoom');

  body.classList.remove("contrast-high", "contrast-low", "monochrome", "sepia-mode", "night-mode", "highlight-hover", "no-images");
  html.classList.remove("large-cursor");

  const existingOverlay = document.querySelector('.reading-mask-follow');
  if (existingOverlay) {
    existingOverlay.remove();
    document.removeEventListener('mousemove', followMouse);
  }

  document.querySelectorAll('[data-access-font]').forEach(el => {
    el.style.removeProperty("font-size");
    el.removeAttribute("data-access-font");
  });

  localStorage.removeItem("accessibilitySettings");
  Object.values(elements).forEach(el => {
    if (el.type === "checkbox") {
      el.checked = false;
    } else if (el.tagName === 'SELECT') {
      el.selectedIndex = 0;
    } else {
      el.value = el.defaultValue;
    }
  });

  document.getElementById("accessibility-btn").classList.remove("accessibility-active");
}

function loadSettings() {
  const data = JSON.parse(localStorage.getItem("accessibilitySettings"));
  const btn = document.getElementById("accessibility-btn");

  if(localStorage.getItem("accessibilitySettings_lang")){
    const lang = document.getElementById('languageSelect').value = localStorage.getItem("accessibilitySettings_lang");
    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      const langPack = window.i18nAccessibility[lang] || window.i18nAccessibility['it'];
      if (langPack[key]) {
        elem.textContent = langPack[key];
      }
    });
  }


  if (data) {
    Object.keys(elements).forEach(k => {
      const el = elements[k];
      if (k in data) {
        el.type === "checkbox" ? el.checked = data[k] : el.value = data[k];
      }
    });

    applyAccessibility();
    btn.classList.add("accessibility-active");
  } else {
    btn.classList.remove("accessibility-active");
  }
}

function applyFontScaling(baseSizePx) {
  const scaleMap = {
    h1: 2.0,
    h2: 1.75,
    h3: 1.5,
    h4: 1.25,
    h5: 1.1,
    h6: 1.0,
    p: 1.0,
    li: 1.0,
    a: 1.0,
    span: 1.0,
    td: 1.0,
    th: 1.0,
    div: 1.0,
    small: 0.875
  };

  document.querySelectorAll("[data-access-font]").forEach(el => {
    el.style.removeProperty("font-size");
    el.removeAttribute("data-access-font");
  });

  const accessibilityPanel = document.getElementById("accessibility-panel");

  Object.keys(scaleMap).forEach(tag => {
    const elements = document.querySelectorAll(tag);
    elements.forEach(el => {
      if (!accessibilityPanel.contains(el)) {
        const size = baseSizePx * scaleMap[tag];
        el.style.setProperty("font-size", size + "px", "important");
        el.setAttribute("data-access-font", "true");
      }
    });
  });
}

function followMouse(e) {
  const strip = document.getElementById('mask-strip');
  const overlay = document.querySelector('.reading-mask-follow');

  if (strip && overlay) {
    const stripHeight = strip.offsetHeight || 120;
    const topY = e.clientY - stripHeight / 2;
    strip.style.top = topY + 'px';

    overlay.style.setProperty('--mask-top-height', topY + 'px');
    overlay.style.setProperty('--mask-bottom-height', calcBottom(topY + stripHeight));
  }
}

function calcBottom(bottomY) {
  const viewportHeight = window.innerHeight;
  const bottomHeight = viewportHeight - bottomY;
  return bottomHeight + 'px';
}


function saveSettings() {
  const data = {};
  Object.keys(elements).forEach(k => {
    const el = elements[k];
    data[k] = el.type === "checkbox" ? el.checked : el.value;
  });
  localStorage.setItem("accessibilitySettings", JSON.stringify(data));

  const hasActiveSettings = Object.values(data).some(value =>
    (typeof value === "boolean" && value === true) ||
    (typeof value === "string" && value !== "" && value !== "100" && value !== "0" && value !== "1.5")
  );

  if (hasActiveSettings) {
    btn.classList.add("accessibility-active");
  } else {
    btn.classList.remove("accessibility-active");
  }
}

document.getElementById('openCompliance').addEventListener('click', function () {
  document.getElementById('complianceModal').style.display = 'flex';
});

btn.addEventListener("click", () => {
  const isVisible = panel.style.display === "block";
  panel.style.display = isVisible ? "none" : "block";
});

Object.values(elements).forEach(el => {
  el.addEventListener("input", applyAccessibility);
  el.addEventListener("change", applyAccessibility);
});

document.addEventListener('click', function (e) {
  const panel = document.getElementById('accessibility-panel');
  const button = document.getElementById('accessibility-btn');

  const isClickInsidePanel = panel.contains(e.target);
  const isClickOnButton = button.contains(e.target);

  if (!isClickInsidePanel && !isClickOnButton && panel.style.display === 'block') {
    panel.style.display = 'none';
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const panel = document.getElementById('accessibility-panel');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    }
  }
});

document.getElementById('languageSelect').addEventListener('change', function () {
  const selectedLang = this.value;
  localStorage.setItem("accessibilitySettings_lang", selectedLang);
  const langPack = window.i18nAccessibility[selectedLang] || window.i18nAccessibility['it'];

  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    const value = langPack[key] || window.i18nAccessibility['it'][key];

    if (value) {
      if (key === 'complianceDescription') {
        elem.innerHTML = value; 
      } else {
        elem.textContent = value;
      }
      elem.style.display = '';
    } else {
      elem.style.display = 'none';
    }
  });
});



`;

  function injectHTML() {
    const temp = document.createElement("div");
    temp.id = "accessibility-div";
    temp.innerHTML = html;
    document.body.appendChild(temp);
  }

  function injectScript() {
    const scriptTag = document.createElement("script");
    scriptTag.textContent = js;
    document.body.appendChild(scriptTag);
  }

  function initUI() {
    injectHTML();
    injectScript();
    setTimeout(loadSettings, 100);

    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      const langPack = i18n[userLang] || i18n['it'];
      if (langPack[key]) {
        elem.textContent = langPack[key];
      }
    });
    // Imposta il valore iniziale della select in base alla lingua utente
    document.getElementById('languageSelect').value = userLang;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initUI();
    });
  } else {
    initUI();
  }
})();