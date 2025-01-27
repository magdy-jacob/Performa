const forms = document.querySelector(".forms"),
    next = document.querySelector(".next"),
    Send = document.querySelector(".Send"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link"),
    forgotPass = document.querySelectorAll(".forgot-pass");


pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
        forms.classList.remove("show-forgot-pass");
    })
})

forgotPass.forEach(Pass => {
    Pass.addEventListener("click", e => {
        e.preventDefault(); 
        forms.classList.toggle("show-forgot-pass");
        forms.classList.remove("show-signup"); 
    })
})

next.addEventListener("click", () => {
    forms.classList.toggle("show-forgot-next");
    forms.classList.remove("show-forgot-pass");
    forms.classList.remove("show-signup"); 
})
Send.addEventListener("click", () => {
    forms.classList.remove("show-forgot-next");
    forms.classList.remove("show-forgot-pass");
    forms.classList.remove("show-signup"); 
})

