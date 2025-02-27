import {
  addFName,
  addLName,
  addEmail,
  addPhone,
  addHNumber,
  addStreet,
  addCity,
  addPincode,
  addCompName,
  addCompWeb,
  addRole,
  addPassword,
  addConfirmPassword,
} from "../js/inputFields.js";

const fnameRequired = document.querySelector(".fname-required");
const fnameWarning = document.querySelector(".fname-warning");
const lnameRequired = document.querySelector(".lname-required");
const lnameWarning = document.querySelector(".lname-warning");
const emailDangerStyle = document.querySelector(".email-danger-style");
const emailWarning = document.querySelector(".email-danger-text");
const phoneDangerStyle = document.querySelector(".phone-danger-style");
const phoneWarning = document.querySelector(".phone-danger-text");
const addressRequired = document.querySelector(".address-danger-text");
const hNumberDangerStyle = document.querySelector(".HNumber-danger-style");
const hNumberWarning = document.querySelector(".HNumber-danger-text");
const streetDangerStyle = document.querySelector(".street-danger-style");
const cityDangerStyle = document.querySelector(".city-danger-style");
const pinCodeDangerStyle = document.querySelector(".pin-code-danger-style");
const compNameRequired = document.querySelector(".companyNameRequired");
const companyNameWarning = document.querySelector(".company-name-danger-style");
const companyWebRequired = document.querySelector(".companyWebRequired");
const companyWebWarning = document.querySelector(".company-website-warning");
const passwordRequired = document.querySelector(".passwordRequired");
const passwordWarning = document.querySelector(".password-warning");
const confirmPasswordRequired = document.querySelector(
  ".confirmPasswordRequired"
);
const confirmPasswordWarning = document.querySelector(
  ".confirm-password-warning"
);
const roleRequired = document.querySelector(".roleRequired");
// ADD FORM VALIDATION VALIDATIONS //

// FIRST-NAME //
addFName.addEventListener("blur", (event) => onBlurValidateFName(event));
const onBlurValidateFName = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    fnameRequired.style.visibility = "visible";
    fnameWarning.style.display = "block";
  } else {
    fnameRequired.style.visibility = "hidden";
    fnameWarning.style.display = "none";
  }
};
addFName.addEventListener("input", (event) => onInputvalidateFName(event));
const onInputvalidateFName = (event) => {
  const regexForName = /^[A-Z\ a-z\s]{1,30}$/;
  const value = event.target.value.trim();
  if (regexForName.test(value)) {
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
    fnameWarning.style.display = "none";
  } else if (value > 30) {
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  } else {
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
    fnameWarning.style.display = "block";
  }
};
// LAST-NAME //
addLName.addEventListener("blur", (event) => onBlurValidateLName(event));
const onBlurValidateLName = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    lnameRequired.style.visibility = "visible";
    lnameWarning.style.display = "block";
  } else {
    lnameRequired.style.visibility = "hidden";
    lnameWarning.style.display = "none";
  }
};
addLName.addEventListener("input", (event) => onInputvalidateLName(event));
const onInputvalidateLName = (event) => {
  const regexForName = /^[A-Za-z]+(\s[A-Za-z]+)?$/;
  const value = event.target.value.trim();
  if (regexForName.test(value)) {
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
    lnameWarning.style.display = "none";
  } else if (value > 30) {
    lnameWarning.innerHTML =
      "<small>Name Should Not Be Greater Than 30 Characters</small>";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  } else {
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
    lnameWarning.style.display = "block";
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
    phoneDangerStyle.style.display = "block";
  } else {
    phoneDangerStyle.style.display = "none";
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
    addressRequired.style.visibility = "visible";
    hNumberDangerStyle.style.display = "block";
  } else {
    addressRequired.style.visibility = "hidden";
    hNumberDangerStyle.style.display = "none";
  }
};

addHNumber.addEventListener("input", (event) => onInputValidateHnumber(event));
const onInputValidateHnumber = (event) => {
  let houseNumber = event.target.value;
  const regexForHNumber = /^[a-zA-Z0-9\s#/-]+$/;
  if (regexForHNumber.test(houseNumber)) {
    hNumberDangerStyle.style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    hNumberDangerStyle.style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

// STREET //
addStreet.addEventListener("blur", (event) => onBlurValidateStreet(event));
const onBlurValidateStreet = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    streetDangerStyle.style.display = "block";
    addressRequired.style.visibility = "visible";
  } else {
    streetDangerStyle.style.display = "none";
    addressRequired.style.visibility = "hidden";
  }
};

addStreet.addEventListener("input", (event) => onInputValidateStreet(event));
const onInputValidateStreet = (event) => {
  const regexForStreet = /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/;
  if (regexForStreet.test(event.target.value)) {
    streetDangerStyle.style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    streetDangerStyle.style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

// CITY //
addCity.addEventListener("blur", (event) => onBlurValidateCity(event));
const onBlurValidateCity = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    cityDangerStyle.style.display = "block";
    addressRequired.style.visibility = "visible";
  } else {
    cityDangerStyle.style.display = "none";
    addressRequired.style.visibility = "hidden";
  }
};

addCity.addEventListener("input", (event) => onInputValidateCity(event));
const onInputValidateCity = (event) => {
  const regexForStreet = /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/;
  if (regexForStreet.test(event.target.value)) {
    cityDangerStyle.style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    cityDangerStyle.style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

// PIN-CODE //
addPincode.addEventListener("blur", (event) => onBlurPinCode(event));
const onBlurPinCode = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    pinCodeDangerStyle.style.display = "block";
    addressRequired.style.visibility = "visible";
  } else {
    pinCodeDangerStyle.style.display = "none";
    addressRequired.style.visibility = "hidden";
  }
};

addPincode.addEventListener("input", () => onInputValidatePincode(event));

const onInputValidatePincode = (event) => {
  let pinCode = event.target.value;
  const regexForPinCode = /^[0-9]{6}$/;
  if ((pinCode.length === 0) | (pinCode.length < 6)) {
    pinCodeDangerStyle.style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  } else {
    if (regexForPinCode.test(event.target.value)) {
      pinCodeDangerStyle.style.display = "none";
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
    } else {
      pinCodeDangerStyle.style.display = "block";
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    }
  }
};

// COMPANY NAME //
addCompName.addEventListener("blur", (event) => onBlurCompanyName(event));
const onBlurCompanyName = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    companyNameWarning.style.display = "block";
    compNameRequired.style.visibility = "visible";
  } else {
    companyNameWarning.style.display = "none";
    compNameRequired.style.visibility = "hidden";
  }
};

