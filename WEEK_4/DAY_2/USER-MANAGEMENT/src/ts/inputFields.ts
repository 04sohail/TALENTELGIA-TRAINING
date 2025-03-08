// ADD REQUIRED FIELD //
const tableBody = document.getElementById("tableBody") as HTMLTableElement;
// EDIT/UPDATE FORM //
const editForm = document.getElementById("editForm") as HTMLFormElement;
// ADD INPUT FIELD
const addFName = document.querySelector(".addFName") as HTMLInputElement;
const addLName = document.querySelector(".addLName") as HTMLInputElement;
const addEmail = document.querySelector(".addEmail") as HTMLInputElement;
const addPhone = document.querySelector(".addPhone") as HTMLInputElement;
const addHNumber = document.querySelector(".addHNumber") as HTMLInputElement;
const addStreet = document.querySelector(".addStreet") as HTMLInputElement;
const addCity = document.querySelector(".addCity") as HTMLInputElement;
const addPincode = document.querySelector(".addPinCode") as HTMLInputElement;
const addCompName = document.querySelector(".addCompName") as HTMLInputElement;
const addCompWeb = document.querySelector(".addCompWeb") as HTMLInputElement;
const addPassword = document.querySelector(".addPassword") as HTMLInputElement;
const addConfirmPassword = document.querySelector(".addConfirmPassword") as HTMLInputElement;
const addRole = document.querySelector(".addRole") as HTMLInputElement;

// EDIT INPUT FIELD //
const editFName = document.querySelector(".editFName") as HTMLInputElement;
const editLName = document.querySelector(".editLName") as HTMLInputElement;
const editEmail = document.querySelector(".editEmail") as HTMLInputElement;
const editPhone = document.querySelector(".editPhone") as HTMLInputElement;
const editHNumber = document.querySelector(".editHNumber") as HTMLInputElement;
const editStreet = document.querySelector(".editStreet") as HTMLInputElement;
const editCity = document.querySelector(".editCity") as HTMLInputElement;
const editPinCode = document.querySelector(".editPinCode") as HTMLInputElement;
const editCompName = document.querySelector(".editCompName") as HTMLInputElement;
const editCompWeb = document.querySelector(".editCompWeb") as HTMLInputElement;
const editPassword = document.querySelector(".editPassword") as HTMLInputElement;
const editConfirmPassword = document.querySelector(".editConfirmPassword") as HTMLInputElement;
const editRole = document.querySelector(".editRole") as HTMLInputElement;

// LOGIN INPUT FIELD //
const logInEmailOrPhone = document.querySelector(".login-email-phone") as HTMLInputElement;
const logInPassword = document.querySelector(".login-password") as HTMLInputElement;

export {
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
  tableBody,
  addPassword,
  addConfirmPassword,
};

export {
  editFName,
  editLName,
  editEmail,
  editPhone,
  editHNumber,
  editStreet,
  editCity,
  editPinCode,
  editCompName,
  editCompWeb,
  editRole,
};

export { editForm };

export { logInEmailOrPhone, logInPassword };
