<?php 

header('Content-Type: application/javascript');

$lang = file_get_contents('accessibility/lang.json');
$html = file_get_contents('accessibility/panel.html');
$style = file_get_contents('accessibility/style.css');


?>
(function () {

const userLang = (window.accessibility_var && window.accessibility_var.lang) || 'it';
const siteTitle = (window.accessibility_var && window.accessibility_var.title) || 'Sito generico';
const siteMail = (window.accessibility_var && window.accessibility_var.mail) || 'info@example.com';

const i18n = <?php echo $lang ?>;
window.i18nAccessibility = i18n;


const html = `<?php echo $html ?>`;
const css = `<?php echo $style ?>`;

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

function injectStyle() {
    const styleTag = document.createElement("style");
    styleTag.textContent = css;
    document.head.appendChild(styleTag);
  }



function initUI() {
  injectHTML();
  injectScript();
  injectStyle();
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