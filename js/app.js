var card7 = document.querySelector(".card--7");

card7.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card7.style.setProperty('--mouseX7', (e.clientX - ww) / 25);
  card7.style.setProperty('--mouseY7', (e.clientY - wh) / 25);

});

card7.addEventListener('mouseleave', function (e) {

  card7.style.setProperty('--mouseX7', 0);
  card7.style.setProperty('--mouseY7', 0);

});
