const images = ['./assets/images/IMG_2511.JPEG', './assets/images/IMG_2513.JPEG', './assets/images/IMG_2536.JPEG']; // Liste der Bilder
let currentImageIndex = 0;

document.getElementById('changer').addEventListener('click', function() {
    // Aktuelles Bild ändern
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('image').src = images[currentImageIndex];
});