// select dom items
const DOMstrings = {
    menuButton: ".menu-btn",
    menu: ".menu",
    menuBranding: ".menu-branding",
    menuNav: ".menu-nav",
    navItem: ".nav-item",
    message: "#message",
    subject: "#subject",
    linkHome: "#link-home",
    linkAbout: "#link-about",
    linkWork: "#link-work",
    linkContact: "#link-contact"
};

let showMenu = false;

const menuBtn = document.querySelector(DOMstrings.menuButton);
const menu = document.querySelector(DOMstrings.menu);
const menuBranding = document.querySelector(DOMstrings.menuBranding);
const menuNav = document.querySelector(DOMstrings.menuNav);
const navItems = document.querySelectorAll(DOMstrings.navItem);

const hLink = document.querySelector(DOMstrings.linkHome);
const aLink = document.querySelector(DOMstrings.linkAbout);
const wLink = document.querySelector(DOMstrings.linkWork);
const cLink = document.querySelector(DOMstrings.linkContact);

const message = document.querySelector(DOMstrings.message);
const subject = document.querySelector(DOMstrings.subject);

toggleMenu = () => {
    menuBtn.classList.toggle("close");
    menu.classList.toggle("show");
    menuNav.classList.toggle("show");
    menuBranding.classList.toggle("show");
    navItems.forEach(el => {
        el.classList.toggle("show");
    });

    // set menu state
    showMenu = !showMenu;
};

let sendMail = () => {
    message_text = message.value;
    subject_text = subject.value;
    //console.log(`message = ${message_text}\nsubject = ${subject_text}`);
    document.location.href =
        "mailto:me@paulbuschmann.com?subject=" +
        encodeURIComponent(subject_text) +
        "&body=" +
        encodeURIComponent(message_text);
};

let resetInput = () => {
    message.value = "";
    subject.value = "";
};

menuBtn.addEventListener("click", toggleMenu);
hLink.addEventListener("click", toggleMenu);
aLink.addEventListener("click", toggleMenu);
wLink.addEventListener("click", toggleMenu);
cLink.addEventListener("click", toggleMenu);
