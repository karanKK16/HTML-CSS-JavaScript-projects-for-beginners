const btnE1 = document.getElementById("btn");
const quoteE1 = document.getElementById("quote")
const authorE1 = document.getElementById("author")
const apiURL = "https://api.quotable.io/random";

async function getQuote(){
    try {
        btnE1.innerText = "Loading.....";
        btnE1.disabled = true;
        quoteE1.innerText = "Updating....";
        authorE1.innerText = "updating..";
        const response = await fetch(apiURL);
        const data = await response.json();
        const quotecontent = data.content;
        const quoteAuthor = data.author;
        quoteE1.innerText = quotecontent;
        authorE1.innerText = "~" + data.author;
        btnE1.innerText = "Get a quote";
        btnE1.disabled = false;
        console.log(data);
        
    } catch (error) {
        console.log(error);
        quoteE1.innerText = " An error happened, try again later";
        authorE1.innerText =" An error happened";
        btnE1.innerText = "Get a quote";
        btnE1.disabled = false;
    }

}

btnE1.addEventListener("click", getQuote);