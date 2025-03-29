/**
 * Accessibility Ludosweb Project
 * Author: Piccolo Ludovico
 * Organization: Ludosweb
 * Description: UI initialization and management for accessibility features.
 */
import { i18n, userLang } from './i18n';
import { applyAccessibility, resetAccessibility } from './accessibility';
import { loadSettings, saveSettings } from './settings';

export function initUI(elements) {
    // Add reset button event listener
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.onclick = () => resetAccessibility(elements);
    }

    setTimeout(() => {
        if (loadSettings(elements)) {
            applyAccessibility(elements);
        }
    }, 100);
    
    const langPack = i18n[userLang] || i18n['it'];

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
  // Imposta il valore iniziale della select in base alla lingua utente
  document.getElementById('languageSelect').value = userLang;
}



export function handleKeyboardFocus() {
    // Copy keyboard focus related functions here
}

export { resetAccessibility }; // Re-export for external use