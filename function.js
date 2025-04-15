// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-8B85G396XZ');


// Header and Footer
function footerText() {
    const text = "&copy; 2025 Holo Integrated Ops. All rights reserved."
    return text
}
const displayFooter = footerText()
document.getElementById('footer-placeholder').innerHTML = displayFooter;

function headerText() {
    const text = "Holo Integrated Ops | Cybersecurity & Software Development"
    return text
}
const displayHeader = headerText()
document.getElementById('header-placeholder').innerHTML = displayHeader;

// Menu button
function menuBtn() {
    const nav = document.getElementById("menu");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// theme mode
function darkMode() {
    const body_theme = document.body.classList.toggle("dark-mode");
    localStorage.setItem('dark_mode', body_theme ? 'enabled' : 'disabled')
};
window.addEventListener('DOMContentLoaded', () => {
    const dark_mode = localStorage.getItem('dark_mode');
    if (dark_mode === 'enabled') {
        document.body.classList.add('dark-mode')
    }
});
document.getElementById('darkModeBtn').addEventListener('click', darkMode)
