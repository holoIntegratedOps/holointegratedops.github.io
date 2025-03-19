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
