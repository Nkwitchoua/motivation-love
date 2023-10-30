const toggleBody = document.getElementById("toggle-body")
const btn = document.getElementById("toggle-btn");
const label = document.getElementById("toggle-label");
const videoLeft = document.getElementById("video-left");
const videoRight = document.getElementById("video-right");
const quoteBtn = document.getElementById("quote-btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const motivationCat = "inspirational";
const loveCat = "love";

let category = motivationCat;

const toggleBtn = () => {

    btn.classList.contains("left-position") ? leftToRight() : rightToLeft();
}

const leftToRight = async () => {
    category = loveCat;
    btn.classList.add("right-position");
    btn.classList.remove("left-position");
    
    toggleBody.classList.add("toggle-body-right");
    toggleBody.classList.remove("toggle-body-left");

    videoLeft.style.display = "none";
    videoRight.style.display = "block";

    quoteBtn.classList.add("quote-btn-right");
    quoteBtn.classList.remove("quote-btn-left");

    quote.classList.add("quote-right");
    quote.classList.remove("quote-left");

    author.classList.add("quote-right");
    author.classList.remove("quote-left");

    label.innerText = "Love";
}

const rightToLeft = () => {
    category = motivationCat;
    btn.classList.remove("right-position");
    btn.classList.add("left-position");

    toggleBody.classList.add("toggle-body-left");
    toggleBody.classList.remove("toggle-body-right");

    videoRight.style.display = "none";
    videoLeft.style.display = "block";

    quoteBtn.classList.add("quote-btn-left");
    quoteBtn.classList.remove("quote-btn-right");

    quote.classList.add("quote-left");
    quote.classList.remove("quote-right");

    author.classList.add("quote-left");
    author.classList.remove("quote-right");

    label.innerText = "Motiuation";
}

const quoteRequest = async () => {
    toggleBody.classList.contains

    const res = await $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'Xgq8yVhhw6XxZ8yhv4pAHQ==UViwXmDAWniog1yK'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            return result;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });

    quote.innerText = res[0].quote;
    author.innerText = "(c) " + res[0].author;
}

toggleBody.addEventListener("click", toggleBtn);
label.addEventListener("click", toggleBtn);
quoteBtn.addEventListener("click", quoteRequest);