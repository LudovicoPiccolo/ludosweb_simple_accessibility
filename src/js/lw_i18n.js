/**
 * Accessibility Ludosweb Project
 * Author: Piccolo Ludovico
 * Organization: Ludosweb
 * Description: Internationalization (lw_i18n) strings and language management for accessibility features.
 */

const userLang = (window.lw_accessibility_var?.lang || lw_accessibility_var?.lang) || 'it';
const siteTitle = (window.lw_accessibility_var?.title || lw_accessibility_var?.title) || 'Sito generico';
const siteMail = (window.lw_accessibility_var?.mail || lw_accessibility_var?.mail) || 'info@example.com';
const siteDate = (window.lw_accessibility_var?.data || lw_accessibility_var?.data) 
  ? new Date(window.lw_accessibility_var?.data || lw_accessibility_var?.data).toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) 
  : '25/06/2025';

export const lw_i18n = {
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
    mod_contenuti_title: "Contenuti",
    complianceDescription: `<div>
  <p>Crediamo che il web debba essere accessibile a chiunque, indipendentemente dalle proprie capacità. Per questo motivo, ci impegniamo a rendere questo sito conforme alle linee guida WCAG 2.1 livello AA, secondo la normativa UNI CEI EN 301549 e la Direttiva (UE) 2019/882.</p>

  <h2>Tecnologie e funzionalità di supporto</h2>
  <p>Il sito utilizza strumenti che permettono a ciascun utente di personalizzare l'interfaccia in base alle proprie esigenze. Queste funzionalità includono:</p>
  <ul>
    <li>Adattamento del contrasto, dimensione e tipo di carattere, spaziatura e allineamento</li>
    <li>Compatibilità con lettori di schermo (JAWS, NVDA, VoiceOver, TalkBack)</li>
    <li>Navigazione tramite tastiera con supporto per Tab, Shift+Tab, Invio, Esc, ecc.</li>
    <li>Profili specifici per epilessia, ipovisione, disabilità cognitive, ADHD, utenti non vedenti e disabilità motorie</li>
    <li>Attivazione semplificata delle modalità accessibili (es. con la combinazione di tasti Alt+1)</li>
  </ul>

  <h2>Compatibilità con browser e tecnologie assistive</h2>
  <p>Il sito è progettato per funzionare con i principali browser (Chrome, Firefox, Safari, Edge, Opera) e sistemi operativi, sia su desktop che dispositivi mobili. È compatibile con le tecnologie assistive più utilizzate.</p>

  <h2>Contenuti non accessibili</h2>
  <p>Nonostante l’impegno continuo per garantire la massima accessibilità, alcune parti del sito potrebbero non essere pienamente conformi ai requisiti previsti. In particolare:</p>
  <ul>
    <li>Contrasti di colore insufficienti in alcune sezioni</li>
    <li>Spaziature del testo non sempre ottimali per la leggibilità</li>
    <li>Ruoli e stati di alcuni elementi dell’interfaccia non sempre definiti correttamente</li>
    <li>Messaggi di stato non sempre percepibili dai lettori di schermo</li>
  </ul>
  <p>Queste criticità sono oggetto di monitoraggio e verranno progressivamente risolte nei prossimi aggiornamenti del sito.</p>

  <h2>Normativa di riferimento</h2>
  <ul>
    <li><strong>Legge 9 gennaio 2004, n. 4</strong> ("Legge Stanca") sull'accessibilità dei siti web</li>
    <li><strong>Direttiva (UE) 2019/882</strong>: obbliga l’accessibilità per i servizi digitali dal 2025</li>
    <li><strong>UNI CEI EN 301549</strong>: norma tecnica di riferimento per l’accessibilità ICT</li>
  </ul>

  <h2>Segnalazioni e contatti</h2>
  <p>Se riscontri problemi di accessibilità o desideri segnalarci delle difficoltà, puoi contattarci via email all’indirizzo: <a href="mailto:${siteMail}">${siteMail}</a>.</p>

  <p><em>Nonostante l'impegno costante per garantire la massima accessibilità, alcune sezioni del sito potrebbero risultare non pienamente conformi. Continuiamo a lavorare per migliorare l’esperienza per tutti gli utenti.</em></p>

  <h2>Redazione della dichiarazione</h2>
  <p>La presente dichiarazione è stata redatta da <strong>${siteTitle}</strong> in data <strong>${siteDate}</strong>, mediante test automatici e verifica interna.</p>
</div>
`,
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
    mod_contenuti_title: "Contents",
    complianceDescription: `<div>
  <p>We believe the web should be accessible to everyone, regardless of individual abilities. For this reason, we are committed to making this website compliant with WCAG 2.1 Level AA guidelines, in accordance with the UNI CEI EN 301549 standard and Directive (EU) 2019/882.</p>

  <h2>Supported Technologies and Accessibility Features</h2>
  <p>The site includes tools that allow each user to customize the interface according to their needs. These features include:</p>
  <ul>
    <li>Adjustment of contrast, font size and type, spacing, and alignment</li>
    <li>Compatibility with screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
    <li>Keyboard navigation support (Tab, Shift+Tab, Enter, Esc, etc.)</li>
    <li>Accessibility profiles for epilepsy, low vision, cognitive disabilities, ADHD, blindness, and motor impairments</li>
    <li>Quick activation of accessibility modes (e.g., using the Alt+1 keyboard shortcut)</li>
  </ul>

  <h2>Browser and Assistive Technology Compatibility</h2>
  <p>The site is designed to work with major browsers (Chrome, Firefox, Safari, Edge, Opera) and operating systems, on both desktop and mobile devices. It is compatible with widely used assistive technologies.</p>

  <h2>Non-accessible Content</h2>
  <p>Despite ongoing efforts to ensure full accessibility, some parts of the site may not fully comply with all accessibility requirements. Specifically:</p>
  <ul>
    <li>Insufficient color contrast in some areas</li>
    <li>Text spacing that may affect readability in specific cases</li>
    <li>Interface elements with roles and states not always properly defined</li>
    <li>Status messages not always detected by screen readers</li>
  </ul>
  <p>These issues are being monitored and will be progressively addressed in future updates.</p>

  <h2>Reference Standards</h2>
  <ul>
    <li><strong>Italian Law No. 4 of January 9, 2004</strong> ("Stanca Law") on web accessibility</li>
    <li><strong>Directive (EU) 2019/882</strong>: mandates accessibility for digital services by 2025</li>
    <li><strong>UNI CEI EN 301549</strong>: technical standard for ICT accessibility</li>
  </ul>

  <h2>Feedback and Contact</h2>
  <p>If you encounter any accessibility issues or would like to report a problem, please contact us by email at: <a href="mailto:${siteMail}">${siteMail}</a>.</p>

  <p><em>Despite our ongoing commitment to ensuring the highest level of accessibility, some sections of the site may not yet be fully compliant. We continue to work to improve the experience for all users.</em></p>

  <h2>Declaration Drafting</h2>
  <p>This declaration was prepared by <strong>${siteTitle}</strong> on <strong>${siteDate}</strong>, based on automated testing and internal review.</p>
</div>
`,
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
    mod_contenuti_title: "Contenu",
    complianceDescription: `<div>
  <p>Nous pensons que le web doit être accessible à tous, quelles que soient leurs capacités. C’est pourquoi nous nous engageons à rendre ce site conforme aux directives WCAG 2.1 niveau AA, conformément à la norme UNI CEI EN 301549 et à la Directive (UE) 2019/882.</p>

  <h2>Technologies et fonctionnalités d’assistance</h2>
  <p>Ce site utilise des outils permettant à chaque utilisateur de personnaliser l’interface selon ses besoins. Ces fonctionnalités incluent :</p>
  <ul>
    <li>Ajustement du contraste, de la taille et du type de police, de l’espacement et de l’alignement</li>
    <li>Compatibilité avec les lecteurs d’écran (JAWS, NVDA, VoiceOver, TalkBack)</li>
    <li>Navigation au clavier (Tab, Maj+Tab, Entrée, Échap, etc.)</li>
    <li>Profils d’accessibilité pour l’épilepsie, la basse vision, les troubles cognitifs, le TDAH, la cécité et les handicaps moteurs</li>
    <li>Activation rapide des modes accessibles (par exemple avec la combinaison de touches Alt+1)</li>
  </ul>

  <h2>Compatibilité avec les navigateurs et technologies d’assistance</h2>
  <p>Ce site est conçu pour fonctionner avec les principaux navigateurs (Chrome, Firefox, Safari, Edge, Opera) et systèmes d’exploitation, sur ordinateurs et appareils mobiles. Il est compatible avec les technologies d’assistance les plus courantes.</p>

  <h2>Contenus non accessibles</h2>
  <p>Malgré nos efforts constants pour assurer une accessibilité maximale, certaines parties du site peuvent ne pas être entièrement conformes. Notamment :</p>
  <ul>
    <li>Contraste de couleurs insuffisant dans certaines sections</li>
    <li>Espacement du texte pouvant nuire à la lisibilité dans certains cas</li>
    <li>Rôles et états de certains éléments de l’interface non toujours correctement définis</li>
    <li>Messages d’état non toujours détectés par les lecteurs d’écran</li>
  </ul>
  <p>Ces éléments sont en cours de surveillance et seront progressivement corrigés dans les prochaines mises à jour.</p>

  <h2>Normes de référence</h2>
  <ul>
    <li><strong>Loi italienne n° 4 du 9 janvier 2004</strong> (« Loi Stanca ») sur l’accessibilité des sites web</li>
    <li><strong>Directive (UE) 2019/882</strong> : rend l’accessibilité obligatoire pour les services numériques à partir de 2025</li>
    <li><strong>UNI CEI EN 301549</strong> : norme technique pour l’accessibilité des TIC</li>
  </ul>

  <h2>Contact et signalement</h2>
  <p>Si vous rencontrez des problèmes d’accessibilité ou souhaitez nous faire part de difficultés, vous pouvez nous contacter par e-mail à l’adresse suivante : <a href="mailto:${siteMail}">${siteMail}</a>.</p>

  <p><em>Malgré notre engagement continu en faveur de l’accessibilité, certaines sections du site peuvent ne pas encore être totalement conformes. Nous poursuivons nos efforts pour améliorer l’expérience pour tous les utilisateurs.</em></p>

  <h2>Rédaction de la déclaration</h2>
  <p>La présente déclaration a été rédigée par <strong>${siteTitle}</strong> en date du <strong>${siteDate}</strong>, à l’aide de tests automatiques et d’une vérification interne.</p>
</div>
`,
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
  }
};

export { userLang, siteTitle, siteMail };