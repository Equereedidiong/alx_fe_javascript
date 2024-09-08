//Javascript file for Notetaking App

const BtnSelector = document.querySelector('#Notebutton');
// console.log (BtnSelector);
const note = document.querySelector("#note");

const allNotes = [];

const noteL = document.getElementById('noteLogger');
// par = document.createElement('p');
// noteL.appendChild(par)
const noteSection = document.querySelector('.note-section');



BtnSelector.addEventListener ('click', (Submit) => {
    Submit.preventDefault();
    // console.log ("Yes I am active")

    // console.log(note.value);
    allNotes.push(note.value);
    // console.log(allNotes);
     
    // const noteL = document.getElementById('noteLogger');
    let paragraph = document.createElement('p');
    paragraph.textContent = note.value;
    noteSection.appendChild(paragraph);

    // If the oaragraph must have a style you early have defined just
    // do Paragraph.classList.add("note");
    
    //To store the items locally

    localStorage.setItem('notes', JSON.stringify(allNotes));
    console.log(allNotes);
    // This would make the values of notes in string format
    note.value = "";
});

//We need a function that fetches our notes and renders them in Javascript array objects;
const renderNote = () => {
    const notes1 = localStorage.getItem('notes');
    //To get our data in a JSON form that is useable by Javascript we then, parse the value.
    const gottenData = JSON.parse(notes1);
    // allNotes.push(...gottenData)
    // console.log(gottenData);
    allNotes.push(...gottenData); // (...gottenData is a spread Operator, that helps us log in many values so we do not get array nested inside array )

    gottenData.map((note) => {
    
    let paragraph = document.createElement('p');
    paragraph.textContent = note;
    noteSection.appendChild(paragraph);
    // When we ran the code at this point the code cleared after a new session was created
    // because at the beginning we defined notes = []; so now we have to push the existing 
    //notes to the one stored in local storage.
    });
};

renderNote();