var messagecontainer = document.querySelector(".text-to-encrypt");
var resultcontainer = document.querySelector(".result");
var encryptbtn = document.querySelector(".encrypt-btn");
var unencryptbtn = document.querySelector(".unencrypt-btn");
var copybtn = document.querySelector(".copy-btn");

//Encriptacion del mensaje
function encryptMessage(inputmessage) {
    const newletters = {
      "e": "enter",
      "i": "imes",
      "a": "ai",
      "o": "ober",
      "u": "ufat"
    };
    
    let newmessage = inputmessage;
    for (let encrypted in newletters) {
      const expresionRegular = new RegExp(encrypted, "g");
      newmessage = newmessage.replace(expresionRegular, newletters[encrypted]);
    }
    return newmessage;
  }

  //Desencriptacion del mensaje
function unencryptMessage(message) {
    const newletters = {
      "enter": "e",
      "imes": "i",
      "ai": "a",
      "ober": "o",
      "ufat": "u"
    };
    
    let newmessage = message;
    for (let encrypted in newletters) {
      const expresionRegular = new RegExp(encrypted, "g");
      newmessage = newmessage.replace(expresionRegular, newletters[encrypted]);
    }
    return newmessage;
  }
