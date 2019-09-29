// 1. Change background color when hovering over any button

var newButtonColor = document.querySelectorAll('.button-color');

function colorChange() {
  for(i = 0; i < newButtonColor.length; i++) {
    newButtonColor[i].classList.toggle('selectedcolor');
  }
}

for(i = 0; i < newButtonColor.length; i++) {
  newButtonColor[i].addEventListener('mouseenter', colorChange);
  newButtonColor[i].addEventListener('mouseleave', colorChange);
}

/* --------------------------

// ALT: Change to DIFFERENT background color when hovering over any button

var newButtonColor = document.querySelectorAll('section .button-color');

function colorChange() {
    newButtonColor[0].classList.toggle('green-alt');
    newButtonColor[1].classList.toggle('yellow-alt');
    newButtonColor[2].classList.toggle('turquoise-alt');
}

for(i = 0; i < newButtonColor.length; i++) {
  newButtonColor[i].addEventListener('mouseenter', colorChange);
  newButtonColor[i].addEventListener('mouseleave', colorChange);
}

----------------------------- */

// 2. Box 1 Message

var buttonOne = document.querySelector('.yellow-button');
var messageOne = document.createTextNode('Oooh - so close, but no cigar!');

function buttonOneMessage() {
  buttonOne.appendChild(messageOne);

}

buttonOne.addEventListener('click', buttonOneMessage);

/* --------------------------

// Message Disappear

function messageOneLeave() {
  buttonOne.removeChild(messageOne);
}

buttonOne.addEventListener('mouseleave', messageOneLeave);

----------------------------- */

// 3. Box 2 Message

var buttonTwo = document.querySelector('.turquoise-button');
var messageTwo = document.createTextNode('DING DING DING - We have a winner!');

function buttonTwoMessage() {
  buttonTwo.appendChild(messageTwo);
}

buttonTwo.addEventListener('click', buttonTwoMessage);

/* --------------------------

// Message Disappear

function messageTwoLeave() {
  buttonTwo.removeChild(messageTwo);
}

buttonTwo.addEventListener('mouseleave', messageTwoLeave);

----------------------------- */

// 4. Box 3 Message

var buttonThree = document.querySelector('.green-button');
var messageThree = document.createTextNode('Oops, sorry! Better luck next time!');

function buttonThreeMessage() {
  buttonThree.appendChild(messageThree);
}

buttonThree.addEventListener('click', buttonThreeMessage);

/* --------------------------

// Message Disappear

function messageThreeLeave() {
  buttonThree.removeChild(messageThree);
}

buttonThree.addEventListener('mouseleave', messageThreeLeave);

----------------------------- */

// 5. Reveal Start-Over Button

var hiddenButton = document.querySelector('.refresh');
var allButtons = document.querySelectorAll('.button-style');

function showButton() {
  hiddenButton.classList.remove('hidden');
}

for(i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', showButton);
}
