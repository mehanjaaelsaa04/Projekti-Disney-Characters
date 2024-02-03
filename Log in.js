let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^[A-Z].*\d{3}$/;
     

     function validateForm(){
         let emailInput = document.getElementById('email');
         let emailError = document.getElementById('emailError');
         let passwordInput = document.getElementById('password');
         let passwordError = document.getElementById('passwordError');

         emailError.innerText = '';
         passwordError.innerText = '';
     

         if(!emailRegex.test(emailInput.value)){
             emailError.innerText = 'Email is invalid!';
             return;
         }
         if(!passwordRegex.test(passwordInput.value)){
             passwordError.innerText = 'Password is invalid!';
             return;
         }
         
     } 

