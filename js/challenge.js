var textToString = document.querySelector(".add-message");
var btnencrypt = document.querySelector(".encrypt-btn");
var btnunencrypt = document.querySelector(".unencrypt-btn");
var showresult = document.querySelector(".result");
var btncopy = document.querySelector(".copy-btn");


//Hacemos la encriptacion del texto ingresado
function encryptText(message) {
  let textToEncrypt = message
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  return textToEncrypt;
}

//Hacemos la desencriptacion del texto generado
function unencryptText(message) {
  let textToEncrypt = message
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufal", "u");

  return textToEncrypt;
}

