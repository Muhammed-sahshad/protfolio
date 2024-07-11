function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

  function validateForm() {
    var isValid = true;
  
    // Validate name field
    var nameInput = document.getElementById('name');
    var nameError = document.getElementById('nameError');
    var name = nameInput.value.trim();
    var length = name.length;
    if (name === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    } else {
      nameError.textContent = '';
    }
     if(length<5){
      nameError.textContent = 'Name must contain 5 charecters';
     }else{
      nameError.textContent = '';
     }
  
    // Validate email field
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var email = emailInput.value.trim();
    if (email === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else {
      // Basic email validation
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        emailError.textContent = 'Enter a valid email address';
        isValid = false;
      } else {
        emailError.textContent = '';
      }
    }

    var messageInput = document.getElementById('message');
    var messageError = document.getElementById('messageError');
    var message = messageInput.value.trim();
    var messaeLength= message.length;
    if (message=== '') {
        messageError.textContent = 'message is required';
      isValid = false;
    } else {
        messageError.textContent = '';
    }

    if(messaeLength<20){
      messageError.textContent = 'message must contain 20 charecters';
    }else{
      messageError.textContent = '';
    }
  
    return isValid;
  }