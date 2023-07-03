/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
function randomNum() {
  return Math.floor(Math.random() * 9) + 1;
}
let loop1; let loop2; let loop3; const time = 30; let i = 0;
const selector3 = document.querySelector('.thirdDigit');
const selector2 = document.querySelector('.secondDigit');
const selector1 = document.querySelector('.firstDigit');
// eslint-disable-next-line prefer-const
loop3 = setInterval(() => {
  if (i > 40) {
    clearInterval(loop3);
    selector3.textContent = 4;
  } else {
    selector3.textContent = randomNum();
    i++;
  }
}, time);
loop2 = setInterval(() => {
  if (i > 80) {
    clearInterval(loop2);
    selector2.textContent = 0;
  } else {
    selector2.textContent = randomNum();
    i++;
  }
}, time);
loop1 = setInterval(() => {
  if (i > 100) {
    clearInterval(loop1);
    selector1.textContent = 4;
  } else {
    selector1.textContent = randomNum();
    i++;
  }
}, time);
