const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
const generateapi = document.getElementById('btn-generate');
const imgcard = document.getElementById('img-card');
const username = document.getElementById('character');
const phrase = document.getElementById('quote');

generateapi.addEventListener('click',getApi)

function getApi(){
    fetch(URL) 
    .then(response => response.json())
    .then(data => {
        username.textContent = data[0].character;
        imgcard.src = data[0].image;
        phrase.textContent = data[0].quote;
    })
}