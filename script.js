// JavaScript to handle interactions

// Get elements by their IDs
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

// Step 1: Are you Daniel?
yesDaniel.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden'); // Hide welcome screen
    birthdayScreen.classList.remove('hidden'); // Show birthday question screen
});

noDaniel.addEventListener('click', () => {
    errorMessage.classList.remove('hidden'); // Show error message for "no"
});

// Step 2: Is it your birthday?
yesBirthday.addEventListener('click', () => {
    birthdayScreen.classList.add('hidden'); // Hide birthday question screen
    birthdayMessage.classList.remove('hidden'); // Show birthday message
});

noBirthday.addEventListener('click', () => {
    errorMessage2.classList.remove('hidden'); // Show error message for "no"
});

// Step 3: Display Birthday Letter when "Open Letter" button is clicked
openLetterButton.addEventListener('click', () => {
    birthdayMessage.classList.add('hidden'); // Hide birthday message
    letterScreen.classList.remove('hidden'); // Show the letter screen
});
