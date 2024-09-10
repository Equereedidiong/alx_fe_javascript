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
let Par = document.createElement('p');
const showQuote = document.querySelector('#showThem');
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

  Par.innerHTML = showQuote.appendChild(Par);
  Par.innerText = newArray;
  // showQuote.appendChild(Par);



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
  console.log (loggedData);
  newArray.push(loggedData);
}

showNotes(); 

const exportJSON = document.getElementById('export-btn');
// console.log(exportJSON);



//Quiz 2 Export JSON Data: 
ExportJson = () => {
   
  const convertQuote = JSON.stringify(newArray);
  console.log(convertQuote);

  //Make a Blob put of the converted JSON quotes;
  const makeBlob = new Blob ([convertQuote], {type: 'application/json'});

  //Create URL for Blob
  const url1 = URL.createObjectURL(makeBlob);

  //Creat a temporary Link element;

  const a = document.createElement('a');
  a.href = url1;
  a.download = 'Quotes.json'; //Filename for the Json file

  //Append the Link element you created to the document

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url1);
};

exportJSON.addEventListener('click', () => {
 
  ExportJson();

});

// // JSON Import

// function importFromJsonFile (event) {
//   const fileReader = new FileReader();
//   fileReader.onload = function(event) {
//     const importedQuotes = JSON.parse(event.target.result);
//     quotes.push(...importedQuotes);
//     saveQuotes();
//     alert('Quotes imported successfully!');
//   };
//   fileReader.readAsText(event.target.files[0]);
// });

//Task 2: Creating a Dynamic Content Filtering System Using Web Storage and JSON

// Array of quote objects
const quote = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "The purpose of our lives is to be happy.", category: "Happiness" },
  { text: "Happiness is not something ready made. It comes from your own actions.", category: "Happiness" },
  { text: "The way to get started is to quit talking and begin doing.", category: "Motivation" }
];

// Function to populate categories dynamically
function populateCategories() {
  const categoryFilter = document.getElementById('categoryFilter');

  // Extract unique categories from quotes array
  const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];

  // Populate the dropdown with unique categories
  uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Function to filter and display quotes based on selected category
function filterQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  const quoteDisplay = document.getElementById('quoteDisplay');

  // Clear previous quotes
  quoteDisplay.innerHTML = '';

  // Filter quotes based on category
  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(quote => quote.category === selectedCategory);

  // Display filtered quotes
  filteredQuotes.forEach(quote => {
    const quoteElement = document.createElement('p');
    quoteElement.textContent = `"${quote.text}" - Category: ${quote.category}`;
    quoteDisplay.appendChild(quoteElement);
  });
}

// Initial population of categories and quotes
populateCategories();
filterQuotes();

// Function to get stored quotes or default quotes if none are saved
function getStoredQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  return storedQuotes ? JSON.parse(storedQuotes) : [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "The purpose of our lives is to be happy.", category: "Happiness" },
    { text: "Happiness is not something ready made. It comes from your own actions.", category: "Happiness" },
    { text: "The way to get started is to quit talking and begin doing.", category: "Motivation" }
  ];
}

// Array of quote objects
let quotes = getStoredQuotes();

// Function to persist quotes to local storage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Function to populate categories dynamically
function populateCategories() {
  const categoryFilter = document.getElementById('categoryFilter');

  // Clear existing categories
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';

  // Extract unique categories from quotes array
  const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];

  // Populate the dropdown with unique categories
  uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Function to filter and display quotes based on selected category
function filterQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  const quoteDisplay = document.getElementById('quoteDisplay');

  // Clear previous quotes
  quoteDisplay.innerHTML = '';

  // Filter quotes based on category
  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(quote => quote.category === selectedCategory);

  // Display filtered quotes
  filteredQuotes.forEach(quote => {
    const quoteElement = document.createElement('p');
    quoteElement.textContent = `"${quote.text}" - Category: ${quote.category}`;
    quoteDisplay.appendChild(quoteElement);
  });
}

// Function to add a new quote
function addQuote(text, category) {
  // Add the new quote to the quotes array
  quotes.push({ text, category });
  
  // Save the updated quotes array to local storage
  saveQuotes();

  // Update categories in dropdown if a new category is added
  populateCategories();

  // Refresh the quotes display
  filterQuotes();
}

// Function to handle form submission for adding a quote
function handleAddQuoteForm() {
  const quoteText = document.getElementById('quoteText').value;
  const quoteCategory = document.getElementById('quoteCategory').value;

  if (quoteText && quoteCategory) {
    addQuote(quoteText, quoteCategory);

    // Clear the form fields
    document.getElementById('quoteText').value = '';
    document.getElementById('quoteCategory').value = '';
  }
}

// Initial population of categories and quotes
populateCategories();
filterQuotes();

// Event listener for form submission (assumed that the form elements exist in your HTML)
document.getElementById('addQuoteForm').addEventListener('submit', function(event) {
  event.preventDefault();
  handleAddQuoteForm();
});


// TASK 3

// Simulate fetching quotes from a server
async function fetchQuotesFromServer() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const quotes = await response.json();
  return quotes.map(quote => ({
    text: quote.title, // Using post title as quote text
    category: "Server"
  }));
}

// Simulate posting new quotes to the server
async function postQuoteToServer(quote) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(quote),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const newQuote = await response.json();
  return newQuote;
}

//
// Periodic data fetching every 30 seconds
setInterval(async () => {
  const serverQuotes = await fetchQuotesFromServer();
  syncWithLocalData(serverQuotes);
}, 30000); // Fetch every 30 seconds

function syncWithLocalData(serverQuotes) {
  const localQuotes = getStoredQuotes();

  // Merge quotes with server precedence
  const syncedQuotes = [...serverQuotes, ...localQuotes.filter(localQuote => 
    !serverQuotes.some(serverQuote => serverQuote.text === localQuote.text)
  )];

  // Update local storage with merged data
  localStorage.setItem('quotes', JSON.stringify(syncedQuotes));
  populateCategories();
  filterQuotes();
};

//

function syncWithLocalData(serverQuotes) {
  const localQuotes = getStoredQuotes();

  // Merge quotes with server precedence
  const syncedQuotes = [...serverQuotes, ...localQuotes.filter(localQuote => 
    !serverQuotes.some(serverQuote => serverQuote.text === localQuote.text)
  )];

  // Update local storage with merged data
  localStorage.setItem('quotes', JSON.stringify(syncedQuotes));
  populateCategories();
  filterQuotes();
}


function syncWithLocalData(serverQuotes) {
  const localQuotes = getStoredQuotes();
  let conflictsResolved = false;

  // Check for conflicts
  const syncedQuotes = serverQuotes.map(serverQuote => {
    const conflictingQuote = localQuotes.find(localQuote => localQuote.text === serverQuote.text);
    if (conflictingQuote) {
      conflictsResolved = true;
    }
    return serverQuote;
  });

  // Merge non-conflicting local quotes
  const mergedQuotes = [...syncedQuotes, ...localQuotes.filter(localQuote => 
    !serverQuotes.some(serverQuote => serverQuote.text === localQuote.text)
  )];

  // Update local storage
  localStorage.setItem('quotes', JSON.stringify(mergedQuotes));
  populateCategories();
  filterQuotes();

  // Notify user if conflicts were resolved
  if (conflictsResolved) {
    alert("Conflicts resolved using server data.");
  }
}
