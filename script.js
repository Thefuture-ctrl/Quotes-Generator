
const diceBtn = document.getElementById("dice-btn");
const advNum = document.getElementById("advice-num");
const quote = document.querySelector(".advice-display")
const link = "https://type.fit/api/quotes";

diceBtn.addEventListener("click",fetchQuote,advNumFun)

function fetchQuote(){
      fetch(link)
      .then(response => response.json())
      .then(data => {
        const randomQuoteIndex = Math.round(Math.random()*data.length);
        quote.innerHTML = data[randomQuoteIndex].text;
        (data[randomQuoteIndex]);
      });
}
fetchQuote();

function advNumFun(){
    const randomQuoteIndexNum = data.length;
     advNum.innerHTML = randomQuoteIndexNum.value
}
advNumFun();