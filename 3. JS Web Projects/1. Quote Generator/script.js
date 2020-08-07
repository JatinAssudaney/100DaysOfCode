const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");
let counter = 0;

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

// Get Quote From API
async function getQuote() {
  showLoadingSpinner();
  // To avoid CORS Error we need to use Proxy Server to make our API call
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = "http://api.forismatic.com/api/1.0/";
  const response = await axios.get(proxyUrl + apiUrl, {
    params: {
      method: "getQuote",
      lang: "en",
      format: "json",
    },
  });
  try {
    const { data } = await response;
    // If author is blank, add "Unknown"
    if (data.quoteAuthor) {
      authorText.innerText = data.quoteAuthor;
    } else {
      authorText.innerText = "Unknown";
    }

    // Reduce font-size for long quotes
    if (data.quoteText.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
    quoteText.innerText = data.quoteText;

    removeLoadingSpinner();
  } catch (error) {
    //  Recursive Call which can lead to infinite loop
    counter++;
    if (counter < 10) {
      getQuote();
    } else {
      counter = 0;
      console.log("Whoops, no quote", error);
    }
  }
}

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuote();
