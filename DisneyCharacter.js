var slideIndex = 1;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots =document.getElementsByClassName("dot");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className =  dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
    

    setTimeout(function (){
        plusSlides(1);
    }, 2000);
}




document.addEventListener("DOMContentLoaded", function () {

    var characterImages = document.querySelectorAll('.box img');
  
    characterImages.forEach(function (image){
        image.addEventListener('mouseover', function(){
            image.style.border = '2px solid red';
        }); 

        image.addEventListener('mouseover', function(){
            image.style.border = '2px solid black';
        });
  
    });
});
  
