const loginBtn=document.querySelector("#login");
const registerBtn=document.querySelector("#register");
const loginForm=document.querySelector(".login-form");
const registerForm=document.querySelector(".register-form");
const verifi=document.querySelector("#b2");

loginBtn.addEventListener('click', () =>{
   
   loginBtn.style.backgroundColor= "#21264D";
    registerBtn.style.backgroundColor= "rgba(255, 255, 255, 0.2)";

   loginForm.style.left="50%";
   registerForm.style.left= "-50%";
   loginForm.style.opacity=1;
    registerForm.style.opacity=0;
    
    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";

})

registerBtn.addEventListener('click', () =>{
    
    registerBtn.style.backgroundColor= "#21264D";
    loginBtn.style.backgroundColor= "rgba(255, 255, 255, 0.2)";

    loginForm.style.left="150%";
    registerForm.style.left= "50%";
    registerForm.style.transform='translateX(-50%)'; 
    loginForm.style.opacity=0;
    registerForm.style.opacity=1;
    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
    
 })
verifi.addEventListener('click', () =>{
    let formIsValid = true;
    
    

    // Username validation
    const username = document.getElementById('username').value;
    
    if (username.length < 4) {
        formIsValid = false;
        document.getElementById('username').style.color='red';
        document.getElementById('username').value = 'Username must be at least 4 characters long.';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        formIsValid = false;
        document.getElementById('email').style.color='red';
        document.getElementById('email').value = 'Please enter a valid email address.';
    }

    // Password validation
    const password = document.getElementById('password');
    if (password.value.length < 8) {
        formIsValid = false;
        document.getElementById('password').style.color='red';
        document.getElementById('password').type='text';
        document.getElementById('password').value = 'Password must be at least 8 characters long.';
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value != confirmPassword.value) {
        formIsValid = false;
        document.getElementById('confirmPassword').style.color='red';
        document.getElementById('confirmPassword').type='text';
        document.getElementById('confirmPassword').value = 'Passwords do not match.';
    }

    // Birthdate validation
    const birthdate = document.getElementById('birthdate');
    if (!birthdate.value) {
        
        formIsValid = false;
        document.getElementById('birthdate').style.color='red';
        
        document.getElementById('birthdate').value = 'Please enter your birthdate.';
    }

    // Study level validation
    const studyLevel = document.getElementById('l1');
    if (studyLevel.value=='..') {
        formIsValid = false;
        document.getElementById('l1').style.color='red';
        document.getElementById('l1').value = 'Please select your study level.';
    };
    const field = document.getElementById('l2');
    if (field.value=='..') {
        formIsValid = false;
        document.getElementById('l2').style.color='red';
        document.getElementById('l2').value = 'Please select your field.';
    };
    

})
   
