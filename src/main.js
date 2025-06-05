
/**
 * Accessibility Ludosweb Project
 * Author: Piccolo Ludovico
 * Organization: Ludosweb
 * Description: Main script for initializing and managing accessibility features.
 */


import './style.css';
import { panelTemplate } from './templates/panel';
import { initUI } from './js/ui';
import { applyAccessibility, resetAccessibility } from './js/accessibility';
import { loadSettings } from './js/settings';
import { lw_i18n, userLang } from './js/lw_i18n';

(function LudoswebAccessibility() {

    if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initAccessibilityPanel);
} else {
  initAccessibilityPanel(); // DOM già pronto
}

function initAccessibilityPanel() {
        document.body.insertAdjacentHTML('beforeend', panelTemplate);


        // Add this where you initialize the accessibility panel
        const position = lw_accessibility_var?.position || 'right';
        if (position === 'left') {
            document.getElementById('lw-a-accessibility-btn').classList.add('position-left');
            document.getElementById('accessibility-panel').classList.add('position-left');
        }


        // Initialize elements object
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

        // Initialize UI components
        const panel = document.getElementById("accessibility-panel");
        const btn = document.getElementById("lw-a-accessibility-btn");

        // Event listeners
        document.getElementById('reset-btn').addEventListener('click', () => resetAccessibility(elements));
        document.getElementById('openCompliance').addEventListener('click', () => {
            document.getElementById('complianceModal').style.display = 'flex';
        });

        btn.addEventListener("click", () => {
            const isVisible = panel.style.display === "block";
            panel.style.display = isVisible ? "none" : "block";
        });

        Object.values(elements).forEach(el => {
            el.addEventListener("input", () => applyAccessibility(elements));
            el.addEventListener("change", () => applyAccessibility(elements));
        });

        // Outside click handler
        document.addEventListener('click', function (e) {
            const isClickInsidePanel = panel.contains(e.target);
            const isClickOnButton = btn.contains(e.target);

            if (!isClickInsidePanel && !isClickOnButton && panel.style.display === 'block') {
                panel.style.display = 'none';
            }
        });

        // Escape key handler
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && panel.style.display === 'block') {
                panel.style.display = 'none';
            }
        });

        // Language change handler
        document.getElementById('languageSelect').addEventListener('change', function () {
            const selectedLang = this.value;
            localStorage.setItem("accessibilitySettings_lang", selectedLang);
            const langPack = lw_i18n[selectedLang] || lw_i18n['it'];
            document.querySelectorAll("[data-lw_i18n]").forEach(elem => {
                const key = elem.getAttribute("data-lw_i18n");

                const value = langPack[key] || lw_i18n['it'][key];

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

        const buttons = document.querySelectorAll('.mode-btn');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Controlla se il pulsante è già attivo
                const isActive = button.classList.contains('active');

                if (isActive) {
                    button.classList.remove('active');
                } else {
                    buttons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                }
                applyAccessibility(elements);
            });
        });


        // Initialize the UI
        initUI(elements);
        // Scale buttons functionality
        document.getElementById('decreaseScale').addEventListener('click', () => {
            const scaleInput = document.getElementById('pageScale');
            if (parseInt(scaleInput.value) > parseInt(scaleInput.min)) {
                scaleInput.value = parseInt(scaleInput.value) - parseInt(scaleInput.step);
                applyAccessibility(elements);
            }
        });

        document.getElementById('increaseScale').addEventListener('click', () => {
            const scaleInput = document.getElementById('pageScale');
            if (parseInt(scaleInput.value) < parseInt(scaleInput.max)) {
                scaleInput.value = parseInt(scaleInput.value) + parseInt(scaleInput.step);
                applyAccessibility(elements);
            }
        });

        // Font size buttons
        document.getElementById('decreaseFontSize').addEventListener('click', () => {
            const fontInput = document.getElementById('fontSize');
            if (parseInt(fontInput.value) > parseInt(fontInput.min)) {
                fontInput.value = parseInt(fontInput.value) - parseInt(fontInput.step);
                applyAccessibility(elements);
            }
        });

        document.getElementById('increaseFontSize').addEventListener('click', () => {
            const fontInput = document.getElementById('fontSize');
            if (parseInt(fontInput.value) < parseInt(fontInput.max)) {
                fontInput.value = parseInt(fontInput.value) + parseInt(fontInput.step);
                applyAccessibility(elements);
            }
        });

        // Letter spacing buttons
        document.getElementById('decreaseLetterSpacing').addEventListener('click', () => {
            const spacingInput = document.getElementById('letterSpacing');
            if (parseFloat(spacingInput.value) > parseFloat(spacingInput.min)) {
                spacingInput.value = parseFloat(spacingInput.value) - parseFloat(spacingInput.step);
                applyAccessibility(elements);
            }
        });

        document.getElementById('increaseLetterSpacing').addEventListener('click', () => {
            const spacingInput = document.getElementById('letterSpacing');
            if (parseFloat(spacingInput.value) < parseFloat(spacingInput.max)) {
                spacingInput.value = parseFloat(spacingInput.value) + parseFloat(spacingInput.step);
                applyAccessibility(elements);
            }
        });

        // Line height buttons
        document.getElementById('decreaseLineHeight').addEventListener('click', () => {
            const heightInput = document.getElementById('lineHeight');
            if (parseFloat(heightInput.value) > parseFloat(heightInput.min)) {
                heightInput.value = parseFloat(heightInput.value) - parseFloat(heightInput.step);
                applyAccessibility(elements);
            }
        });

        document.getElementById('increaseLineHeight').addEventListener('click', () => {
            const heightInput = document.getElementById('lineHeight');
            if (parseFloat(heightInput.value) < parseFloat(heightInput.max)) {
                heightInput.value = parseFloat(heightInput.value) + parseFloat(heightInput.step);
                applyAccessibility(elements);
            }
        });
    }
})();

