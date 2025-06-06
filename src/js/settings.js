/**
 * Accessibility Ludosweb Project
 * Author: Piccolo Ludovico
 * Organization: Ludosweb
 * Description: Functions for saving and loading accessibility settings.
 */

export function saveSettings(elements, btn) {
    const data = {};
    Object.keys(elements).forEach(k => {
        const el = elements[k];
        data[k] = el.type === "checkbox" ? el.checked : el.value;
    });

    // Salva lo stato del pulsante attivo
    const activeButton = document.querySelector('.mode-btn.active');
    data.activeMode = activeButton ? activeButton.id : null;

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

export function loadSettings(elements) {
    if (!elements) return;

    const data = JSON.parse(localStorage.getItem("accessibilitySettings"));
    const btn = document.getElementById("lw-a-accessibility-btn");

    if (data) {
        Object.keys(elements).forEach(k => {
            const el = elements[k];
            if (k in data) {
                el.type === "checkbox" ? el.checked = data[k] : el.value = data[k];
            }
        });

        // Ripristina lo stato del pulsante attivo
        if (data.activeMode) {
            const activeButton = document.getElementById(data.activeMode);
            if (activeButton) {
                document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
                activeButton.classList.add('active');
                document.body.classList.add(data.activeMode); // Aggiungi la classe al body
            }
        }

        return true;
    }
    return false;
}