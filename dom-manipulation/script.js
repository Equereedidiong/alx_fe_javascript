// 0. Building a Dynamic Content Generator with Advanced DOM Manipulation
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

  //   This line retrieves the quote at the randomIndex from the quotes array and stores it in the randomQuote variable.
  // randomQuote will be an object with text and category properties, like { text: "Quote text", category: "Category" }.

  Paragraph.innerHTML = displayQuote.appendChild(Paragraph);
  Paragraph.classList.add('Par');
  Paragraph.innerText = `"${randomQuote.text}" - Category: ${randomQuote.category}`;
  displayQuote.appendChild(Paragraph);


  //   This line sets the content of the quoteDisplay element to display the selected quote.
 // randomQuote.text is the actual quote text, and randomQuote.category is the category of the quote.
 // The displayed text is formatted like: "Quote Text" - Category: Category Name, using template literals (`...`) to insert variables into the string.
 // Paragraph.innerText = console.log(randomQuote);
 // const paragraph = document.createElement('p');
 // console.log(ranArray);
};

//Quiz 3: Adding Dynamically:
const Btin = document.querySelector('#Dynamic');
const newQuote = document.getElementById('newQuoteText');
const newCategory = document.getElementById('newQuoteCategory');
const newArray = [];



createAddQuoteForm = () => {

  const newbie = newQuote.value + newCategory.value;
  const notation = JSON.stringify(newArray);

  newArray.push(newbie);
  console.log(newArray);

  localStorage.setItem('Quotes', (notation));





  newQuote.value = "";
  newCategory.value = "";
};


Btin.addEventListener('click', () => {
 
  createAddQuoteForm();

})

Btn.addEventListener('click', () => {

  showRandomQuote();

});

showNotes = () => {

  const getArray = localStorage.getItem('Quotes');
  const loggedData = JSON.parse(getArray);
  // newArray.push(...loggedData)
  newArray.push(loggedData);

  


}
showNotes(); 
// PENDING FINISH FOR LOGGING ON THE JSON DATA PARSED.
// To Export JSON Data

// Function to export quotes as a JSON file
function exportQuotesToJSON() {
  // Step 1: Convert the quotes array to a JSON string
  const jsonString = JSON.stringify(quotes, null, 2); // Pretty-printing with indentation

  // Step 2: Create a Blob object from the JSON string
  const blob = new Blob([jsonString], { type: 'application/json' });

  // Step 3: Create a URL for the Blob object
  const url = URL.createObjectURL(blob);

  // Step 4: Create a temporary link element
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json'; // Filename for the JSON file

  // Step 5: Append the link to the document, click it, and remove it
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Step 6: Revoke the URL to free up resources
  URL.revokeObjectURL(url);
}

// Event listener for the export button
document.getElementById('export-btn').addEventListener('click', exportQuotesToJS

// JSON Import

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}
