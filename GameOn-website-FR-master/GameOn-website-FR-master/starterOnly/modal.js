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


// Déclaration des variables
const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], input[type="radio"], input[type="checkbox"], input[type="number"]');
let firstName, lastName, email, birthDate, quantity;
let city = document.querySelector('input[type="radio"]:checked')
let checkbox = document.querySelector('input[type="checkbox"]:checked')
const validSpan = document.querySelector(".valid-form")
const validClean = document.querySelector(".modal-body")


//Obtenir l'age de la
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}


// Fonction pour afficher une erreur si incorrecte
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


//Fonction pour vérifier que le prénom à plus de 2 caractères et non vide
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

//Fonction pour vérifier que le nom à plus de 2 caractères et non vide
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

//Fonction pour vérifier l'email avec regex
const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

//Fonction pour vérifier la date de naissance
const birthDateChecker = (value) => {
  if (getAge(value) < 12 && getAge(value) < 100 ) {
    errorDisplay("birthDate", "Vous devez avoir plus de 12 ans.");
    birthDate = null;
  } else {
    errorDisplay("birthDate", "", true);
    birthDate = value;
  }
};

//Fonction pour vérifier la quantité
const quantityChecker = (value) => {
  if (!value.match(/^\d+$/)) {
    errorDisplay("quantity", "Une valeur numérique doit être saisie");
    quantity = null;
  } else {
    errorDisplay("quantity", "", true);
    quantity = value;
  }
};

// code brouillon
/* radioButton.forEach((rad) => {
  if (value = true) {
    errorDisplay("city", "", true);
    city = value;
  } else {
    errorDisplay("city", "Veuillez sélectioner une ville.");
    city = null;
  }
}); */

//Fonction pour vérifier si une ville est coché
const cityChecker = (checked) => {
      if (checked != true) {
        errorDisplay("city", "Veuillez sélectioner une ville.");
        city = null;
      } else {
        errorDisplay("city", "", true);
        city = checked;
      }
};

// code brouillon
/* const cityChecker = () => {
  if (value = false) {
    errorDisplay("city", "Veuillez sélectioner une ville.");
    city = null;
  } else {
    errorDisplay("city", "", true);
    city = value;
  }
}; */

//Fonction pour vérifier si la case des conditions est coché
const checkboxChecker = (checked) => {
  if (checked != true) {
    errorDisplay("checkbox", "Veuillez lire et accepter les conditions d'utilisation");
    checkbox = null;
  } else {
    errorDisplay("checkbox", "", true);
    checkbox = checked;
  }
};

// code brouillon
/* const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const city = document.querySelectorAll('input[type="radio"]');
const checkBox = document.querySelector('#checkbox1');
const form = document.querySelector('#form'); */


// Sélectionne les inputs avec leurs fonctions associées
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

//Vérifie si le formulaire est bien rempli à chaque inputs et vide le formulaire après le premier envoi réussi
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
    validClean.innerHTML = `<h3>Merci ! Votre réservation a été reçue.</h3>
    <button class="btn-submit" type="button" class="close">Close</button>`;
    validClean.style.color = "green";
  } else if (firstName == null) {
    validSpan.textContent = "Prénom non valide";
    validSpan.style.color = "red";
  } else if (lastName == null) {
    validSpan.textContent = "Nom non valide";
    validSpan.style.color = "red";
  } else if (email == null) {
    validSpan.textContent = "email non valide";
    validSpan.style.color = "red";
  } else if (birthDate == null) {
    validSpan.textContent = "Date de naissance non valide";
    validSpan.style.color = "red";
  } else if (quantity == null) {
    validSpan.textContent = "Nombre de participation non valide";
    validSpan.style.color = "red";
  } else if (cityChecker(e.target.checked) != true) {
    validSpan.textContent = "Choisissez une ville";
    validSpan.style.color = "red";
  } else if (checkboxChecker(e.target.checked) != true) {
    validSpan.textContent = "Veuillez cocher les conditions d'utilisation";
    validSpan.style.color = "red";
  } else {
    validSpan.textContent = "Le formulaire n'est pas correctement rempli";
    validSpan.style.color = "red";
  }
});