const DOMStrings = {
    entryTop: ".entry-top",
    entryBot: ".entry-bot"
};

const entryTop = document.querySelector(DOMStrings.entryTop);
const entryBot = document.querySelector(DOMStrings.entryBot);

this.addEventListener("load", () => {
    setTimeout(() => {
        entryTop.classList.toggle("slide");
        entryBot.classList.toggle("slide");
    }, 2000);
});
