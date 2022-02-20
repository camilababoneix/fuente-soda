window.addEventListener("DOMContentLoaded", (eventoLoad) => {
  document.querySelector("form").addEventListener("submit", (eventoSubmit) => {
      eventoSubmit.preventDefault();

  });
//Validación nombre
document.getElementById("nombre").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtnombre = input.value;

  const feedbacknombre = document.getElementById("feedback-nombre");
 
  if (txtnombre.length < 2) {
    feedbacknombre.innerHTML = "El nombre es muy corto.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbacknombre.className = "invalid-feedback";
    
  } else {
    feedbacknombre.innerHTML = "El nombre es correcto";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbacknombre.className = "valid-feedback";
   
  }
});

//Validación apellido
document.getElementById("apellido").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtapellido = input.value;

  const feedbackapellido = document.getElementById("feedback-apellido");
 
  if (txtapellido.length < 2) {
      feedbackapellido.innerHTML = "El apellido es muy corto.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackapellido.className = "invalid-feedback";
  } else {
      feedbackapellido.innerHTML = "El nombre es consistennte";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackapellido.className = "valid-feedback";
  }
});

//Validación email
document.getElementById("email").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtemail = input.value;

  const feedbackemail = document.getElementById("feedback-email");
 
  if (txtemail == "email@123.cl") {    
      feedbackemail.innerHTML = "El email es correcto";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackemail.className = "valid-feedback";
  } else {
      feedbackemail.innerHTML = "El email es incorrecto.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackemail.className = "invalid-feedback";
  }
});

//Validación telefono
document.getElementById("telefono").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txttelefono = input.value;

  const feedbacktelefono = document.getElementById("feedback-telefono");
 
  if (txttelefono.length == 8) {
      feedbacktelefono.innerHTML = "El telefono es correcto";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbacktelefono.className = "valid-feedback"; 
  } else {          
      feedbacktelefono.innerHTML = "El telefono es muy incorrecto.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbacktelefono.className = "invalid-feedback";
  }
});

//Validación sucursal
document.getElementById("sucursal").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtsucursal = input.value;
 
  if (txtsucursal == "") {    
      alert("Debes elegir una sucursal");
  }
});

//Validación textarea
document.getElementById("mensaje").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtmensaje = input.value;
  if (txtmensaje == '') {
      alert("Debe ingresar un mensaje");
  } else if (txtmensaje.length > 30) {          
      alert("El mensaje es correcto");
  } else {
      alert("Debe ingresar un mensaje correcto")
  } 
})})

function redireccionar() {
  window.location.href="index.html";
}