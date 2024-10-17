
let selectedCategory = 'happiness';

document.querySelectorAll(".categoryButton").forEach(button => {
    button.addEventListener("click", function() {
        selectedCategory = this.value;
        document.querySelectorAll('.categoryButton').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

document.getElementById("generateQuote").addEventListener("click", function() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.style.opacity = '0.4';
    quoteDisplay.style.backgroundColor="#d2d2d2";
    setTimeout(() => {
        fetch('https://api.api-ninjas.com/v1/quotes?category=' + selectedCategory, {
            method: 'GET',
            headers: { 'X-Api-Key': 'WQ+iZ8u2ehsLFgiB179vbg==A9qieRnkMlpWjcBM' }
        })
        .then(response => response.json())
        .then(data => {
            const quote = data[0].quote;
            const author = data[0].author || 'Unknown';
            document.querySelector('.quote-text').textContent = `"${quote}"`;
            document.querySelector('.author-text').textContent = `- ${author}`;
            quoteDisplay.style.opacity = '1';
            quoteDisplay.style.backgroundColor="#ffff";
        })
        .catch(error => {
            console.error('Error:', error);
            document.querySelector('.quote-text').textContent = 'Error fetching quote.';
            document.querySelector('.author-text').textContent = '';
            quoteDisplay.style.opacity = '1';
        });
    }, 600);
});