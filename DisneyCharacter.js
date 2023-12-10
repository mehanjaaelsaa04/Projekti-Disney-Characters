document.addEventListener("DOMContentLoaded", function){
  
  var characterImages = document.querySelectorAll('.box img');

  characterImages.forEach(function(image)){
    image.addEventListener('mouseover', function(){
      image.style.border = '2px solid red';
    });

     image.addEventListener('mouseover', function(){
      image.style.border = '2px solid black';
    });
    
  });
});
