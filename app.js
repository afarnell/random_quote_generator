let quote = document.querySelector("#quote");
let button = document.querySelector("#btn");
let authorName = document.querySelector("#author-name");

async function getQuote() {
  let res = await fetch("https://type.fit/api/quotes");

  let data = await res.json();
  let getRandomQuote = Math.floor(Math.random() * data.length);
  if (data[getRandomQuote].author == null) {
    authorName.innerHTML = "Unknown";
  } else {
    authorName.innerHTML = data[getRandomQuote].author;
  }
  quote.innerHTML = `${data[getRandomQuote].text}`;

  console.log(data[getRandomQuote]);
}
getQuote();

btn.addEventListener("click", getQuote);
