const dataArr = require("../data.js")

function newQuote() {
    var randomNumber = Math.floor(Math.random()*dataArr.data.facts.length);
    const new_quote = dataArr.data.facts[randomNumber];
    return new_quote;
}

newQuote();