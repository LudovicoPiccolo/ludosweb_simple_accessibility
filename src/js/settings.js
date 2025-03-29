export function saveSettings(elements, btn) {
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

export function loadSettings(elements) {
    if (!elements) return;
    
    const data = JSON.parse(localStorage.getItem("accessibilitySettings"));
    const btn = document.getElementById("accessibility-btn");

    if (data) {
        Object.keys(elements).forEach(k => {
            const el = elements[k];
            if (k in data) {
                el.type === "checkbox" ? el.checked = data[k] : el.value = data[k];
            }
        });
        return true;
    }
    return false;
}