const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('container').scrollLeft += 900;
};
buttonLeft.onclick = function () {
  document.getElementById('container').scrollLeft -= 900;
};