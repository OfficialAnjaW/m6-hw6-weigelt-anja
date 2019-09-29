// 1. Change background color when hovering over any button

var newButtonColor = document.querySelectorAll('section .button-color');

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
