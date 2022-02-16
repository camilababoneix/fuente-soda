document.getElementById("nombre").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtNombre = input.value;

    const feedbackNombre = document.getElementById("feedback-nombre");

    if( txtNombre.length < 3 ) {        
        feedbackNombre.innerHTML = "El nombre es muy corto.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackNombre.className = "invalid-feedback";
    } else {        
        feedbackNombre.innerHTML = "El nombre está OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackNombre.className = "valid-feedback";
    }
})

document.getElementById("apellido").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtApellido = input.value;

    const feedbackApellido = document.getElementById("feedback-apellido");

    if( txtApellido.length < 2 ) {        
        feedbackApellido.innerHTML = "El apellido es muy corto.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackApellido.className = "invalid-feedback";
    } else {        
        feedbackApellido.innerHTML = "El nombre está OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackApellido.className = "valid-feedback";
    }
})

document.getElementById("email").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtEmail = input.value;

    const feedbackEmail = document.getElementById("feedback-email");

    if( txtEmail == "a@123.cl" ) {        
        feedbackEmail.innerHTML = "El correo está OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackEmail.className = "valid-feedback";
        
    } else {        
        feedbackEmail.innerHTML = "Ingrese un correo electronico";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackEmail.className = "invalid-feedback";
    }
});

document.getElementById("telefono").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const numTelefono = input.value;

    const feedbackTelefono = document.getElementById("feedback-telefono");

    if( numTelefono.length < 8 ) {        
        feedbackTelefono.innerHTML = "El telefono es muy corto.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackTelefono.className = "invalid-feedback";
    } else {        
        feedbackTelefono.innerHTML = "El telefono está OK";
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        feedbackTelefono.className = "valid-feedback";
    }
});