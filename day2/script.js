var dtn = document.querySelector('button');

dtn.addEventListener('click', function() {
    var m = Math.random() * 10;

    if (m > 6) {
        var src = 'chutki.png';
    } else if (m > 4) {
        var src = 'monkey.png';
    } else if (m > 2) {
        var src = 'motu.png';
    } else {
        var src = 'bhim.png';
    }

    var x = Math.random() * 90; // up to 90% to keep image in viewport
    var y = Math.random() * 90;
    var rot = Math.random() * 360;

    var imag = document.createElement('img');
    imag.setAttribute('src', src);
    imag.style.width = "80px";
    imag.style.height = "80px";
    imag.style.position = "absolute";
    imag.style.left = x + '%';
    imag.style.top = y + '%';
    imag.style.transform = 'rotate(' + rot + 'deg)';
    imag.style.zIndex = 1; // Ensure images stay behind the button

    document.body.appendChild(imag);
});
