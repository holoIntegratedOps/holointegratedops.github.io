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
    const body_theme = document.getElementsByClassName("body");
    const header_theme = document.getElementsByClassName("header");

    for (let i = 0; i < body_theme.length; i++) {
        body_theme[i].style.color = "#B0B0B0";
        body_theme[i].style.backgroundColor = "#121212";
    }

    for (let i = 0; i < header_theme.length; i++) {
        header_theme[i].style.color = "#01162c";
    }

    localStorage.setItem("theme", "dark");
}