addCompName.addEventListener("input", () => onInputCompName(event));

const onInputCompName = (event) => {
  let compName = event.target.value;
  const regexForCompName = /^[a-zA-Z0-9\s&.-]+$/;

  if (regexForCompName.test(compName)) {
    companyNameWarning.style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    companyNameWarning.style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

// COMPANY WEBSITE //
addCompWeb.addEventListener("blur", (event) => onBlurCompanyWeb(event));
const onBlurCompanyWeb = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    companyWebWarning.style.display = "block";
    companyWebRequired.style.visibility = "visible";
  } else {
    companyWebWarning.style.display = "none";
    companyWebRequired.style.visibility = "hidden";
  }
};

addCompWeb.addEventListener("input", () => onInputCompWeb(event));
const onInputCompWeb = (event) => {
  let compWeb = event.target.value;
  const regexForCompWeb =
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

  if (regexForCompWeb.test(compWeb)) {
    companyWebWarning.style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    companyWebWarning.style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

// PASSWORD //
addPassword.addEventListener("blur", (event) => onBlurPassword(event));
const onBlurPassword = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    passwordWarning.style.display = "block";
    passwordRequired.style.visibility = "visible";
  } else {
    passwordWarning.style.display = "none";
    passwordRequired.style.visibility = "hidden";
  }
};

addPassword.addEventListener("input", () => onInputPassword(event));

const onInputPassword = (event) => {
  let password = event.target.value;
  const regexForPassword =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regexForPassword.test(password)) {
    passwordWarning.style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    passwordWarning.style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};
// CONFIRM PASSWORD //
addConfirmPassword.addEventListener("blur", (event) =>
  onBlurConfirmPassword(event)
);
const onBlurConfirmPassword = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    confirmPasswordWarning.style.display = "block";
    confirmPasswordRequired.style.visibility = "visible";
  } else {
    confirmPasswordWarning.style.display = "none";
    confirmPasswordRequired.style.visibility = "hidden";
  }
};

addConfirmPassword.addEventListener("input", () =>
  onInputConfirmPassword(event)
);

const onInputConfirmPassword = (event) => {
  let confirmPassword = event.target.value;
  const regexForConfirmPassword =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regexForConfirmPassword.test(confirmPassword)) {
    confirmPasswordWarning.style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    confirmPasswordWarning.style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

// ROLE REQUIRED
addRole.addEventListener("blur", (event) => onBlurRole(event));
const onBlurRole = (event) => {
  const value = event.target.value.trim();
  if (value.length == 0) {
    roleRequired.style.visibility = "visible";
  } else {
    roleRequired.style.visibility = "hidden";
  }
};

// VALIDATE EMPTY FIELD
const validateEmptyField = () => {
  if (!addFName.value) {
    addFName.focus()
    fnameRequired.style.visibility = "visible";
    fnameWarning.style.display = "block";
    // return false
  } else if (!addLName.value) {
    addLName.focus()
    lnameRequired.style.visibility = "visible";
    lnameWarning.style.display = "block";
  } else if (!addEmail.value) {
    addEmail.focus()
    emailWarning.style.visibility = "visible";
    emailDangerStyle.style.visibility = "visible";
  } else if (!addPhone.value) {
    addPhone.focus()
    phoneWarning.style.visibility = "visible";
    phoneDangerStyle.style.display = "block";
  } else if (!addHNumber.value) {
    addHNumber.focus()
    addressRequired.style.visibility = "visible";
    hNumberDangerStyle.style.display = "block";
  } else if (!addStreet.value) {
    addStreet.focus()
    streetDangerStyle.style.display = "block";
    addressRequired.style.visibility = "visible";
  } else if (!addCity.value) {
    addCity.focus()
    cityDangerStyle.style.display = "block";
    addressRequired.style.visibility = "visible";
  } else if (!addPincode.value) {
    addPincode.focus()
    pinCodeDangerStyle.style.display = "block";
    addressRequired.style.visibility = "visible";
  } else if (!addCompName.value) {
    addCompName.focus()
    companyNameWarning.style.display = "block";
    compNameRequired.style.visibility = "visible";
  } else if (!addCompWeb.value) {
    addCompWeb.focus()
    companyWebWarning.style.display = "block";
    companyWebRequired.style.visibility = "visible";
  } else if (!addRole.value) {
    addRole.focus()
    roleRequired.style.visibility = "visible";
  }else{
    return true
  }
};


export {validateEmptyField}