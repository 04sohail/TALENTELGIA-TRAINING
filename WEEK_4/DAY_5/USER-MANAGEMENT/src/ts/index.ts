const addFnameWarning = document.querySelector(".add-fname-warning") as HTMLDivElement;
const addLnameWarning = document.querySelector(".add-lname-warning") as HTMLDivElement;
const addEmailWarning = document.querySelector(".add-email-warning") as HTMLDivElement;
const addPhoneWarning = document.querySelector(".add-phone-warning") as HTMLDivElement;
const addHNumberWarning = document.querySelector(".add-HNumber-warning") as HTMLDivElement;
const addStreetWarning = document.querySelector(".add-street-warning") as HTMLDivElement;
const addCityWarning = document.querySelector(".add-city-warning") as HTMLDivElement;
const addPinCodeWarning = document.querySelector(".add-pin-code-warning") as HTMLDivElement;
const addCompanyNameWarning = document.querySelector(".add-company-name-warning") as HTMLDivElement;
const addCompanyWebWarning = document.querySelector(".add-company-web-warning") as HTMLDivElement;
const addPasswordWarning = document.querySelector(".add-password-warning") as HTMLDivElement;
const addConfirmPasswordWarning = document.querySelector(".add-confirm-password-warning") as HTMLDivElement;
const addRoleWarning = document.querySelector(".add-role-warning") as HTMLDivElement;

const allAddWarning = document.querySelectorAll(".empty-required") as NodeListOf<HTMLDivElement>;
const allEditWarning = document.querySelectorAll(".empty-required") as NodeListOf<HTMLDivElement>;


const editFnameWarning = document.querySelector(".edit-fname-warning") as HTMLDivElement;
const editLnameWarning = document.querySelector(".edit-lname-warning") as HTMLDivElement;
const editEmailWarning = document.querySelector(".edit-email-warning") as HTMLDivElement;
const editPhoneWarning = document.querySelector(".edit-phone-warning") as HTMLDivElement;
const editHNumberWarning = document.querySelector(".edit-HNumber-warning") as HTMLDivElement;
const editStreetWarning = document.querySelector(".edit-street-warning") as HTMLDivElement;
const editCityWarning = document.querySelector(".edit-city-warning") as HTMLDivElement;
const editPinCodeWarning = document.querySelector(".edit-pin-code-warning") as HTMLDivElement;
const editCompanyNameWarning = document.querySelector(".edit-company-name-warning") as HTMLDivElement;
const editCompanyWebWarning = document.querySelector(".edit-company-web-warning") as HTMLDivElement;
const editPasswordWarning = document.querySelector(".edit-password-warning") as HTMLDivElement;
const editConfirmPasswordWarning = document.querySelector(".edit-confirm-password-warning") as HTMLDivElement;
const editRoleWarning = document.querySelector(".edit-role-warning") as HTMLDivElement;

const cancelBtn = document.querySelector(".btn-cancel")

const DOMInstance = new DOM();
const APIInstance = new APIService();
const validation = new Validation();
const API_response = APIInstance.GetUser("users");
const addFields: HTMLInputElement[] = Array.from(document.getElementsByClassName("addUser")) as HTMLInputElement[];
const editFields: HTMLInputElement[] = Array.from(document.getElementsByClassName("editUser")) as HTMLInputElement[];

const ValidateAddEmptyField = (): boolean => {
    return validation.ValidateEmptyField(addFields, allAddWarning)
};
const ValidateUpdateEmptyField = (): boolean => {
    return validation.ValidateEmptyField(editFields, allEditWarning)
};

