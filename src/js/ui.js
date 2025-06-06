/**
 * Accessibility Ludosweb Project
 * Author: Piccolo Ludovico
 * Organization: Ludosweb
 * Description: UI initialization and management for accessibility features.
 */
import { lw_i18n, userLang } from './lw_i18n';
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
        // Update scale value display if different from default
        const scaleDisplay = document.getElementById('scaleValue');
        const pageScale = document.getElementById('pageScale');
        if (scaleDisplay && pageScale && pageScale.value !== '100') {
            scaleDisplay.textContent = pageScale.value + '%';
        }
        applyAccessibility(elements);
    }
    }, 100);
    
    const langPack = lw_i18n[userLang] || lw_i18n['it'];

  document.querySelectorAll("[data-lw_i18n]").forEach(elem => {
    const key = elem.getAttribute("data-lw_i18n");
    const value = langPack[key] || window.lw_i18nAccessibility['it'][key];
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