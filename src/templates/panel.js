/**
 * Accessibility Ludosweb Project
 * Author: Piccolo Ludovico
 * Organization: Ludosweb
 * Description: Template for the accessibility panel and related UI components.
 */

export const panelTemplate = `<div id="lw-a-accessibility-btn" class="lw-a-accessibility-btn">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
  </svg>
  <span class="check-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
      <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z"/>
    </svg>
  </span>
</div>

<div id="accessibility-panel" class="lw-a-panel">
<button id="reset-btn" onclick="resetAccessibility()">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
  </svg>
  <span data-lw_i18n="resetBtn"></span>
</button>

<!-- Select per cambio lingua -->
<div class="lw-a-select-wrapper">
  <select id="languageSelect" class="lw-a-accessible-select">
      <option value="it">Italiano</option>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
  </select>
</div>

<label class="label-tooltip">
  
  <span data-lw_i18n="textAlign" ></span>
  <div class="lw-a-select-wrapper">
    <select id="textAlign" class="lw-a-accessible-select">
      <option value="" data-lw_i18n="textAlignA"></option>
      <option value="left" data-lw_i18n="textAlignleft"></option>
      <option value="center" data-lw_i18n="textAligncenter"></option>
      <option value="right" data-lw_i18n="textAlignright"></option>
    </select>
  </div>
  <span class="tooltip-content" data-lw_i18n="textAlign_tooltip"></span>
</label>



<h4 data-lw_i18n="mod_contenuti_title"></h4>

<label class="label-tooltip">
<span data-lw_i18n="scaleContents"></span>
  <div class="scale-controls">
    <button class="scale-btn" id="decreaseScale">-</button>
    <span id="scaleValue">100%</span>
    <button class="scale-btn" id="increaseScale">+</button>
    <input type="range" id="pageScale" min="90" max="110" step="5" value="100" style="display: none;">
  </div>
  <span class="tooltip-content" data-lw_i18n="scaleContents_tooltip"></span>
</label>

<label class="label-tooltip">
  <span data-lw_i18n="fontSize"></span>
  <div class="scale-controls">
    <button class="scale-btn" id="decreaseFontSize">-</button>
    <span id="fontSizeValue">100%</span>
    <button class="scale-btn" id="increaseFontSize">+</button>
    <input type="range" id="fontSize" min="90" max="300" step="10" value="100" style="display: none;">
  </div>
  <span class="tooltip-content" data-lw_i18n="fontSize_tooltip"></span>
</label>

<label class="label-tooltip">
  <span data-lw_i18n="letterSpacing"></span>
  <div class="scale-controls">
    <button class="scale-btn" id="decreaseLetterSpacing">-</button>
    <span id="letterSpacingValue">0</span>
    <button class="scale-btn" id="increaseLetterSpacing">+</button>
    <input type="range" id="letterSpacing" min="0" max="10" step="0.5" value="0" style="display: none;">
  </div>
  <span class="tooltip-content" data-lw_i18n="letterSpacing_tooltip"></span>
</label>

<label class="label-tooltip">
  <span data-lw_i18n="lineHeight"></span>
  <div class="scale-controls">
    <button class="scale-btn" id="decreaseLineHeight">-</button>
    <span id="lineHeightValue">1.5</span>
    <button class="scale-btn" id="increaseLineHeight">+</button>
    <input type="range" id="lineHeight" min="1" max="3" step="0.1" value="1.5" style="display: none;">
  </div>
  <span class="tooltip-content" data-lw_i18n="lineHeight_tooltip"></span>
</label>



<label class="label-tooltip">
  <div class="checkbox-wrapper">
    <input type="checkbox" id="readableFont" class="accessible-checkbox"> 
    <span data-lw_i18n="readableFont"></span>
  </div>
  <span class="tooltip-content" data-lw_i18n="readableFont_tooltip"></span>
</label>

<h4 data-lw_i18n="mod_col_title"></h4>

<div class="mode-buttons">
  <button class="mode-btn" id="contrastHigh">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8v16z"/>
    </svg>
    <span data-lw_i18n="contrastHigh"></span>
  </button>
  <button class="mode-btn" id="contrastLow">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10V2z"/>
    </svg>
    <span data-lw_i18n="contrastLow"></span>
  </button>
  <button class="mode-btn" id="monochrome">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10H12V2z"/>
    </svg>
    <span data-lw_i18n="monochrome"></span>
  </button>
  <button class="mode-btn" id="sepiaTone">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10H12V2z"/>
    </svg>
    <span data-lw_i18n="sepiaTone"></span>
  </button>
  <button class="mode-btn" id="nightMode">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M9.37 5.51C10.19 3.93 11.99 3 14 3c3.87 0 7 3.13 7 7 0 2.01-.93 3.81-2.51 4.63C17.99 18.87 15.13 21 12 21c-3.87 0-7-3.13-7-7 0-3.13 2.13-5.99 4.37-7.49z"/>
    </svg>
    <span data-lw_i18n="nightMode"></span>
  </button>
</div>

<h4 data-lw_i18n="supp_title"></h4>

<label class="label-tooltip">
  <div class="checkbox-wrapper">
    <input type="checkbox" id="screenReader" class="accessible-checkbox">
    <span data-lw_i18n="screenReader"></span>
  </div>
  <span class="tooltip-content" data-lw_i18n="screenReader_tooltip"></span>
</label>

<label class="label-tooltip">
  <div class="checkbox-wrapper">
    <input type="checkbox" id="keyboardNav" class="accessible-checkbox">
    <span data-lw_i18n="keyboardNav"></span>
  </div>
  <span class="tooltip-content" data-lw_i18n="keyboardNav_tooltip"></span>
</label>

<label class="label-tooltip">
  <div class="checkbox-wrapper">
    <input type="checkbox" id="dynamicContentPause" class="accessible-checkbox">
    <span data-lw_i18n="dynamicContentPause"></span>
  </div>
  <span class="tooltip-content" data-lw_i18n="dynamicContentPause_tooltip"></span>
</label>

<h4 data-lw_i18n="orient_title"></h4>

<label class="label-tooltip">
  <div class="checkbox-wrapper">
    <input type="checkbox" id="highlightHover" class="accessible-checkbox">
    <span data-lw_i18n="highlightHover"></span>
  </div>
  <span class="tooltip-content" data-lw_i18n="highlightHover_tooltip"></span>
</label>

<label class="label-tooltip">
  <div class="checkbox-wrapper">
    <input type="checkbox" id="hideImages" class="accessible-checkbox">
    <span data-lw_i18n="hideImages"></span>
  </div>
  <span class="tooltip-content" data-lw_i18n="hideImages_tooltip"></span>
</label>

<label class="label-tooltip">
  <div class="checkbox-wrapper">
    <input type="checkbox" id="largeCursor" class="accessible-checkbox">
    <span data-lw_i18n="largeCursor"></span>
  </div>
  <span class="tooltip-content" data-lw_i18n="largeCursor_tooltip"></span>
</label>

<label class="label-tooltip">
  <div class="checkbox-wrapper">
    <input type="checkbox" id="readingMask" class="accessible-checkbox">
    <span data-lw_i18n="readingMask"></span>
  </div>
  <span class="tooltip-content" data-lw_i18n="readingMask_tooltip"></span>
</label>

<div id="accessibility-footer" style="margin-top: 2rem; text-align: center; font-size: 0.8rem;">
<p>Powered by <strong>Ludosweb</strong></p>
<button id="openCompliance" data-lw_i18n="complianceBtn" style="margin-top: 0.5rem; padding: 6px 12px; font-size: 0.85rem; background: var(--primary-color); color: white; border: none; border-radius: 6px; cursor: pointer;">
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

  <h1 data-lw_i18n="complianceTitle" style="color: var(--primary-color); font-size: 1.4rem;"></h1>

  <p data-lw_i18n="complianceStatus"></p>

  <div data-lw_i18n="complianceDescription"></div>

 
</div>
</div>`;