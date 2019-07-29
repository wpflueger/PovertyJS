const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const pov = document.querySelector(".container");
const povid = document.querySelector("#poverty");
const sm = document.querySelector(".sm-heading");
let povertyLevel = 0;

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please Enter all fields ";

    setTimeout(() => msg.remove(), 1000);
  } else {
    var email = emailInput.value.replace("$", "");

    if (nameInput.value == "0") {
      msg.classList.add("error");
      msg.innerHTML = "Please Specify Household Size";
      setTimeout(() => msg.remove(), 1000);
    } else if (nameInput.value == "1") {
      povertyLevel = "12490";
    } else if (nameInput.value == "2") {
      povertyLevel = "16910";
    } else if (nameInput.value == "3") {
      povertyLevel = "21330";
    } else if (nameInput.value == "4") {
      povertyLevel = "25750";
    } else if (nameInput.value == "5") {
      povertyLevel = "30170";
    } else if (nameInput.value == "6") {
      povertyLevel = "34590";
    } else if (nameInput.value == "7") {
      povertyLevel = "39010";
    } else if (nameInput.value == "8") {
      povertyLevel = "43430";
    } else if (nameInput.value > 8) {
      povertyLevel = nameInput.value * 4420;
    } else {
      msg.classList.add("error");
      msg.innerHTML = "Some error with your household";
      setTimeout(() => msg.remove(), 1000);
    }

    pov.classList.replace("container", "container-left");
    povid.id = "poverty1";

    let abovepov = parseInt(email, 10) / parseInt(povertyLevel, 10);
    if (abovepov > 1) {
      sm.textContent =
        "You are " + abovepov.toFixed(2) + " times above the poverty line!";
    } else {
      sm.textContent =
        "You are " + abovepov.toFixed(2) + " times below the poverty line!";
    }

    console.log(povertyLevel);
    console.log(abovepov);
    //Clear Inputs
    nameInput.value = "";
    emailInput.value = "";
  }
}
