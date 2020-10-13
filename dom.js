
valor = document.getElementById("inputEmail4").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
    alert('[ERROR] El campo debe tener un valor de...');
  return false;
}
valor = document.getElementById("inputPassword4").value;
if( isNaN(valor) ) {
  return false;
}
valor = document.getElementById("inputZip").value;
if( isNaN(valor) ) {
  return false;
}
valor = document.getElementById("inputCity").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  return false;
}
elemento = document.getElementById("gridCheck");
if( !elemento.checked ) {
  return false;
}