
const welcomeScreen = document.getElementById('welcomeScreen');
const birthdayScreen = document.getElementById('birthdayScreen');
const birthdayMessage = document.getElementById('birthdayMessage');
const letterScreen = document.getElementById('letterScreen');

const yesDaniel = document.getElementById('yesDaniel');
const noDaniel = document.getElementById('noDaniel');
const errorMessage = document.getElementById('errorMessage');

const yesBirthday = document.getElementById('yesBirthday');
const noBirthday = document.getElementById('noBirthday');
const errorMessage2 = document.getElementById('errorMessage2');

const openLetterButton = document.getElementById('openLetter');


yesDaniel.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden'); 
    birthdayScreen.classList.remove('hidden'); 
});

noDaniel.addEventListener('click', () => {
    errorMessage.classList.remove('hidden'); 
});


yesBirthday.addEventListener('click', () => {
    birthdayScreen.classList.add('hidden'); 
    birthdayMessage.classList.remove('hidden'); 
});

noBirthday.addEventListener('click', () => {
    errorMessage2.classList.remove('hidden');
});


openLetterButton.addEventListener('click', () => {
    birthdayMessage.classList.add('hidden'); 
    letterScreen.classList.remove('hidden');
});
