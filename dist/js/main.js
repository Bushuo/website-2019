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
    linkContact: "#link-contact",
    homeSection: "#home",
    aboutSection: "#about",
    workSection: "#work",
    contactSection: "#contact"
};

const sectionHeights = {
    home: 0,
    about: 1000,
    work: 1600,
    contact: 2200
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

let toggleMenu = () => {
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

let smoothScroll = (targetSelector, duration) => {
    toggleMenu();
    let target = document.querySelector(targetSelector);
    let targetPos = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let startTime = null;

    let animation = currentTime => {
        if (startTime === null) {
            startTime = currentTime;
        }
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, targetPos, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    let ease = (t, sp, dis, dur) => {
        t /= dur / 2;
        if (t < 1) return (dis / 2) * t * t + sp;
        t--;
        return (-dis / 2) * (t * (t - 2) - 1) + sp;
    };

    requestAnimationFrame(animation);
};

let handleCurrentLink = () => {
    if (window.pageYOffset < sectionHeights.about) {
        toggleCurrentLink(0);
    } else if (
        window.pageYOffset >= sectionHeights.about &&
        window.pageYOffset < sectionHeights.work
    ) {
        toggleCurrentLink(1);
    } else if (
        window.pageYOffset >= sectionHeights.work &&
        window.pageYOffset < sectionHeights.contact
    ) {
        toggleCurrentLink(2);
    } else if (window.pageYOffset >= sectionHeights.contact) {
        toggleCurrentLink(3);
    }
};

let toggleCurrentLink = current => {
    let kids = document.querySelector(DOMstrings.menuNav).children;
    for (let i = 0; i < kids.length; i++) {
        kids[i].classList.remove("current");
    }
    kids[current].classList.add("current");
};

const animTime = 1500;
menuBtn.addEventListener("click", toggleMenu);
hLink.addEventListener("click", () => {
    smoothScroll("#pagetop", animTime);
});
aLink.addEventListener("click", () => {
    smoothScroll("#about", animTime);
});
wLink.addEventListener("click", () => {
    smoothScroll("#work", animTime);
});
cLink.addEventListener("click", () => {
    smoothScroll("#contact", animTime);
});

document.addEventListener("scroll", () => {
    handleCurrentLink();
});
