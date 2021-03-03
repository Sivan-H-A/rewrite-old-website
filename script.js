function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("swithcImg").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "images/banner_atar.jpg";
images[1] = "images/250X110571325734.jpg";
images[2] = "images/250X110668568400.jpg";