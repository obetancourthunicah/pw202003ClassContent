var validators = {
  "telefono": /^\+?\(?504\)?-?[1-9]\d{3}-?\d{4}$/,
  "coreo": /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
  "isEmpty": /^\s*$/
};
var formInputs = {
  txtName: null,
  txtPswd: null,
  txtEmail: null
};

document.addEventListener("DOMContentLoaded", function(e){
  formInputs.txtName = document.getElementById("txtName");
  formInputs.txtPswd = document.getElementById("txtPswd");
  formInputs.txtEmail = document.getElementById("txtEmail");
  document.getElementById("formDatosGenerales").addEventListener("submit", validateForm);
});

function validateForm(e){
  e.preventDefault();
  e.stopPropagation();
  var errors = [];
  if (validators.isEmpty.test(formInputs.txtName.value)){
    errors.push("El Nombre no puede estar vacío.");
  }
  if(errors.length > 0){
    alert(errors.join(" | "));
  } else {
    document.getElementById("formDatosGenerales").submit();
  }
}
