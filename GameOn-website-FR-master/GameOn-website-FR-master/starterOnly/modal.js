function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form

const croix = document.querySelector(".close");

croix.addEventListener("mousedown", () => {
  modalbg.style.display = "none";
})


// Formulaire

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const quantity = document.querySelector("#quantity");
const city = document.querySelectorAll('input[type="radio"]');
const checkBox = document.querySelector('#checkbox1');
const form = document.querySelector('#form');

const twoChar = (value) => {
  return /^[a-zA-Z]{2,}$/gm.test(value);
};

firstName.addEventListener("input", (e) => {
  let value = e.target.value;
  if(!twoChar(firstName.value) || firstName.value.length < 2){
    alert("Name must be in alphabets only");
    firstName.focus();
    return false;
     }
     if(firstName.value == " "){
       alert("Name Field cannot be left empty");
       firstName.focus();
       return false;
     }
     return true;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkBox.checked) {
    return true
  } else {
    alert("Veuillez lire et accepter les conditions d'utilisation");
    return false
  }
});