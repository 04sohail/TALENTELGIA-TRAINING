import { addFName, addLName, addEmail, addPhone, addHNumber, addStreet, addCity, addPincode, addCompName, addCompWeb, addRole, addPassword, addConfirmPassword, editFName, editLName, editEmail, editPhone, editHNumber, editStreet, editCity, editPinCode, editCompName, editCompWeb, editRole } from "./inputFields.js";
// ADD FORM//
const addFrom = document.getElementById("addForm");
// LOGIN WARNING & REQUIRED //
// ADD WARNING & REQUIRED //
const addFnameWarning = document.querySelector(".add-fname-warning");
const addLnameWarning = document.querySelector(".add-lname-warning");
const addEmailWarning = document.querySelector(".add-email-warning");
const addPhoneWarning = document.querySelector(".add-phone-warning");
const addHNumberWarning = document.querySelector(".add-HNumber-warning");
const addStreetWarning = document.querySelector(".add-street-warning");
const addCityWarning = document.querySelector(".add-city-warning");
const addPinCodeWarning = document.querySelector(".add-pin-code-warning");
const addCompanyNameWarning = document.querySelector(".add-company-name-warning");
const addCompanyWebWarning = document.querySelector(".add-company-web-warning");
const addPasswordWarning = document.querySelector(".add-password-warning");
const addConfirmPasswordWarning = document.querySelector(".add-confirm-password-warning");
// EDIT WARNING & REQUIRED //
const editFnameWarning = document.querySelector(".edit-fname-warning");
const editLnameWarning = document.querySelector(".edit-lname-warning");
const editEmailWarning = document.querySelector(".edit-email-warning");
const editPhoneWarning = document.querySelector(".edit-phone-warning");
const editHNumberWarning = document.querySelector(".edit-HNumber-warning");
const editStreetWarning = document.querySelector(".edit-street-warning");
const editCityWarning = document.querySelector(".edit-city-warning");
const editPinCodeWarning = document.querySelector(".edit-pin-code-warning");
const editCompanyNameWarning = document.querySelector(".edit-company-name-warning");
const editCompanyWebWarning = document.querySelector(".edit-company-web-warning");
const editPasswordWarning = document.querySelector(".edit-password-warning");
const editConfirmPasswordWarning = document.querySelector(".edit-confirm-password-warning");
// ON BLUR VALIDATION FUNCTION
const onBlurValidate = (event, warning) => {
    var _a;
    const inputTarget = event.target;
    const singleValue = (_a = inputTarget.value) === null || _a === void 0 ? void 0 : _a.trim();
    if (singleValue.length == 0) {
        warning.style.display = "block";
    }
    else {
        warning.style.display = "none";
    }
};
// ON BLUR VALIDATION FUNCTION CALLS
addFName.addEventListener("blur", (event) => onBlurValidate(event, addFnameWarning));
editFName.addEventListener("blur", (event) => onBlurValidate(event, editFnameWarning));
addLName.addEventListener("blur", (event) => onBlurValidate(event, addLnameWarning));
editLName.addEventListener("blur", (event) => onBlurValidate(event, editLnameWarning));
addEmail.addEventListener("blur", (event) => onBlurValidate(event, addEmailWarning));
editEmail.addEventListener("blur", (event) => onBlurValidate(event, editEmailWarning));
addPhone.addEventListener("blur", (event) => onBlurValidate(event, addPhoneWarning));
editPhone.addEventListener("blur", (event) => onBlurValidate(event, editPhoneWarning));
addHNumber.addEventListener("blur", (event) => onBlurValidate(event, addHNumberWarning));
editHNumber.addEventListener("blur", (event) => onBlurValidate(event, editHNumberWarning));
addStreet.addEventListener("blur", (event) => onBlurValidate(event, addStreetWarning));
editStreet.addEventListener("blur", (event) => onBlurValidate(event, editStreetWarning));
addCity.addEventListener("blur", (event) => onBlurValidate(event, addCityWarning));
editCity.addEventListener("blur", (event) => onBlurValidate(event, editCityWarning));
addPincode.addEventListener("blur", (event) => onBlurValidate(event, addPinCodeWarning));
editPinCode.addEventListener("blur", (event) => onBlurValidate(event, editPinCodeWarning));
addCompName.addEventListener("blur", (event) => onBlurValidate(event, addCompanyNameWarning));
editCompName.addEventListener("blur", (event) => onBlurValidate(event, editCompanyNameWarning));
addCompWeb.addEventListener("blur", (event) => onBlurValidate(event, addCompanyWebWarning));
editCompWeb.addEventListener("blur", (event) => onBlurValidate(event, editCompanyWebWarning));
addPassword.addEventListener("blur", (event) => onBlurValidate(event, addPasswordWarning));
addConfirmPassword.addEventListener("blur", (event) => onBlurValidate(event, addConfirmPasswordWarning));
// ON INPUT VALIDATION FUNCTION
const validateInput = (event, regex, warningElement, maxLength = null) => {
    const eventTarget = event.target;
    const value = eventTarget.value.trim();
    if (maxLength && value.length > maxLength) {
        warningElement.innerHTML = `<small>Input should not exceed ${maxLength} characters</small>`;
        const eventTargetElement = event.target;
        eventTargetElement.classList.remove("is-valid");
        eventTargetElement.classList.add("is-invalid");
        warningElement.style.display = "block";
        return true;
    }
    if (regex.test(value) && eventTarget.value) {
        warningElement.style.display = "none";
        const eventTargetElement = event.target;
        eventTargetElement.classList.remove("is-invalid");
        eventTargetElement.classList.add("is-valid");
        return true;
    }
    else {
        console.log("FOCUS");
        eventTarget.focus();
        eventTarget.style.display = "block";
        warningElement.style.display = "block";
        const eventTargetElement = event.target;
        eventTargetElement.classList.remove("is-valid");
        eventTargetElement.classList.add("is-invalid");
        return false;
    }
};
// ADD FORM ON INPUT VALIDATION FUNCTION CALLS //
addFName.addEventListener("input", (event) => validateInput(event, /^[A-Za-z\s]{1,30}$/, addFnameWarning, 30));
addLName.addEventListener("input", (event) => validateInput(event, /^[A-Za-z]+(\s[A-Za-z]+)?$/, addLnameWarning, 30));
addEmail.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9-._+]+@[a-z]+\.[a-z]{2,3}$/, addEmailWarning));
addPhone.addEventListener("input", (event) => validateInput(event, /^[6789]{1}\d{9}$/, addPhoneWarning));
addHNumber.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9\s#/-]+$/, addHNumberWarning));
addStreet.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/, addStreetWarning));
addCity.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/, addCityWarning));
addPincode.addEventListener("input", (event) => validateInput(event, /^[0-9]{6}$/, addPinCodeWarning));
addCompName.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9\s&.-]+$/, addCompanyNameWarning));
addCompWeb.addEventListener("input", (event) => validateInput(event, /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/, addCompanyWebWarning));
addPassword.addEventListener("input", (event) => validateInput(event, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, addPasswordWarning));
addConfirmPassword.addEventListener("input", (event) => validateInput(event, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, addConfirmPasswordWarning));
addRole.addEventListener("input", (event) => {
    const eventTargetElement = event.target;
    const value = eventTargetElement.value.trim();
    if (value.length === 0) {
        eventTargetElement.classList.add("is-invalid");
    }
    else {
        eventTargetElement.classList.remove("is-invalid");
        eventTargetElement.classList.add("is-valid");
    }
});
// EDIT FORM ON INPUT VALIDATION FUNCTION CALLS //
editFName.addEventListener("input", (event) => validateInput(event, /^[A-Za-z\s]{1,30}$/, editFnameWarning, 30));
editLName.addEventListener("input", (event) => validateInput(event, /^[A-Za-z]+(\s[A-Za-z]+)?$/, editLnameWarning, 30));
editEmail.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9-._+]+@[a-z]+\.[a-z]{2,3}$/, editEmailWarning));
editPhone.addEventListener("input", (event) => validateInput(event, /^[6789]{1}\d{9}$/, editPhoneWarning));
editHNumber.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9\s#/-]+$/, editHNumberWarning));
editStreet.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/, editStreetWarning));
editCity.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/, editCityWarning));
editPinCode.addEventListener("input", (event) => validateInput(event, /^[0-9]{6}$/, editPinCodeWarning));
editCompName.addEventListener("input", (event) => validateInput(event, /^[a-zA-Z0-9\s&.-]+$/, editCompanyNameWarning));
editCompWeb.addEventListener("input", (event) => validateInput(event, /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/, editCompanyWebWarning));
editRole.addEventListener("input", (event) => {
    const eventTargetElement = event.target;
    const value = eventTargetElement.value.trim();
    if (value.length === 0) {
        eventTargetElement.classList.add("is-invalid");
    }
    else {
        eventTargetElement.classList.remove("is-invalid");
        eventTargetElement.classList.add("is-valid");
    }
});
// // VALIDATE ADD EMPTY FIELD
const validateAddEmptyField = () => {
    if (!addFName.value) {
        console.log("FOCUS");
        addFName.focus();
        addFnameWarning.style.display = "block";
        return false;
    }
    else if (!addLName.value) {
        addLName.focus();
        addLnameWarning.style.display = "block";
        return false;
    }
    else if (!addEmail.value) {
        addEmail.focus();
        addEmailWarning.style.visibility = "visible";
        return false;
    }
    else if (!addPhone.value) {
        addPhone.focus();
        addPhoneWarning.style.visibility = "visible";
        return false;
    }
    else if (!addHNumber.value) {
        addHNumber.focus();
        addHNumberWarning.style.display = "block";
        return false;
    }
    else if (!addStreet.value) {
        addStreet.focus();
        addStreetWarning.style.display = "block";
        return false;
    }
    else if (!addCity.value) {
        addCity.focus();
        addCityWarning.style.display = "block";
        return false;
    }
    else if (!addPincode.value) {
        addPincode.focus();
        addPinCodeWarning.style.display = "block";
        return false;
    }
    else if (!addCompName.value) {
        addCompName.focus();
        addCompanyNameWarning.style.display = "block";
        return false;
    }
    else if (!addCompWeb.value) {
        addCompWeb.focus();
        addCompanyWebWarning.style.display = "block";
        return false;
    }
    else if (!addRole.value) {
        addRole.focus();
        return false;
    }
    else {
        return true;
    }
};
// VALIDATE UPDATE EMPTY FIELD
const validateUpdateEmptyField = () => {
    if (!editFName.value) {
        console.log("FOCUS");
        editFName.focus();
        editFnameWarning.style.display = "block";
        return false;
    }
    else if (!editLName.value) {
        editLName.focus();
        editLnameWarning.style.display = "block";
        return false;
    }
    else if (!editEmail.value) {
        editEmail.focus();
        editEmailWarning.style.visibility = "visible";
        return false;
    }
    else if (!editPhone.value) {
        editPhone.focus();
        editPhoneWarning.style.visibility = "visible";
        return false;
    }
    else if (!editHNumber.value) {
        editHNumber.focus();
        editHNumberWarning.style.display = "block";
        return false;
    }
    else if (!editStreet.value) {
        editStreet.focus();
        editStreetWarning.style.display = "block";
        return false;
    }
    else if (!editCity.value) {
        editCity.focus();
        editCityWarning.style.display = "block";
        return false;
    }
    else if (!editPinCode.value) {
        editPinCode.focus();
        editPinCodeWarning.style.display = "block";
        return false;
    }
    else if (!editCompName.value) {
        editCompName.focus();
        editCompanyNameWarning.style.display = "block";
        return false;
    }
    else if (!editCompWeb.value) {
        editCompWeb.focus();
        editCompanyWebWarning.style.display = "block";
        return false;
    }
    else if (!editRole.value) {
        editRole.focus();
        return false;
    }
    else {
        return true;
    }
};
const superAdminCancelBtn = document.querySelectorAll(".super-admin-btn-cancel");
const adminCancelBtn = document.querySelectorAll(".admin-btn-cancel");
adminCancelBtn.forEach((element) => {
    element.addEventListener("click", () => resetInput());
});
superAdminCancelBtn.forEach((element) => {
    element.addEventListener("click", () => resetInput());
});
const resetInput = () => {
    // // // // // // // // // // // // // // // // // // // // // // // // //
    addFnameWarning.style.display = "none";
    addLnameWarning.style.display = "none";
    addEmailWarning.style.display = "none";
    addPhoneWarning.style.display = "none";
    addHNumberWarning.style.display = "none";
    addStreetWarning.style.display = "none";
    addCityWarning.style.display = "none";
    addPinCodeWarning.style.display = "none";
    addCompanyNameWarning.style.display = "none";
    addCompanyWebWarning.style.display = "none";
    addPasswordWarning.style.display = "none";
    addConfirmPasswordWarning.style.display = "none";
    editFnameWarning.style.display = "none";
    editLnameWarning.style.display = "none";
    editEmailWarning.style.display = "none";
    editPhoneWarning.style.display = "none";
    editHNumberWarning.style.display = "none";
    editStreetWarning.style.display = "none";
    editCityWarning.style.display = "none";
    editPinCodeWarning.style.display = "none";
    editCompanyNameWarning.style.display = "none";
    editCompanyWebWarning.style.display = "none";
};
function validateField(field, warning, regex) {
    const value = field.value.trim();
    if (!regex.test(value)) {
        warning.style.display = 'block';
        return false;
    }
    else {
        warning.style.display = 'none';
        return true;
    }
}
function validateAllAddFieldsInvalid() {
    let allInvalid = true;
    // Validate first name
    allInvalid = validateField(addFName, addFnameWarning, /^[a-zA-Z\s]+$/) && allInvalid;
    // Validate last name
    allInvalid = validateField(addLName, addLnameWarning, /^[a-zA-Z\s]+$/) && allInvalid;
    // Validate email
    allInvalid = validateField(addEmail, addEmailWarning, /^[^\s@]+@[^\s@]+\.[^\s@]+$/) && allInvalid;
    // Validate phone
    allInvalid = validateField(addPhone, addPhoneWarning, /^\d{10}$/) && allInvalid;
    // Validate house number
    allInvalid = validateField(addHNumber, addHNumberWarning, /^[a-zA-Z0-9\s#/-]+$/) && allInvalid;
    // Validate street
    allInvalid = validateField(addStreet, addStreetWarning, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/) && allInvalid;
    // Validate city
    allInvalid = validateField(addCity, addCityWarning, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/) && allInvalid;
    // Validate pincode
    allInvalid = validateField(addPincode, addPinCodeWarning, /^[0-9]{6}$/) && allInvalid;
    // Validate company name
    allInvalid = validateField(addCompName, addCompanyNameWarning, /^[a-zA-Z0-9\s&.-]+$/) && allInvalid;
    // Validate company website
    allInvalid = validateField(addCompWeb, addCompanyWebWarning, /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/) && allInvalid;
    // Validate role
    const role = addRole.value.trim();
    if (role.length === 0) {
        addRole.classList.add("is-invalid");
        allInvalid = false;
    }
    else {
        addRole.classList.remove("is-invalid");
        addRole.classList.add("is-valid");
    }
    return allInvalid;
}
function validateAllUpdateFieldsInvalid() {
    let allInvalid = true;
    // Validate first name
    allInvalid = validateField(editFName, editFnameWarning, /^[a-zA-Z\s]+$/) && allInvalid;
    // Validate last name
    allInvalid = validateField(editLName, editLnameWarning, /^[a-zA-Z\s]+$/) && allInvalid;
    // Validate email
    allInvalid = validateField(editEmail, editEmailWarning, /^[^\s@]+@[^\s@]+\.[^\s@]+$/) && allInvalid;
    // Validate phone
    allInvalid = validateField(editPhone, editPhoneWarning, /^\d{10}$/) && allInvalid;
    // Validate house number
    allInvalid = validateField(editHNumber, editHNumberWarning, /^[a-zA-Z0-9\s#/-]+$/) && allInvalid;
    // Validate street
    allInvalid = validateField(editStreet, editStreetWarning, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/) && allInvalid;
    // Validate city
    allInvalid = validateField(editCity, editCityWarning, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/) && allInvalid;
    // Validate pincode
    allInvalid = validateField(editPinCode, editPinCodeWarning, /^[0-9]{6}$/) && allInvalid;
    // Validate company name
    allInvalid = validateField(editCompName, editCompanyNameWarning, /^[a-zA-Z0-9\s&.-]+$/) && allInvalid;
    // Validate company website
    allInvalid = validateField(editCompWeb, editCompanyWebWarning, /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/) && allInvalid;
    // Validate role
    const role = editRole.value.trim();
    if (role.length === 0) {
        editRole.classList.add("is-invalid");
        allInvalid = false;
    }
    else {
        editRole.classList.remove("is-invalid");
        editRole.classList.add("is-valid");
    }
    return allInvalid;
}
export { validateAddEmptyField, validateUpdateEmptyField, validateAllAddFieldsInvalid, validateAllUpdateFieldsInvalid };
