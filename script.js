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


