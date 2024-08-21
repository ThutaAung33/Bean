document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var images = [];
    var time = 3000; // Time between image changes (in milliseconds)

    images[0] = "image/CoffeeSt.jpg";
    images[1] = "image/SlideShowIMG.jpg";
    images[2] = "image/SlideShowIMG!.jpg";

    function changeImg() {
        var slideElement = document.getElementById("Homeslide");
        console.log(slideElement); // This should log the image element

        slideElement.src = images[i]; // Update the src attribute

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg, time);
    }

    // Start the slideshow
    changeImg();
});