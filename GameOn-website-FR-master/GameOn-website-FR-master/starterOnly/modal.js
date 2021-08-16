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

const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], input[type="radio"], input[type="checkbox"], input[type="number"]');
let firstName, lastName, email, birthDate, quantity;
let city = document.querySelector('input[type="radio"]:checked')
let checkbox = document.querySelector('input[type="checkbox"]:checked')
const validSpan = document.querySelector(".valid-form")

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag +"-container");
  const span = document.querySelector("." + tag +"-container > span");

  if (!valid) {
    container.classList.add('error');
    span.textContent = message;
  } else {
    container.classList.remove('error');
    span.textContent = message;
  }
};

const firstNameChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    errorDisplay("firstName", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    firstName = null;
  } else if (!value.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
    errorDisplay("firstName", "Le prénom ne doit pas contenir de caractères spéciaux");
    firstName = null;
  } else {
    errorDisplay("firstName", "", true);
    firstName = value;
  }
};

const lastNameChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    errorDisplay("lastName", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    lastName = null;
  } else if (!value.match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
    errorDisplay("lastName", "Le nom ne doit pas contenir de caractères spéciaux");
    lastName = null;
  } else {
    errorDisplay("lastName", "", true);
    lastName = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const birthDateChecker = (value) => {
  if (value == "") {
    errorDisplay("birthDate", "Veuillez mettre une date de naissance valide.");
    birthDate = null;
  } else {
    errorDisplay("birthDate", "", true);
    birthDate = value;
  }
};

const quantityChecker = (value) => {
  if (!value.match(/^\d+$/)) {
    errorDisplay("quantity", "Une valeur numérique doit être saisie");
    quantity = null;
  } else {
    errorDisplay("quantity", "", true);
    quantity = value;
  }
};

/* radioButton.forEach((rad) => {
  if (value = true) {
    errorDisplay("city", "", true);
    city = value;
  } else {
    errorDisplay("city", "Veuillez sélectioner une ville.");
    city = null;
  }
}); */

const cityChecker = (checked) => {
      if (checked != true) {
        errorDisplay("city", "Veuillez sélectioner une ville.");
        city = null;
      } else {
        errorDisplay("city", "", true);
        city = checked;
      }
};


/* const cityChecker = () => {
  if (value = false) {
    errorDisplay("city", "Veuillez sélectioner une ville.");
    city = null;
  } else {
    errorDisplay("city", "", true);
    city = value;
  }
}; */

const checkboxChecker = (checked) => {
  if (checked != true) {
    errorDisplay("checkbox", "Veuillez lire et accepter les conditions d'utilisation");
    checkbox = null;
  } else {
    errorDisplay("checkbox", "", true);
    checkbox = checked;
  }
};

/* const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const city = document.querySelectorAll('input[type="radio"]');
const checkBox = document.querySelector('#checkbox1');
const form = document.querySelector('#form'); */



inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first" :
        firstNameChecker(e.target.value)
        break;
       case "last" :
         lastNameChecker(e.target.value)
         break;
        case "email" :
          emailChecker(e.target.value)
          break;
         case "birthdate" :
           birthDateChecker(e.target.value)
           break;
          case "quantity" :
            quantityChecker(e.target.value)
            break;
           case "location1" : 
            cityChecker(e.target.checked)
            break;
            case "location2" : 
            cityChecker(e.target.checked)
            break;
            case "location3" : 
            cityChecker(e.target.checked)
            break;
            case "location4" : 
            cityChecker(e.target.checked)
            break;
            case "location5" : 
            cityChecker(e.target.checked)
            break;
            case "location6" : 
            cityChecker(e.target.checked)
            break;
           case "checkbox1" :
            checkboxChecker(e.target.checked)
            break;
           default:
              nul;
    }
  })
})




/* const twoChar = (value) => {
  return /^[a-zA-Z]{2,}$/gm.test(value);
};

firstName.addEventListener("input", (e) => {
  let value = e.target.value;
  if(!twoChar(firstName.value) || firstName.value.length < 2){
    alert("Name must be in alphabets only");
    firstName.focus();
    return false;
     }
     else if(firstName.value == " "){
       alert("Name Field cannot be left empty");
       firstName.focus();
       return false;
     }
     return true;
}); */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName && lastName && email && birthDate && quantity && city && checkbox) {
    const date = {
      firstName,
      lastName,
      email,
      birthDate,
      quantity,
      city,
      checkbox,
    };
    console.log(date);
    firstName = null;
    lastName = null;
    email = null;
    birthDate = null;
    quantity = null;
    city = null;
    validSpan.textContent = "Merci ! Votre réservation a été reçue.";
    validSpan.style.color = "green";
  } else {
    validSpan.textContent = "Le formulaire n'est pas correctement rempli";
    validSpan.style.color = "red";
  }
});