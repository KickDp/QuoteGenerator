// Local quotes database (40+ quotes)
const quotes = [
  { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { quote: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { quote: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
  { quote: "Little by little, a little becomes a lot.", author: "Tanzanian Proverb" },
  { quote: "Don’t wait for opportunity. Create it.", author: "Unknown" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Success is not for the lazy.", author: "Unknown" },
  { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  { quote: "Your limitation—it's only your imagination.", author: "Unknown" },
  { quote: "Sometimes later becomes never. Do it now.", author: "Unknown" },
  { quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { quote: "Do something today that your future self will thank you for.", author: "Unknown" },
  { quote: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { quote: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
  { quote: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
  { quote: "If you want to achieve greatness stop asking for permission.", author: "Unknown" },
  { quote: "Hustle in silence and let your success make the noise.", author: "Unknown" },
  { quote: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Don’t limit your challenges. Challenge your limits.", author: "Unknown" },
  { quote: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { quote: "Keep going. Be all in.", author: "Bryan Hutchinson" }
];

// Compute "quote of the day" index
function getQuoteOfTheDay() {
  const now = new Date();
  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  const index = seed % quotes.length;
  return { ...quotes[index], index }; // return index for display
}

// Display the quote
function displayQuote() {
  const { quote, author, index } = getQuoteOfTheDay();
  document.getElementById("quote").innerText = `"${quote}"`;
  document.getElementById("author").innerText = `- ${author}`;

  // show number of quotes
  const total = quotes.length;
  document.getElementById("quoteNumber").innerText = `Quote ${index + 1} of ${total}`;
}

// Copy to clipboard
function copyQuote() {
  const quoteText = document.getElementById("quote").innerText;
  const authorText = document.getElementById("author").innerText;
  const text = `${quoteText} ${authorText}`;
  navigator.clipboard.writeText(text)
    .then(() => alert("Copied to clipboard!"))
    .catch(err => console.error("Copy failed:", err));
}

// Initialize
window.onload = () => {
  displayQuote();
  document.getElementById("copyBtn").addEventListener("click", copyQuote);
};
