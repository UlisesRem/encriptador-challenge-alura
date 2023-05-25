var messagecontainer = document.querySelector(".add-message");
var resultcontainer = document.querySelector(".result");
var encryptbtn = document.querySelector(".encrypt-btn");
var unencryptbtn = document.querySelector(".unencrypt-btn");
var copybtn = document.querySelector(".copy-btn");

function correctletters(input) {
  return /^[a-z0-9/ /ñ:;,.¿?¡!]+$/.test(input);
}

//Encriptacion del mensaje
function encryptMessage(inputmessage) {
  const newletters = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  if (correctletters(messagecontainer.value)) {
    let encriptedMessage = messagecontainer.value.replace(
      /[aeiou]/g,
      (n) => newletters[n]
    );
    document.querySelector(".no-encrypted-message").style.display = "none";
    document.querySelector(".encrypted-message").style.display = "block";
    resultcontainer.textContent = encriptedMessage;
  } else {
    alert("Solo se admite letras minusculas sin acentos");
  }
  document.querySelector(".copy-btn").style.display = "none";
}

encryptbtn.addEventListener("click", encryptMessage);

//Desencriptacion del mensaje

function unEncryptMessage(inputmessage) {
  const newletters = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  if (correctletters(messagecontainer.value)) {
    let encriptedMessage = messagecontainer.value.replace(
      /enter|imes|ai|ober|ufat/g,
      (n) => newletters[n]
    );
    document.querySelector(".no-encrypted-message").style.display = "none";
    document.querySelector(".encrypted-message").style.display = "block";
    resultcontainer.textContent = encriptedMessage;
  } else {
    alert("Solo se admite letras minusculas sin acentos");
  }
  document.querySelector(".copy-btn").style.display = "none";
}

unencryptbtn.addEventListener("click", unEncryptMessage);

/* TEST BOTONES 
encryptbtn.addEventListener("click", borrarimage);
unencryptbtn.addEventListener("click", volverxd);
function borrarimage(){
  let imagedefault = document.querySelector(".no-encrypted-message");

  imagedefault.style.display = "none";
}

function volverxd(){
  let imagedefault = document.querySelector(".no-encrypted-message");

  imagedefault.style.display = "block";
}


function hola(){
  alert("Hola xd")
}

*/
