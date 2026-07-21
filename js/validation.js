const contactForm = document.querySelector("#contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        // Inputs
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const message = document.querySelector("#message");

        // Error labels
        const nameError = document.querySelector("#nameError");
        const emailError = document.querySelector("#emailError");
        const phoneError = document.querySelector("#phoneError");
        const messageError = document.querySelector("#messageError");

        const successMessage = document.querySelector("#successMessage");

        // Reset previous errors
        document.querySelectorAll(".error").forEach(error=>error.innerHTML="");

        document.querySelectorAll("input, textarea").forEach(field=>{

            field.classList.remove("error-border");

        });

        successMessage.innerHTML="";

        let valid=true;

        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern=/^[0-9]{10,15}$/;

        if(name.value.trim()===""){

            nameError.innerHTML="Full name is required.";

            name.classList.add("error-border");

            valid=false;

        }

        if(!emailPattern.test(email.value.trim())){

            emailError.innerHTML="Enter a valid email address.";

            email.classList.add("error-border");

            valid=false;

        }

        if(!phonePattern.test(phone.value.trim())){

            phoneError.innerHTML="Phone number should contain only digits.";

            phone.classList.add("error-border");

            valid=false;

        }

        if(message.value.trim().length<10){

            messageError.innerHTML="Message must be at least 10 characters.";

            message.classList.add("error-border");

            valid=false;

        }

        if(valid){

            successMessage.classList.add("success");

            successMessage.innerHTML="✅ Thank you for reaching out! Your message has been sent successfully.";

            contactForm.reset();

        }

    });

}