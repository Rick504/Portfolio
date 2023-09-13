const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Developer Front-End', 'Ready to code'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

function showElement(id, classOne, classTwo) {
  document.querySelector(id).classList.add(classOne);
  document.querySelector(id).classList.remove(classTwo);
}

function hideElement(id, classOne, classTwo) {
  document.querySelector(id).classList.add(classOne);
  document.querySelector(id).classList.remove(classTwo);
}

function elementEfectShow(id, positionScreen, scrollPosition) {
  if (scrollPosition > positionScreen) {
    showElement(id, 'effect-pull-show', 'effect-pull-hide');
  } else {
    hideElement(id, 'effect-pull-hide', 'effect-pull-show');
  }
}

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  elementEfectShow('#about', 200, scrollPosition);
  elementEfectShow('#projects', 900, scrollPosition);
  elementEfectShow('#contact', 1600, scrollPosition);
});
