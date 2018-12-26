// select dom items
const DOMstrings = {
    menuButton: ".menu-btn",
    menu: ".menu",
    menuBranding: ".menu-branding",
    menuNav: ".menu-nav",
    navItem: ".nav-item"
};

let showMenu = false;

const menuBtn = document.querySelector(DOMstrings.menuButton);
const menu = document.querySelector(DOMstrings.menu);
const menuBranding = document.querySelector(DOMstrings.menuBranding);
const menuNav = document.querySelector(DOMstrings.menuNav);
const navItems = document.querySelectorAll(DOMstrings.navItem);

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("close");
    menu.classList.toggle("show");
    menuNav.classList.toggle("show");
    menuBranding.classList.toggle("show");
    navItems.forEach(el => {
        el.classList.toggle("show");
    });

    // set menu state
    showMenu = !showMenu;
});
