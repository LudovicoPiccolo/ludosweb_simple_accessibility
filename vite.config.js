import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';

export default defineConfig({
  plugins: [
    banner(`
/**
 * Accessibility Ludosweb Project
 * Author: Piccolo Ludovico
 * Organization: Ludosweb.com
 * Description: Generated file for managing accessibility features.
 * Build Date: ${new Date().toLocaleDateString()}
 */
    `),
  ],
});