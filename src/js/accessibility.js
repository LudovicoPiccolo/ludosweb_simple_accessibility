/**
 * Accessibility Ludosweb Project
 * Author: Piccolo Ludovico
 * Organization: Ludosweb
 * Description: Functions for managing and applying accessibility features.
 */

import { defaultFontSettings, scaleMap } from './constants';
import { saveSettings } from './settings';

export function enableKeyboardFocusStyles() {
    document.addEventListener("keydown", handleFirstTab);
}

export function disableKeyboardFocusStyles() {
    document.removeEventListener("keydown", handleFirstTab);
    document.body.classList.remove("user-is-tabbing");
}

function handleFirstTab(e) {
    if (e.key === "Tab") {
        document.body.classList.add("user-is-tabbing");
        document.removeEventListener("keydown", handleFirstTab);
    }
}

export function applyFontScaling(baseSizePx) {
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


function disableInlineColor() {
  // Trova tutti gli elementi con un attributo "style"
  const elementsWithStyle = document.querySelectorAll('[style]');

  elementsWithStyle.forEach(el => {
    // Controlla se lo stile contiene "color"
    const colorValue = el.style.color;
    if (colorValue) {
      // Salva il valore originale in un dataset personalizzato
      el.dataset.originalColor = colorValue;

      // Rimuovi temporaneamente il colore
      el.style.color = '';
    }
  });
}

function restoreInlineColor() {
  // Trova tutti gli elementi che hanno un dataset "originalColor"
  const elementsWithOriginalColor = document.querySelectorAll('[data-original-color]');

  elementsWithOriginalColor.forEach(el => {
    // Ripristina il colore originale
    el.style.color = el.dataset.originalColor;

    // Rimuovi il dataset
    delete el.dataset.originalColor;
  });
}


export function applyAccessibility(elements) {
    const html = document.documentElement;
    const body = document.body;

    // Update all value displays
    document.getElementById('scaleValue').textContent = elements.pageScale.value + '%';
    document.getElementById('fontSizeValue').textContent = elements.fontSize.value + '%';
    document.getElementById('letterSpacingValue').textContent = elements.letterSpacing.value + 'px';
    document.getElementById('lineHeightValue').textContent = elements.lineHeight.value;

    // Font settings
    const letterSpacing = elements.letterSpacing.value;
    const lineHeight = elements.lineHeight.value;
    const textAlign = elements.textAlign.value || 'inherit';
    const fontFamily = elements.readableFont.checked ? 'Arial, sans-serif' : 'inherit';
    const fontSize = parseInt(elements.fontSize.value);



    html.style.removeProperty('--acc-font-size');
    html.style.removeProperty('--acc-letter-spacing');
    html.style.removeProperty('--acc-line-height');
    html.style.removeProperty('--acc-text-align');
    html.style.removeProperty('--acc-font-family');
    html.classList.remove("accessible_font");

    const fontSettingsChanged =
    fontSize !== defaultFontSettings.fontSize ||
    letterSpacing !== defaultFontSettings.letterSpacing ||
    lineHeight !== defaultFontSettings.lineHeight ||
    textAlign !== defaultFontSettings.textAlign ||
    elements.readableFont.checked !== defaultFontSettings.readableFont;

    if (fontSettingsChanged) {
      html.classList.add("accessible_font");
    }
    if (fontSize !== defaultFontSettings.fontSize) {
      applyFontScaling(fontSize / 100 * 16);
    }
    if (letterSpacing !== defaultFontSettings.letterSpacing) {
      html.style.setProperty('--acc-letter-spacing', letterSpacing + 'px');
    }
    if (lineHeight !== defaultFontSettings.lineHeight) {
      html.style.setProperty('--acc-line-height', lineHeight);
    }
    if (textAlign !== defaultFontSettings.textAlign) {
      html.style.setProperty('--acc-text-align', textAlign);
    }
    if (fontFamily !== defaultFontSettings.fontFamily) {
      html.style.setProperty('--acc-font-family', fontFamily);
    }

    // Other settings
    // html.classList.add("accessible");
    html.classList.toggle("large-cursor", elements.largeCursor.checked);

    const activeButton = document.querySelector('.mode-btn.active');
    body.classList.remove("contrastHigh", "contrastLow", "monochrome", "sepiaTone", "nightMode");


    
    if (activeButton) {
        body.classList.add(activeButton.id); // Usa l'ID del pulsante come classe
        disableInlineColor();
    }


    body.classList.toggle("highlight-hover", elements.highlightHover.checked);
    body.classList.toggle("no-images", elements.hideImages.checked);

    // Scale
    const scaleValue = elements.pageScale.value;
    if (scaleValue !== "100") {
        document.body.style.zoom = scaleValue + '%';
    } else {
        document.body.style.removeProperty('zoom');
    }

    // Screen reader ARIA
    if (elements.screenReader.checked) {
        html.setAttribute("role", "document");
        html.setAttribute("aria-label", "Contenuto principale della pagina");
    } else {
        html.removeAttribute("role");
        html.removeAttribute("aria-label");
    }

    if (elements.keyboardNav.checked) {
        enableKeyboardFocusStyles();
    } else {
        disableKeyboardFocusStyles();
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
          style.textContent = `* {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }`;
          document.head.appendChild(style);
          document.querySelectorAll('video').forEach(video => {
            video.pause();
          });
          document.querySelectorAll('iframe').forEach(iframe => {
            try {
              iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
              iframe.contentWindow.postMessage('{"method":"pause"}', '*');
            } catch (e) {}
          });
        }
      } else {
        const pauseStyle = document.getElementById("pause-dynamics");
        if (pauseStyle) pauseStyle.remove();
        document.querySelectorAll('video').forEach(video => {
          if (!video.paused) video.play();
        });
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
      

    
    
    // Save settings after applying them
    const btn = document.getElementById("lw-a-accessibility-btn");
    saveSettings(elements, btn);
}

export function resetAccessibility(elements) {
    const html = document.documentElement;
    const body = document.body;
    
    // Reset all display values using constants
    document.getElementById('scaleValue').textContent = defaultFontSettings.pageScale + '%';
    document.getElementById('fontSizeValue').textContent = defaultFontSettings.fontSize + '%';
    document.getElementById('letterSpacingValue').textContent = defaultFontSettings.letterSpacing + 'px';
    document.getElementById('lineHeightValue').textContent = defaultFontSettings.lineHeight;
    
    // Reset all range inputs using constants
    document.getElementById('pageScale').value = defaultFontSettings.pageScale;
    document.getElementById('fontSize').value = defaultFontSettings.fontSize;
    document.getElementById('letterSpacing').value = defaultFontSettings.letterSpacing;
    document.getElementById('lineHeight').value = defaultFontSettings.lineHeight;



        html.classList.remove("accessible");
        html.classList.remove("accessible_font");
        
        html.style.removeProperty('--acc-letter-spacing');
        html.style.removeProperty('--acc-line-height');
        html.style.removeProperty('--acc-text-align');
        html.style.removeProperty('--acc-font-family');
        
        document.body.style.removeProperty('transform');
        document.body.style.removeProperty('transform-origin');
        document.body.style.removeProperty('zoom');
        
        const activeButtons = document.querySelectorAll('.mode-btn.active');
        activeButtons.forEach(button => {
          button.classList.remove('active');
        });
        
        body.classList.remove("contrastHigh", "contrastLow", "monochrome", "sepiaTone", "nightMode", "highlight-hover", "no-images");
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
        restoreInlineColor();
        document.getElementById("lw-a-accessibility-btn").classList.remove("accessibility-active");
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