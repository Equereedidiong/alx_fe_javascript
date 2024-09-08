// 0. Building a Dynamic Content Generator with Advanced DOM Manipulation

//
let quoteArray = [{text: 'Just do it', category: 'Motivation'}, {text:'make it make sense', category:'Sarcasm'}];

const displayQuote = document.querySelector('#quoteDisplay');
let Paragraph = document.createElement('p');
const Btn = document.getElementById('newQuote');

showRandomQuote = () => {
  const ranArray = Math.floor(Math.random() * quoteArray.length);
  // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
  // Math.random() * quotes.length multiplies the random number by the total number of quotes (length of the quotes array). This ensures the random number corresponds to a valid index in the array.
 // Math.floor() rounds down the result to the nearest whole number. Since array indices must be integers, this ensures we get a valid index between 0 and quotes.length - 1.
 // randomIndex is the result and represents a random index in the quotes array.
  const randomQuote = quoteArray[ranArray];
  displayQuote.appendChild(Paragraph);
  Paragraph.classList.add('Par');
  displayQuote.innerText = `"${randomQuote.text}" - Category: ${randomQuote.category}`;

  // Paragraph.innerText = console.log(randomQuote);
  // const paragraph = document.createElement('p');
  // console.log(ranArray);
};

createAddQuoteForm = () => {


};

Btn.addEventListener('click', () => {
  showRandomQuote();
});


