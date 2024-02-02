
     let usernameRegex = /^.{8,15}$/;
     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     let passwordRegex = /^[A-Z].*\d{3}$/;
     

     function validateForm(){
         let usernameInput = document.getElementById('username');
         let usernameError = document.getElementById('usernameError');
         let emailInput = document.getElementById('email');
         let emailError = document.getElementById('emailError');
         let passwordInput = document.getElementById('password');
         let passwordError = document.getElementById('passwordError');

         usernameError.innerText = '';
         emailError.innerText = '';
         passwordError.innerText = '';
     
         if(!usernameRegex.test(usernameInput.value)){
             usernameError.innerText = 'Username is invalid!';
             return;
         }
         if(!emailRegex.test(emailInput.value)){
             emailError.innerText = 'Email is invalid!';
             return;
         }
         if(!passwordRegex.test(passwordInput.value)){
             passwordError.innerText = 'Password is invalid!';
             return;
         }
         
     } 

