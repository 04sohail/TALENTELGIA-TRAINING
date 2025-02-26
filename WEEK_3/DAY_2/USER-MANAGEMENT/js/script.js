import { getUser, deleteUser } from "../js/helping.js";
import { LOADING_SCREEN } from "../js/constants.js";
import { tableBody } from "../js/inputFields.js";

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
  // console.log(users);
  if (users.length === 0) {
    const wholeTable = document.querySelector(".noUser");
    wholeTable.innerHTML =
      "<div><div>--------------------------------------------------------------</div><h3>Sorry There Are No Users</h3><div>--------------------------------------------------------------</div><div>";
  }
  tableBody.innerHTML = "";
  users.forEach((user) => {
    const userRow = `<tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>+91-${user.phone}</td>
                            <td>${
                              user.address.hname +
                              "," +
                              user.address.street +
                              "," +
                              user.address.city +
                              "," +
                              user.address.zipcode
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
// const handleAddUser = async (event) => {
//   event.preventDefault();
//   if (!addName.value) {
//     addName.focus();
//     addRequired.style.visibility = "visible";
//     return;
//   } else if (!addEmail.value) {
//     alert("Please fill in the Email.");
//     return;
//   } else if (!addPhone.value) {
//     alert("Please fill in the Phone.");
//     return;
//   } else if (!addHNumber.value) {
//     alert("Please fill in the House Number.");
//     return;
//   } else if (!addStreet.value) {
//     alert("Please fill in the Street.");
//     return;
//   } else if (!addCity.value) {
//     alert("Please fill in the City.");
//     return;
//   } else if (!addZipcode.value) {
//     alert("Please fill in the Zipcode.");
//     return;
//   } else if (!addCompName.value) {
//     alert("Please fill in the Company Name.");
//     return;
//   } else if (!addCompWeb.value) {
//     alert("Please fill in the Company Website.");
//     return;
//   } else if (!addRole.value) {
//     alert("Please fill in the Role.");
//     return;
//   } else {
//     console.log("ELSE");
//     const newUser = {
//       id: Math.ceil(Math.random() * 1000).toString(),
//       name: addName.value,
//       email: addEmail.value,
//       phone: addPhone.value,
//       address: {
//         hname: addHNumber.value,
//         street: addStreet.value,
//         city: addCity.value,
//         zipcode: addZipcode.value,
//       },
//       company: {
//         companyname: addCompName.value,
//         role: addRole.value,
//         companywebsite: addCompWeb.value,
//       },
//     };
//     postUser(newUser);
//   }
// };




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


