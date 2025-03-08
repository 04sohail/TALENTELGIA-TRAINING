const addFnameWarning = document.querySelector(".add-fname-warning") as HTMLDivElement;
const addLnameWarning = document.querySelector(".add-lname-warning") as HTMLDivElement;
const addEmailWarning = document.querySelector(".add-email-warning") as HTMLDivElement;
const addPhoneWarning = document.querySelector(".add-phone-warning") as HTMLDivElement;
const addHNumberWarning = document.querySelector(".add-HNumber-warning") as HTMLDivElement;
const addStreetWarning = document.querySelector(".add-street-warning") as HTMLDivElement;
const addCityWarning = document.querySelector(".add-city-warning") as HTMLDivElement;
const addPinCodeWarning = document.querySelector(".add-pin-code-warning") as HTMLDivElement;
const addCompanyNameWarning = document.querySelector(
    ".add-company-name-warning"
) as HTMLDivElement;
const addCompanyWebWarning = document.querySelector(".add-company-web-warning") as HTMLDivElement;
const addPasswordWarning = document.querySelector(".add-password-warning") as HTMLDivElement;
const addConfirmPasswordWarning = document.querySelector(
    ".add-confirm-password-warning"
) as HTMLDivElement;
const addRoleWarning = document.querySelector(".add-role-warning") as HTMLDivElement;


const DOMInstance = new DOM()
const APIInstance = new APIService()
const validation = new Validation()
DOMInstance.RenderHeader()
const API_response = APIInstance.GetUser("users");
const addFields: HTMLInputElement[] = Array.from(document.getElementsByClassName("addUser")) as HTMLInputElement[];
window.onload = (event) => {
    DOMInstance.RenderData(API_response)
}


const ValidateAddEmptyField = (): boolean => {
    return validation.ValidateAddEmptyField(addFields[0], addFnameWarning) &&
        validation.ValidateAddEmptyField(addFields[1], addLnameWarning) &&
        validation.ValidateAddEmptyField(addFields[2], addEmailWarning) &&
        validation.ValidateAddEmptyField(addFields[3], addPhoneWarning) &&
        validation.ValidateAddEmptyField(addFields[4], addHNumberWarning) &&
        validation.ValidateAddEmptyField(addFields[5], addStreetWarning) &&
        validation.ValidateAddEmptyField(addFields[6], addCityWarning) &&
        validation.ValidateAddEmptyField(addFields[7], addPinCodeWarning) &&
        validation.ValidateAddEmptyField(addFields[8], addCompanyNameWarning) &&
        validation.ValidateAddEmptyField(addFields[9], addCompanyWebWarning) &&
        validation.ValidateAddEmptyField(addFields[10], addPasswordWarning) &&
        validation.ValidateAddEmptyField(addFields[11], addConfirmPasswordWarning) &&
        validation.ValidateAddEmptyField(addFields[12], addRoleWarning);
}
//  
function validateAddRegex() {
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
        validation.ValidateRegex(addFields[11], /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/)
}

const handlePostUser = (event: Event): void => {
    event.preventDefault();
    const user: User = {
        id: Date.now().toString(),
        first_name: addFields[0].value,
        last_name: addFields[1].value,
        email: addFields[2].value,
        phone: addFields[3].value,
        address: {
            hnumber: addFields[4].value,
            street: addFields[5].value,
            city: addFields[6].value,
            pincode: addFields[7].value,
        },
        company: {
            companyname: addFields[8].value,
            companywebsite: addFields[9].value,
            role: addFields[12].value,
        },
        password: addFields[10].value
    };
    if (ValidateAddEmptyField() && validateAddRegex()) {
        APIInstance.PostUser("users", user);
        DOMInstance.RenderData(API_response);
    } else {
        console.log("VALIDATION FAILED");
    }
}

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



// DELETING USER //
DOMInstance.editUser()

// const handleDelete = (event: Event): void => {
//     event.preventDefault()
//     console.log(event);

//     if (DOMInstance.SAVING_ID) {
//         APIInstance.DeleteUser(DOMInstance.SAVING_ID);
//     } else {
//         console.error("SAVING_ID is null");
//     }
// }
// console.log(document.querySelectorAll("#deleteUserEvent"));
