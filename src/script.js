function tweetQuote() {
    let text ="'Css is awesome =))'"
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - Tony`;

    window.open(twitterUrl, "_blank");
}

let twitterIcons = document.querySelectorAll(".twitterButton");

twitterIcons.forEach( e => {
    e.addEventListener("click", tweetQuote);
})
