import { API_URL_USERS } from "../network/api.js";
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
  tableBody,
} from "../js/inputFields.js";

import {
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
} from "../js/inputFields.js";
import { editForm } from "../js/inputFields.js";
import { validateEmptyField } from "../js/validations.js";

const LOADING_SCREEN = document.querySelector(".fullScreen");

// WINDOW RELOAD //
window.onload = () => {
  LOADING_SCREEN.style.display = "block";
  renderUser();
  LOADING_SCREEN.style.display = "none";
};

let savingID = null;
const deleteID = (id) => {
  savingID = id;
};

// CRUD OPERATIONS //
// GETTING USERS FROM API //
const getUser = async () => {
  try {
    LOADING_SCREEN.style.display = "block";
    const API_response = await fetch(API_URL_USERS);
    if (API_response.ok) {
      LOADING_SCREEN.style.display = "none";
    }
    const users = await API_response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
};

//  EDITING USER //
const editUser = async (id) => {
  savingID = id;
  try {
    const users = await getUser();
    users.forEach((user) => {
      if (user.id == id) {
        savingID = id;
        editFName.value = user.first_name;
        editLName.value = user.last_name;
        editEmail.value = user.email;
        editPhone.value = user.phone;
        editHNumber.value = user.address.hnumber;
        editStreet.value = user.address.street;
        editCity.value = user.address.city;
        editPinCode.value = user.address.pincode;
        editCompName.value = user.company.companyname;
        editCompWeb.value = user.company.companywebsite;
        editRole.value = user.company.role;
      }
    });
  } catch (error) {
    console.error(error);
  }
};

// UPDATING USER //
editForm.addEventListener("submit", (event) => handleEditUser(event));
const handleEditUser = async (event) => {
  event.preventDefault();
  const updatedUser = {
    id: savingID,
    first_name: editFName.value,
    last_name: editLName.value,
    email: editEmail.value,
    phone: editPhone.value,
    address: {
      hnumber: editHNumber.value,
      street: editStreet.value,
      city: editCity.value,
      pincode: editPinCode.value,
    },
    company: {
      companyname: editCompName.value,
      role: editRole.value,
      companywebsite: editCompWeb.value,
    },
  };
  await patchUser(updatedUser);
  savingID = null;
};

// POSTING USER TO API //
const postUser = async (user) => {
  try {
    LOADING_SCREEN.style.display = "block";
    const API_RESPONSE = await fetch(API_URL_USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (API_RESPONSE.ok) {
      LOADING_SCREEN.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  } finally {
    renderUser();
  }
};
// PATCHING USER TO API //
const patchUser = async (user) => {
  try {
    LOADING_SCREEN.style.display = "block";
    const API_RESPONSE = await fetch(`${API_URL_USERS}/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (API_RESPONSE.ok) {
      LOADING_SCREEN.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  } finally {
    renderUser();
  }
};

// DELETING USER FROM API //
const deleteUser = async (id) => {
  try {
    LOADING_SCREEN.style.display = "block";
    const API_RESPONSE = await fetch(`${API_URL_USERS}/${id}`, {
      method: "DELETE",
    });
    if (API_RESPONSE.ok) {
      LOADING_SCREEN.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  } finally {
    renderUser();
  }
};

// RENDERING USERS FROM API //
const renderUser = async () => {
  const users = await getUser();
  if (users.length === 0) {
    const wholeTable = document.querySelector(".noUser");
    wholeTable.innerHTML =
      "<div><div>--------------------------------------------------------------</div><h3>Sorry There Are No Users</h3><div>--------------------------------------------------------------</div><div>";
  }
  tableBody.innerHTML = "";
  users.forEach((user) => {
    const userRow = `<tr>
                            <td>${user.id}</td>
                            <td>${user.first_name + " " + user.last_name}</td>
                            <td>${user.email}</td>
                            <td>+91-${user.phone}</td>
                            <td>${
                              user.address.hnumber +
                              "," +
                              user.address.street +
                              "," +
                              user.address.city +
                              "," +
                              user.address.pincode
                            }</td>
                            <td>${user.company.companyname}</td>
                            <td>${user.company.role}</td>
                            <td><a href="${
                              user.company.companywebsite
                            }" target="_blank">${
      user.company.companywebsite
    }</a></td>
                            <td>
<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" id="edit-${
      user.id
    }">&#xE254;</i></a>
<a href="#deleteEmployeeModal" class="delete deleteUserEvent" data-toggle="modal"><i class="material-icons" id="delete-${
      user.id
    }" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>     
                      </tr>`;
    tableBody.innerHTML += userRow;
  });

  users.forEach((user) => {
    document.getElementById(`edit-${user.id}`).onclick = () =>
      editUser(user.id);
    document.getElementById(`delete-${user.id}`).onclick = () =>
      deleteID(user.id);
  });
};

// DELETING USER //
let demo = document.querySelector("#deleteFormSubmit");
demo.addEventListener("submit", (event) => handleDelete(event));
const handleDelete = async (event) => {
  event.preventDefault();
  deleteUser(savingID);
};

// ADDING USER //

window.handleAddUser = (event) => {
  event.preventDefault();
  if (validateEmptyField()) {
    const newUser = {
      UId: Date.now().toString(),
      first_name: addFName.value,
      last_name: addLName.value,
      email: addEmail.value,
      phone: addPhone.value,
      address: {
        hnumber: addHNumber.value,
        street: addStreet.value,
        city: addCity.value,
        pincode: addPincode.value,
      },
      company: {
        companyname: addCompName.value,
        role: addRole.value,
        companywebsite: addCompWeb.value,
      },
      password: addPassword.value,
    };
    postUser(newUser);
  } else {
  }
};

// const addModal = document.querySelector("#addEmployeeModal"); // Replace with your modal ID
// const addForm = document.querySelector("#addForm"); // Replace with your form ID

// // Reset form and clear validation when modal is hidden
// addModal.addEventListener("hidden.bs.modal", () => {
//   addForm.reset(); // Clears all input fields
//   const validationWarnings = addForm.querySelectorAll(".warning"); // Replace '.warning' with your warning class
//   validationWarnings.forEach((warning) => (warning.style.visibility = "hidden"));

//   const inputs = addForm.querySelectorAll("input");
//   inputs.forEach((input) => {
//     input.classList.remove("is-invalid", "is-valid"); // Remove validation classes
//   });
// });
