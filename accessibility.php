<?php 

header('Content-Type: application/javascript');

$lang = file_get_contents('accessibility/lang.json');
$html = file_get_contents('accessibility/panel.html');
$style = file_get_contents('accessibility/style.css');
$js = str_replace("`","\`",file_get_contents('accessibility/script.js'));


?>
(function () {

const userLang = (window.accessibility_var && window.accessibility_var.lang) || 'it';
const siteTitle = (window.accessibility_var && window.accessibility_var.title) || 'Sito generico';
const siteMail = (window.accessibility_var && window.accessibility_var.mail) || 'info@example.com';

const i18n = <?php echo $lang ?>;
window.i18nAccessibility = i18n;


const html = `<?php echo $html ?>`;
const css = `<?php echo $style ?>`;

const js = `<?php echo $js ?>`;

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