//Javascript file for Notetaking App

const BtnSelector = document.querySelector('#Notebutton');
// console.log (BtnSelector);
const note = document.querySelector("#note");

const allNotes = [];
''
const noteL = document.getElementById('noteLogger');
par = document.createElement('p');
noteL.appendChild(par)




BtnSelector.addEventListener ('click', (Submit) => {
    Submit.preventDefault();
    // console.log ("Yes I am active")

    // console.log(note.value);
    allNotes.push(note.value);
    console.log(allNotes);

    // const noteL = document.getElementById('noteLogger');
    // par = document.createElement("p")
    // noteL.appendChild(par)




});

