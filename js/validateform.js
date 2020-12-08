var validators = {
  "telefono": /^\+?\(?504\)?-?[1-9]\d{3}-?\d{4}$/,
  "correo": /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
  "isEmpty": /^\s*$/,
  "password": /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/,
  "doublespace":/\s{2,}/
};
var formInputs = {
  txtName: null,
  txtPswd: null,
  txtEmail: null
};

var formInputsErrors = {
  txtName: null,
  txtPswd: null,
  txtEmail: null
};

document.addEventListener("DOMContentLoaded", function(e){
  formInputs.txtName = document.getElementById("txtName");
  formInputsErrors.txtName = document.getElementById("txtNameError");
  formInputs.txtPswd = document.getElementById("txtPswd");
  formInputs.txtEmail = document.getElementById("txtEmail");
  formInputs.txtName.addEventListener("keyup", inputOnChange);
  document.getElementById("formDatosGenerales").addEventListener("submit", validateForm);
});

function inputOnChange(e){
  console.log("Cambio en " + e.target.name);
  var className = "";
  formInputsErrors.txtName.className = "hide"
  formInputsErrors.txtName.innerHTML = "";
  switch (e.target.name){
    case "txtName":
      className = (validators.isEmpty.test(e.target.value))?"error":"";
      e.target.className = className;
      formInputsErrors.txtName.innerHTML = "El Nombre no puede estar vacío.";
      formInputsErrors.txtName.className = "show";
      break;
  }
}

function validateForm(e){
  e.preventDefault();
  e.stopPropagation();
  var errors = [];
  if (validators.isEmpty.test(formInputs.txtName.value)){
    errors.push("El Nombre no puede estar vacío.");
  }
  if (validators.doublespace.test(formInputs.txtName.value)) {
    errors.push("No debe contener doble espacios entre valores");
  }
  if (!validators.password.test(formInputs.txtPswd.value)){
    errors.push("La contraseña debe estar compuesto de 8 simbolos como mínimo,  contener al menos un número, una mayúscula y un simbolo especial.");
  }
  if (!validators.correo.test(formInputs.txtEmail.value)) {
    errors.push("El correo no tiene el formato adecuado.");
  }
  if(errors.length > 0){
    alert(errors.join(" | "));
  } else {
    alert("Hurray Let go Celebrate");
    //document.getElementById("formDatosGenerales").submit();
  }
}


//
var textAreaValues = "Hoy mis vecinos solo rancheras han puesto.";
var urlEncondedValue = encodeURI(textAreaValues);
console.log(urlEncondedValue);
//ES6 
var textPatterns = `https://somehost.com/recurso.html?lt=${urlEncondedValue}`;
console.log(textPatterns);
