import {
  addName,
  addEmail,
  addPhone,
  addHNumber,
  addStreet,
  addCity,
  addZipcode,
  addCompName,
  addCompWeb,
  addRole,
} from "../js/inputFields.js";
const nameDangerstyle = document.querySelector(".name-danger-style");
const nameWarning = document.querySelector(".name-danger-text");
const emailDangerStyle = document.querySelector(".email-danger-style");
const emailWarning = document.querySelector(".email-danger-text");
const phoneDangerStyle = document.querySelector(".phone-danger-style");
const phoneWarning = document.querySelector(".phone-danger-text");
const hNumberDangerStyle = document.querySelector(".HNumber-danger-style");
const hNumberWarning = document.querySelector(".HNumber-danger-text");
// ADD FORM VALIDATION VALIDATIONS //

// NAME //
addName.addEventListener("blur", (event) => onBlurValidateName(event));
const onBlurValidateName = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    console.log("inside");
    nameDangerstyle.style.visibility = "visible";
    nameWarning.style.visibility = "visible";
  } else {
    nameDangerstyle.style.visibility = "hidden";
    nameWarning.style.visibility = "hidden";
  }
};
addName.addEventListener("input", (event) => onInputvalidateName(event));
const onInputvalidateName = (event) => {
  const regexForName = /^[A-Za-z\s]{1,30}$/;
  const value = event.target.value.trim();
  if (regexForName.test(value)) {
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
    nameDangerstyle.style.visibility = "hidden";
  } else if (value > 30) {
    nameDangerstyle.innerHTML =
      "<small>Name Should Not Be Greater Than 30 Characters</small>";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  } else {
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
    nameDangerstyle.style.visibility = "visible";
  }
};

// EMAIL //
addEmail.addEventListener("blur", (event) => onBlurValidateEmail(event));
const onBlurValidateEmail = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    emailWarning.style.visibility = "visible";
    emailDangerStyle.style.visibility = "visible";
  } else {
    emailDangerStyle.style.visibility = "hidden";
    emailWarning.style.visibility = "hidden";
  }
};
addEmail.addEventListener("input", (event) => onInputValidateEmail(event));
const onInputValidateEmail = (event) => {
  const regexForEmail = /^[a-zA-Z0-9-._+]+@[a-z]+\.[a-z]{2,3}$/;
  if (regexForEmail.test(event.target.value)) {
    emailDangerStyle.style.visibility = "hidden";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    emailDangerStyle.style.visibility = "visible";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

// PHONE //
addPhone.addEventListener("blur", (event) => onBlurValidatePhone(event));
const onBlurValidatePhone = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    phoneWarning.style.visibility = "visible";
    phoneDangerStyle.style.visibility = "visible";
  } else {
    phoneDangerStyle.style.visibility = "hidden";
    phoneWarning.style.visibility = "hidden";
  }
};
addPhone.addEventListener("input", (event) => onInputValidatePhone(event));
const onInputValidatePhone = (event) => {
  const regexForPhone = /^[6789]{1}\d{9}$/;
  let number = event.target.value;
  if (regexForPhone.test(number)) {
    phoneDangerStyle.style.visibility = "hidden";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    phoneDangerStyle.style.visibility = "visble";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

// HOUSE NUMBER //
addHNumber.addEventListener("blur", (event) => onBlurValidateHnumber(event));
const onBlurValidateHnumber = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    hNumberWarning.style.visibility = "visible";
    hNumberDangerStyle.style.visibility = "visible";
  } else {
    hNumberDangerStyle.style.visibility = "hidden";
    hNumberWarning.style.visibility = "hidden";
  }
};

addHNumber.addEventListener("input", (event) => onInputValidateHnumber(event));
const onInputValidateHnumber = (event) => {
  let houseNumber = event.target.value;
  const regexForHNumber = /^[A-Za-z0-9]+([-\/][A-Za-z0-9]+)*$/;
  if (regexForHNumber.test(houseNumber)) {
    hNumberDangerStyle.style.visibility = "hidden";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    hNumberDangerStyle.style.visibility = "visible";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};
// STREET //

addStreet.addEventListener("input", (event) => validateStreet(event));

const validateStreet = (event) => {
  const regexForStreet = /^[A-Za-z0-9\s\-\/\.]{3,50}$/;
  if (regexForStreet.test(event.target.value)) {
    document.querySelector("#streetError").style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    document.querySelector("#streetError").style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

// ZIP-CODE //

// addZipcode.addEventListener(events, () => validateZipcode(event));

// const validateZipcode = (event) => {
//   let zipCode = event.target.value;
//   const regexForZipcode = /^[0-9]{6}$/;
//   if ((zipCode.length === 0) | (zipCode.length < 6)) {
//     document.querySelector("#ZipCodeError").style.display = "block";
//     event.target.classList.remove("is-valid");
//     event.target.classList.add("is-invalid");
//   } else {
//     if (regexForZipcode.test(event.target.value)) {
//       document.querySelector("#ZipCodeError").style.display = "none";
//       event.target.classList.remove("is-invalid");
//       event.target.classList.add("is-valid");
//     } else {
//       document.querySelector("#ZipCodeError").innerHTML =
//         "<small>Zip-Code Should Be Less Than Equal To 6 Digits</small>";
//       document.querySelector("#ZipCodeError").style.display = "block";
//       event.target.classList.remove("is-valid");
//       event.target.classList.add("is-invalid");
//     }
//   }
// };
