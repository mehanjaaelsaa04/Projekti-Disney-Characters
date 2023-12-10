
     let nameRegex = /^[A-Z][a-z]{2,10}$/;
     let surnameRegex = /^[A-Z][a-z]{2,10}$/;
     let usernameRegex = /^.{8,15}$/;
     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     let passwordRegex = /^[A-Z].*\d{3}$/;
     

     function validateForm(){
         let nameInput = document.getElementById('name');
         let nameError = document.getElementById('nameError');
         let surnameInput = document.getElementById('surname');
         let surnameError = document.getElementById('surnameError');
         let usernameInput = document.getElementById('username');
         let usernameError = document.getElementById('usernameError');
         let emailInput = document.getElementById('email');
         let emailError = document.getElementById('emailError');
         let passwordInput = document.getElementById('password');
         let passwordError = document.getElementById('passwordError');

         nameError.innerText = '';
         surnameError.innerText = '';
         usernameError.innerText = '';
         emailError.innerText = '';
         passwordError.innerText = '';
     
         if(!nameRegex.test(nameInput.value)){
             nameError.innerText = 'Name is invalid!';
             return;
         }
         if(!surnameRegex.test(surnameInput.value)){
             surnameError.innerText = 'Surname is invalid!';
             return;
         }
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

