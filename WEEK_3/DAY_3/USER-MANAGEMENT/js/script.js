import { getUser, deleteUser, postUser } from "../js/helping.js";
import { LOADING_SCREEN } from "../js/constants.js";
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
import { validateEmptyField } from "../js/validations.js";

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
                            <td>${user.first_name + " "   +user.last_name}</td>
                            <td>${user.email}</td>
                            <td>+91-${user.phone}</td>
                            <td>${
                              user.address.hname +
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
<a href="#editEmployeeModal" class="edit" data-toggle="modal" ><i class="material-icons" data-toggle="tooltip" title="Edit"  onclick="editUser(${
      user.id
    })">&#xE254;</i></a>
<a href="#deleteEmployeeModal" class="delete deleteUserEvent" data-toggle="modal"><i class="material-icons " onclick="${deleteID(
      user.id
    )}" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>     
                      </tr>`;
    tableBody.innerHTML += userRow;
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
addForm.addEventListener("submit", (event) => handleAddUser(event));
const handleAddUser = (event) => {
  event.preventDefault()
  if (validateEmptyField()) {
    const newUser = {
      UId: Date.now().toString(),
      first_name: addFName.value,
      last_name: addLName.value,
      email: addEmail.value,
      phone: addPhone.value,
      address: {
        hname: addHNumber.value,
        street: addStreet.value,
        city: addCity.value,
        pincode: addPincode.value,
      },
      company: {
        companyname: addCompName.value,
        role: addRole.value,
        companywebsite: addCompWeb.value,
      },
      user_password: {
        password: addPassword.value,
        confirmpassword: addConfirmPassword.value,
      },
    };
    postUser(newUser);
  }else{

  }
};
// RESET ALL FIELDS //

// // EDITING USER //
//   try {
//     const users = await getUser();
//     users.forEach((user) => {
//       savingID = id;
//       if (user.id == id) {
//         editName.value = user.name;
//         editEmail.value = user.email;
//         editPhone.value = user.phone;
//         editHnumber.value = user.address.hname;
//         editStreet.value = user.address.street;
//         editCity.value = user.address.city;
//         editZipcode.value = user.address.zipcode;
//         editCompName.value = user.company.companyname;
//         editCompWeb.value = user.company.companywebsite;
//         editRole.value = user.company.role;
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// // UPDATING USER //
// const handleEditUser = async (event) => {
//   event.preventDefault();
//   const users = await getUser();
//   users.forEach((user) => {
//     if (user.id == savingID) {
//       user.name = editName.value;
//       user.email = editEmail.value;
//       user.phone = editPhone.value;
//       user.address.hname = editHnumber.value;
//       user.address.street = editStreet.value;
//       user.address.city = editCity.value;
//       user.address.zipcode = editZipcode.value;
//       user.company.companyname = editCompName.value;
//       user.company.companywebsite = editCompWeb.value;
//       user.company.role = editRole.value;
//       putUser(user);
//     }
//   });
// };




export{renderUser}