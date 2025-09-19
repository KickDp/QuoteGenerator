let selectedCategory = 'happiness';

// Handle category button clicks
document.querySelectorAll(".categoryButton").forEach(button => {
    button.addEventListener("click", function() {
        selectedCategory = this.value;
        document.querySelectorAll('.categoryButton').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Handle "Generate Quote" button
document.getElementById("generateQuote").addEventListener("click", function() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const quoteText = document.querySelector('.quote-text');
    const authorText = document.querySelector('.author-text');

    // Fade effect
    quoteDisplay.style.opacity = '0.4';
    quoteDisplay.style.backgroundColor = "#d2d2d2";

    setTimeout(() => {
        fetch(`https://api.quotable.io/random?tags=${selectedCategory}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data && data.content) {
                quoteText.textContent = `"${data.content}"`;
                authorText.textContent = `- ${data.author}`;
            } else {
                quoteText.textContent = "No quote found for this category.";
                authorText.textContent = "";
            }
            // Reset styles
            quoteDisplay.style.opacity = '1';
            quoteDisplay.style.backgroundColor = "#ffffff";
        })
        .catch(error => {
            console.error('Error:', error);
            quoteText.textContent = 'Error fetching quote.';
            authorText.textContent = '';
            quoteDisplay.style.opacity = '1';
            quoteDisplay.style.backgroundColor = "#ffffff";
        });
    }, 600);
});
