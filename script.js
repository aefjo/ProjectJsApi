const btnCamera = document.querySelector(".btnCamera");
const titleH1 = document.querySelector("#titleH1");
const ulLi = document.querySelector(".ulLi");

const box = document.querySelector(".box");

const quoteText = document.querySelector('#quoteText');
const newQuote = document.querySelector('#newQuote');

const authorName = document.querySelector('#authorName');
const copyBtn = document.querySelector('#copyBtn');

randomQuote();

function randomQuote() {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
    });
}

newQuote.addEventListener('click' , randomQuote);

copyBtn.addEventListener('click' , () => {
    navigator.clipboard.writeText(quoteText.innerText);
    alert("Tetx");
});

btnCamera.addEventListener('click' , () => {
    titleH1.classList.toggle('active');
    newQuote.classList.toggle('active');
    copyBtn.classList.toggle('active');
    box.classList.toggle('boxActive');
});
