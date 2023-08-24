document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON data once on page load and store it
    let quotesData = {};
    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            quotesData = data;
            console.log("Fetched quotes data:", quotesData);  // Moved inside the promise resolution for accuracy.
        })
        .catch(error => {
            console.error("There was an error fetching the JSON data:", error);
        });

    // Attach click events to each category
    const categories = document.querySelectorAll('.quote-categories li a');
    categories.forEach(category => {
        category.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default link behavior

            // Get the corresponding quotes based on the theme clicked
            let themeClicked = this.innerText;

            console.log("Theme clicked:", themeClicked);  // Moved this line here after the definition of themeClicked

            let themeQuotes = quotesData[themeClicked];

            if (themeQuotes && themeQuotes.length > 0) {
                // Choose a random quote from the list
                let randomIndex = Math.floor(Math.random() * themeQuotes.length);
                let randomQuote = themeQuotes[randomIndex];
                document.getElementById('quoteDisplay').innerText = randomQuote;
                document.getElementById('quoteDisplay').style.color = "black";
                document.getElementById('quoteDisplay').style.backgroundColor = "rgba(128, 128, 128, 0.2)";



            } else {
                document.getElementById('quoteDisplay').innerText = "Quote not found for this theme.";
            }
        });
    });
});
