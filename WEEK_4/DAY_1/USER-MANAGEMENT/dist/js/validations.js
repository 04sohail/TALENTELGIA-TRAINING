import { addFName, addLName, addEmail, addPhone, addHNumber, addStreet, addCity, addPincode, addCompName, addCompWeb, addRole, addPassword, addConfirmPassword, editFName, editLName, editEmail, editPhone, editHNumber, editStreet, editCity, editPinCode, editCompName, editCompWeb, editRole } from "./inputFields.js";
// LOGIN WARNING & REQUIRED //
// ADD WARNING & REQUIRED //
const addFnameRequired = document.querySelector(".add-fname-required");
const addFnameWarning = document.querySelector(".add-fname-warning");
const addLnameRequired = document.querySelector(".add-lname-required");
const addLnameWarning = document.querySelector(".add-lname-warning");
const addEmailRequired = document.querySelector(".add-email-required");
const addEmailWarning = document.querySelector(".add-email-warning");
const addPhoneRequired = document.querySelector(".add-phone-required");
const addPhoneWarning = document.querySelector(".add-phone-warning");
const addAddressRequired = document.querySelector(".add-address-required");
const addHNumberWarning = document.querySelector(".add-HNumber-warning");
const addStreetWarning = document.querySelector(".add-street-warning");
const addCityWarning = document.querySelector(".add-city-warning");
const addPinCodeWarning = document.querySelector(".add-pin-code-warning");
const addCompanyNameRequired = document.querySelector(".add-company-name-required");
const addCompanyNameWarning = document.querySelector(".add-company-name-warning");
const addCompanyWebRequired = document.querySelector(".add-company-web-required");
const addCompanyWebWarning = document.querySelector(".add-company-web-warning");
const addPasswordRequired = document.querySelector(".add-password-required");
const addPasswordWarning = document.querySelector(".add-password-warning");
const addConfirmPasswordRequired = document.querySelector(".add-confirm-password-required");
const addConfirmPasswordWarning = document.querySelector(".add-confirm-password-warning");
const addRoleRequired = document.querySelector(".add-role-required");
// EDIT WARNING & REQUIRED //
const editFnameRequired = document.querySelector(".edit-fname-required");
const editFnameWarning = document.querySelector(".edit-fname-warning");
const editLnameRequired = document.querySelector(".edit-lname-required");
const editLnameWarning = document.querySelector(".edit-lname-warning");
const editEmailRequired = document.querySelector(".edit-email-required");
const editEmailWarning = document.querySelector(".edit-email-warning");
const editPhoneRequired = document.querySelector(".edit-phone-required");
const editPhoneWarning = document.querySelector(".edit-phone-warning");
const editAddressRequired = document.querySelector(".edit-address-required");
const editHNumberWarning = document.querySelector(".edit-HNumber-warning");
const editStreetWarning = document.querySelector(".edit-street-warning");
const editCityWarning = document.querySelector(".edit-city-warning");
const editPinCodeWarning = document.querySelector(".edit-pin-code-warning");
const editCompanyNameRequired = document.querySelector(".edit-company-name-required");
const editCompanyNameWarning = document.querySelector(".edit-company-name-warning");
const editCompanyWebRequired = document.querySelector(".edit-company-web-required");
const editCompanyWebWarning = document.querySelector(".edit-company-web-warning");
const editPasswordRequired = document.querySelector(".edit-password-required");
const editPasswordWarning = document.querySelector(".edit-password-warning");
const editConfirmPasswordRequired = document.querySelector(".edit-confirm-password-required");
const editConfirmPasswordWarning = document.querySelector(".edit-confirm-password-warning");
const editRoleRequired = document.querySelector(".edit-role-required");
// ON BLUR VALIDATION FUNCTION
const onBlurValidate = (event, required, warning) => {
    var _a;
    const inputTarget = event.target;
    const singleValue = (_a = inputTarget.value) === null || _a === void 0 ? void 0 : _a.trim();
    if (singleValue.length == 0) {
        required.style.visibility = "visible";
        warning.style.display = "block";
    }
    else {
        required.style.visibility = "hidden";
        warning.style.display = "none";
    }
};
// ON BLUR VALIDATION FUNCTION CALLS
addFName.addEventListener("blur", (event) => onBlurValidate(event, addFnameRequired, addFnameWarning));
editFName.addEventListener("blur", (event) => onBlurValidate(event, editFnameRequired, editFnameWarning));
addLName.addEventListener("blur", (event) => onBlurValidate(event, addLnameRequired, addLnameWarning));
editLName.addEventListener("blur", (event) => onBlurValidate(event, editLnameRequired, editLnameWarning));
addEmail.addEventListener("blur", (event) => onBlurValidate(event, addEmailRequired, addEmailWarning));
editEmail.addEventListener("blur", (event) => onBlurValidate(event, editEmailRequired, editEmailWarning));
addPhone.addEventListener("blur", (event) => onBlurValidate(event, addPhoneRequired, addPhoneWarning));
editPhone.addEventListener("blur", (event) => onBlurValidate(event, editPhoneRequired, editPhoneWarning));
addHNumber.addEventListener("blur", (event) => onBlurValidate(event, addAddressRequired, addHNumberWarning));
editHNumber.addEventListener("blur", (event) => onBlurValidate(event, editAddressRequired, editHNumberWarning));
addStreet.addEventListener("blur", (event) => onBlurValidate(event, addAddressRequired, addStreetWarning));
editStreet.addEventListener("blur", (event) => onBlurValidate(event, editAddressRequired, editStreetWarning));
addCity.addEventListener("blur", (event) => onBlurValidate(event, addAddressRequired, addCityWarning));
editCity.addEventListener("blur", (event) => onBlurValidate(event, editAddressRequired, editCityWarning));
addPincode.addEventListener("blur", (event) => onBlurValidate(event, addAddressRequired, addPinCodeWarning));
editPinCode.addEventListener("blur", (event) => onBlurValidate(event, editAddressRequired, editPinCodeWarning));
addCompName.addEventListener("blur", (event) => onBlurValidate(event, addCompanyNameRequired, addCompanyNameWarning));
editCompName.addEventListener("blur", (event) => onBlurValidate(event, editCompanyNameRequired, editCompanyNameWarning));
addCompWeb.addEventListener("blur", (event) => onBlurValidate(event, addCompanyWebRequired, addCompanyWebWarning));
editCompWeb.addEventListener("blur", (event) => onBlurValidate(event, editCompanyWebRequired, editCompanyWebWarning));
addPassword.addEventListener("blur", (event) => onBlurValidate(event, addPasswordRequired, addPasswordWarning));
addConfirmPassword.addEventListener("blur", (event) => onBlurValidate(event, addConfirmPasswordRequired, addConfirmPasswordWarning));
addRole.addEventListener("blur", (event) => onBlurRole(event));
editRole.addEventListener("blur", (event) => onBlurRole(event));
const onBlurRole = (event) => {
    const eventTarget = event.target;
    const value = eventTarget.value.trim();
    if (value.length == 0) {
        addRoleRequired.style.visibility = "visible";
    }
    else {
        addRoleRequired.style.visibility = "hidden";
    }
};
// ON INPUT VALIDATION FUNCTION
const validateInput = (event, regex, warningElement, maxLength = null) => {
    const eventTarget = event.target;
    const value = eventTarget.value.trim();
    if (maxLength && value.length > maxLength) {
        warningElement.innerHTML = `<small>Input should not exceed ${maxLength} characters</small>`;
        const eventTargetElement = event.target;
        eventTargetElement === null || eventTargetElement === void 0 ? void 0 : eventTargetElement.classList.remove("is-valid");
        eventTargetElement === null || eventTargetElement === void 0 ? void 0 : eventTargetElement.classList.add("is-invalid");
        warningElement.style.display = "block";
        return;
    }
    if (regex.test(value)) {
        warningElement.style.display = "none";
        const eventTargetElement = event.target;
        eventTargetElement === null || eventTargetElement === void 0 ? void 0 : eventTargetElement.classList.remove("is-invalid");
        eventTargetElement === null || eventTargetElement === void 0 ? void 0 : eventTargetElement.classList.add("is-valid");
    }
    else {
        warningElement.style.display = "block";
        const eventTargetElement = event.target;
        eventTargetElement === null || eventTargetElement === void 0 ? void 0 : eventTargetElement.classList.remove("is-valid");
        eventTargetElement === null || eventTargetElement === void 0 ? void 0 : eventTargetElement.classList.add("is-invalid");
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
        addRoleRequired.style.visibility = "visible";
        eventTargetElement.classList.add("is-invalid");
    }
    else {
        addRoleRequired.style.visibility = "hidden";
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
        editRoleRequired.style.visibility = "visible";
        eventTargetElement.classList.add("is-invalid");
    }
    else {
        editRoleRequired.style.visibility = "hidden";
        eventTargetElement.classList.remove("is-invalid");
        eventTargetElement.classList.add("is-valid");
    }
});
// VALIDATE EMPTY FIELD
const validateEmptyField = () => {
    if (!addFName.value) {
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
        addRoleRequired.style.visibility = "visible";
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
    addFnameRequired.style.visibility = "hidden";
    addLnameRequired.style.visibility = "hidden";
    addEmailRequired.style.visibility = "hidden";
    addPhoneRequired.style.visibility = "hidden";
    addAddressRequired.style.visibility = "hidden";
    addCompanyNameRequired.style.visibility = "hidden";
    addCompanyWebRequired.style.visibility = "hidden";
    addPasswordRequired.style.visibility = "hidden";
    addConfirmPasswordRequired.style.visibility = "hidden";
    addRoleRequired.style.visibility = "hidden";
    editFnameRequired.style.visibility = "hidden";
    editLnameRequired.style.visibility = "hidden";
    editEmailRequired.style.visibility = "hidden";
    editPhoneRequired.style.visibility = "hidden";
    editAddressRequired.style.visibility = "hidden";
    editCompanyNameRequired.style.visibility = "hidden";
    editCompanyWebRequired.style.visibility = "hidden";
    editRoleRequired.style.visibility = "hidden";
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
export { validateEmptyField };
