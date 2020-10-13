let error = document.getElementById("error");
let Email = document.getElementById("inputEmail4").value;
let password = document.getElementById("inputPassword4").value;
let zip = document.getElementById("inputZip").value;
let city = document.getElementById("inputCity").value;
let elemento = document.getElementById("gridCheck");
let form = document.getElementById("form");

form.addEventListener("submit",function(){
  if(!(/\S+@\S+\.\S+/.test(Email))){
    alert('ERROR: Debe escribir un correo válido');
    return false;
  }
  if( isNaN(password) ) {
    alert('ERROR: Password invalido');
  return false;
}

if( isNaN(zip) ) {
    alert('ERROR: Postal');
  return false;
}

if( city == null || city.length == 0 || /^\s+$/.test(city) ) {
    alert('ERROR: City');

    return false;
}
}

