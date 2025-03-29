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

export function applyAccessibility(elements) {
    const html = document.documentElement;
    const body = document.body;

    // Font settings
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

    // Other settings
    html.classList.add("accessible");
    html.classList.toggle("large-cursor", elements.largeCursor.checked);
    body.classList.toggle("contrast-high", elements.contrastHigh.checked);
    body.classList.toggle("contrast-low", elements.contrastLow.checked);
    body.classList.toggle("monochrome", elements.monochrome.checked);
    body.classList.toggle("sepia-mode", elements.sepiaTone.checked);
    body.classList.toggle("night-mode", elements.nightMode.checked);
    body.classList.toggle("highlight-hover", elements.highlightHover.checked);
    body.classList.toggle("no-images", elements.hideImages.checked);

    // Scale
    const scaleValue = elements.pageScale.value;
    if (scaleValue !== "100") {
        document.documentElement.style.zoom = scaleValue + '%';
    } else {
        document.documentElement.style.removeProperty('zoom');
    }

    // Screen reader ARIA
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
    const btn = document.getElementById("accessibility-btn");
    saveSettings(elements, btn);
}

export function resetAccessibility(elements) {

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