function ValidateAddRegex() {
    return validation.ValidateRegex(addFields[0], /^[A-Za-z\s]{1,15}$/) &&
        validation.ValidateRegex(addFields[1], /^[A-Za-z\s]{1,15}$/) &&
        validation.ValidateRegex(addFields[2], /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
        validation.ValidateRegex(addFields[3], /^[6789]{1}\d{9}$/) &&
        validation.ValidateRegex(addFields[4], /^[A-Za-z0-9]+(?:[-/#\s][A-Za-z0-9]+){0,29}$/) &&
        validation.ValidateRegex(addFields[5], /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/) &&
        validation.ValidateRegex(addFields[6], /^[a-zA-Z]+(?:[\s.-][a-zA-Z]+)*$/) &&
        validation.ValidateRegex(addFields[7], /^[1-9][0-9]{5}$/) &&
        validation.ValidateRegex(addFields[8], /^[a-zA-Z0-9]+(?:[\s&.,'-][a-zA-Z0-9]+)*(?:\s(Ltd\.|Pvt\.|Private|LLP|Inc\.|Corporation|Company))?$/) &&
        validation.ValidateRegex(addFields[9], /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,10}(\/[a-zA-Z0-9-]*){0,50}\/?$/) &&
        validation.ValidateRegex(addFields[10], /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/) &&
        validation.ValidateRegex(addFields[11], /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/);
}

function ValidateUpdateRegex() {
    return validation.ValidateRegex(editFields[0], /^[A-Za-z\s]{1,15}$/) &&
        validation.ValidateRegex(editFields[1], /^[A-Za-z\s]{1,15}$/) &&
        validation.ValidateRegex(editFields[2], /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
        validation.ValidateRegex(editFields[3], /^[6789]{1}\d{9}$/) &&
        validation.ValidateRegex(editFields[4], /^[A-Za-z0-9]+(?:[-/#\s][A-Za-z0-9]+){0,29}$/) &&
        validation.ValidateRegex(editFields[5], /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/) &&
        validation.ValidateRegex(editFields[6], /^[a-zA-Z]+(?:[\s.-][a-zA-Z]+)*$/) &&
        validation.ValidateRegex(editFields[7], /^[1-9][0-9]{5}$/) &&
        validation.ValidateRegex(editFields[8], /^[a-zA-Z0-9]+(?:[\s&.,'-][a-zA-Z0-9]+)*(?:\s(Ltd\.|Pvt\.|Private|LLP|Inc\.|Corporation|Company))?$/) &&
        validation.ValidateRegex(editFields[9], /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,10}(\/[a-zA-Z0-9-]*){0,50}\/?$/)
}

const handlePostUser = (event: Event): void => {
    DOMInstance.HandlePostUser(event)
};

// BLUR VALIDATION //
addFields[0].addEventListener("blur", (event) => validation.OnBlurValidate(event, addFnameWarning));
addFields[1].addEventListener("blur", (event) => validation.OnBlurValidate(event, addLnameWarning));
addFields[2].addEventListener("blur", (event) => validation.OnBlurValidate(event, addEmailWarning));
addFields[3].addEventListener("blur", (event) => validation.OnBlurValidate(event, addPhoneWarning));
addFields[4].addEventListener("blur", (event) => validation.OnBlurValidate(event, addHNumberWarning));
addFields[5].addEventListener("blur", (event) => validation.OnBlurValidate(event, addStreetWarning));
addFields[6].addEventListener("blur", (event) => validation.OnBlurValidate(event, addCityWarning));
addFields[7].addEventListener("blur", (event) => validation.OnBlurValidate(event, addPinCodeWarning));
addFields[8].addEventListener("blur", (event) => validation.OnBlurValidate(event, addCompanyNameWarning));
addFields[9].addEventListener("blur", (event) => validation.OnBlurValidate(event, addCompanyWebWarning));
addFields[10].addEventListener("blur", (event) => validation.OnBlurValidate(event, addPasswordWarning));
addFields[11].addEventListener("blur", (event) => validation.OnBlurValidate(event, addConfirmPasswordWarning));
addFields[12].addEventListener("blur", (event) => validation.OnBlurValidate(event, addRoleWarning));

// INPUT VALIDATION //
addFields[0].addEventListener("input", (event) => validation.OnInputValidateName(event, /^[A-Za-z\s]{1,15}$/, addFnameWarning));
addFields[1].addEventListener("input", (event) => validation.OnInputValidateName(event, /^[A-Za-z\s]{1,15}$/, addLnameWarning));
addFields[2].addEventListener("input", (event) => validation.OnInputValidateEmail(event, /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, addEmailWarning));
addFields[3].addEventListener("input", (event) => validation.OnInputValidatePhone(event, /^[6789]{1}\d{9}$/, addPhoneWarning));
addFields[4].addEventListener("input", (event) => validation.OnInputValidateHNumber(event, /^[A-Za-z0-9]+(?:[-/#\s][A-Za-z0-9]+){0,29}$/, addHNumberWarning));
addFields[5].addEventListener("input", (event) => validation.OnInputValidateStreet(event, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/, addStreetWarning));
addFields[6].addEventListener("input", (event) => validation.OnInputValidateCity(event, /^[a-zA-Z]+(?:[\s.-][a-zA-Z]+)*$/, addCityWarning));
addFields[7].addEventListener("input", (event) => validation.OnInputValidatePinCode(event, /^[1-9][0-9]{5}$/, addPinCodeWarning));
addFields[8].addEventListener("input", (event) => validation.OnInputValidateCompanyName(event, /^[a-zA-Z0-9]+(?:[\s&.,'-][a-zA-Z0-9]+)*(?:\s(Ltd\.|Pvt\.|Private|LLP|Inc\.|Corporation|Company))?$/, addCompanyNameWarning));
addFields[9].addEventListener("input", (event) => validation.OnInputValidateCompanyWeb(event, /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,10}(\/[a-zA-Z0-9-]*){0,50}\/?$/, addCompanyWebWarning));
addFields[10].addEventListener("input", (event) => validation.OnInputValidatePassword(event, addPasswordWarning));
addFields[11].addEventListener("input", (event) => validation.OnInputValidatePassword(event, addConfirmPasswordWarning));

// BLUR VALIDATION FOR EDIT FIELDS //
editFields[0].addEventListener("blur", (event) => validation.OnBlurValidate(event, editFnameWarning));
editFields[1].addEventListener("blur", (event) => validation.OnBlurValidate(event, editLnameWarning));
editFields[2].addEventListener("blur", (event) => validation.OnBlurValidate(event, editEmailWarning));
editFields[3].addEventListener("blur", (event) => validation.OnBlurValidate(event, editPhoneWarning));
editFields[4].addEventListener("blur", (event) => validation.OnBlurValidate(event, editHNumberWarning));
editFields[5].addEventListener("blur", (event) => validation.OnBlurValidate(event, editStreetWarning));
editFields[6].addEventListener("blur", (event) => validation.OnBlurValidate(event, editCityWarning));
editFields[7].addEventListener("blur", (event) => validation.OnBlurValidate(event, editPinCodeWarning));
editFields[8].addEventListener("blur", (event) => validation.OnBlurValidate(event, editCompanyNameWarning));
editFields[9].addEventListener("blur", (event) => validation.OnBlurValidate(event, editCompanyWebWarning));
editFields[10].addEventListener("blur", (event) => validation.OnBlurValidate(event, editRoleWarning));

// INPUT VALIDATION FOR EDIT FIELDS //
editFields[0].addEventListener("input", (event) => validation.OnInputValidateName(event, /^[A-Za-z\s]{1,15}$/, editFnameWarning));
editFields[1].addEventListener("input", (event) => validation.OnInputValidateName(event, /^[A-Za-z\s]{1,15}$/, editLnameWarning));
editFields[2].addEventListener("input", (event) => validation.OnInputValidateEmail(event, /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, editEmailWarning));
editFields[3].addEventListener("input", (event) => validation.OnInputValidatePhone(event, /^[6789]{1}\d{9}$/, editPhoneWarning));
editFields[4].addEventListener("input", (event) => validation.OnInputValidateHNumber(event, /^[A-Za-z0-9]+(?:[-/#\s][A-Za-z0-9]+){0,29}$/, editHNumberWarning));
editFields[5].addEventListener("input", (event) => validation.OnInputValidateStreet(event, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/, editStreetWarning));
editFields[6].addEventListener("input", (event) => validation.OnInputValidateCity(event, /^[a-zA-Z]+(?:[\s.-][a-zA-Z]+)*$/, editCityWarning));
editFields[7].addEventListener("input", (event) => validation.OnInputValidatePinCode(event, /^[1-9][0-9]{5}$/, editPinCodeWarning));
editFields[8].addEventListener("input", (event) => validation.OnInputValidateCompanyName(event, /^[a-zA-Z0-9]+(?:[\s&.,'-][a-zA-Z0-9]+)*(?:\s(Ltd\.|Pvt\.|Private|LLP|Inc\.|Corporation|Company))?$/, editCompanyNameWarning));
editFields[9].addEventListener("input", (event) => validation.OnInputValidateCompanyWeb(event, /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,10}(\/[a-zA-Z0-9-]*){0,50}\/?$/, editCompanyWebWarning));

// DELETING USER //
const deleteUser = document.getElementById("deleteUser");
deleteUser?.addEventListener("click", (event) => DOMInstance.HandleDelete(event));

// UPDATING USER //
const updateUser = document.querySelector(".updateUser");
updateUser?.addEventListener("click", (event) => DOMInstance.UpdateUser(event));

cancelBtn?.addEventListener("click", (event) => {
    DOMInstance.clearInputAndValidation(addFields, allAddWarning, allEditWarning)

});