var dtn = document.querySelector('button');

dtn.addEventListener('click', function() {
  var x = Math.random() * 90; // up to 90% to keep image in viewport
  var y = Math.random() * 90;
  var rot = Math.random() * 360;

  var imag = document.createElement('img');
  imag.setAttribute('src', 'chutki.png');
  imag.style.width = "80px";
  imag.style.height = "80px";
  imag.style.position = "absolute";
  imag.style.left = x + '%';
  imag.style.top = y + '%';
  imag.style.transform = 'rotate(' + rot + 'deg)';

  document.body.appendChild(imag);
});
