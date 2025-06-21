const body = document.querySelector('body');
const container = document.querySelector('.container');
const heading = document.querySelector('h2');
const headerText = "Theme Color Switcher";

let i=0;
let typingTimeout;

function typeWriter() {
  if (i < headerText.length) {
    heading.innerHTML += headerText.charAt(i);
      i++;
      typingTimeout = setTimeout(typeWriter, 100);
    }
   }

// Start Typewriter Effect on Page Load
document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
  });

//restart typewriter effect
function restartTypewriter() {
  clearTimeout(typingTimeout);
  heading.innerHTML = '';
  i = 0;
  typeWriter();
}



  //click count function
let clickCount = 0;
function clickCountFunc() {
  clickCount++;
  if (clickCount === 10) {    
    container.classList.add('flex-row')
    restartTypewriter();
  }
}



//color Boxes array
const colors = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff', '#b8bedd', '#f0e6ef', '#efc3e6', '#f0a6ca'];

colors.forEach((color, i) => {
  let colorBox = document.createElement('div');
  colorBox.classList.add('color-box');
  // colorBox.setAttribute('id', colors[i]);
  colorBox.style.backgroundColor = color;
  colorBox.addEventListener('click', () => {
    body.style.backgroundColor = color;
    heading.style.color =   (i === colors.length-1 ? colors[0] : colors[i+1]);
    clickCountFunc();
  });
  container.appendChild(colorBox);
});//loop ends here



