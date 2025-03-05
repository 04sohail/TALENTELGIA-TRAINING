import { API_URL_USERS } from "./api";
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
  editForm
} from "./inputFields";
console.log(addFName.classList);

import { validateInput } from "./validations";

const LOADING_SCREEN = document.querySelector(".fullScreen") as HTMLElement;

// WINDOW RELOAD //
window.onload = () => {
  LOADING_SCREEN.style.display = "block";
  renderUser();
  LOADING_SCREEN.style.display = "none";
};

let savingID: string = "";
const deleteID = (id: string) => {
  savingID = id;
};

// CRUD OPERATIONS //
// Define the User type
type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: {
    hnumber: string;
    street: string;
    city: string;
    pincode: string;
  };
  company: {
    companyname: string;
    companywebsite: string;
    role: string;
  };
  password?: string;
};

// GETTING USERS FROM API //
// Update the getUser function to return an array of User
const getUser = async (): Promise<User[] | undefined> => {
  try {
    LOADING_SCREEN.style.display = "block";
    const API_response = await fetch(API_URL_USERS);
    if (API_response.ok) {
      LOADING_SCREEN.style.display = "none";
    }
    const users: User[] = await API_response.json();
    return users;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

//  EDITING USER //
const editUser = async (id: string): Promise<void> => {
  savingID = id;
  console.log("SAVING ID");

  try {
    const users = await getUser();
    if (users) {
      users.forEach((user: User) => {
        if (user.id === id) {
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
    } else {
      console.log("No User Found");
    }
  } catch (error) {
    console.error(error);
  }
};

// UPDATING USER //
editForm.addEventListener("submit", (event) => handleEditUser(event));
const handleEditUser = async (event: Event): Promise<void> => {
  event.preventDefault();
  if (savingID) {
    const updatedUser: User = {
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
    savingID = "";
  } else {
    console.log("Saving ID Is Null");
  }
};

// POSTING USER TO API //
const postUser = async (user: User): Promise<void> => {
  try {
    console.log("INSIDE POST USER");
    LOADING_SCREEN.style.display = "block";
    const API_RESPONSE: Response = await fetch(API_URL_USERS, {
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
const patchUser = async (user: User) => {
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
const deleteUser = async (id: string) => {
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

// DELETING USER //
let demo = document.querySelector("#deleteFormSubmit") as HTMLElement;
demo.addEventListener("submit", (event: Event) => handleDelete(event));
const handleDelete = async (event: Event) => {
  event.preventDefault();

  if (savingID !== "") {
    deleteUser(savingID);
  } else {
    console.log("Saving ID is undefined");
  }
};
// RENDERING USERS FROM API //
const renderUser = async (): Promise<void> => {
  const users = await getUser();
  if (users) {
    if (users.length === 0) {
      const wholeTable = document.querySelector(".noUser") as HTMLTableElement;
      wholeTable.innerHTML =
        "<div><div>--------------------------------------------------------------</div><h3>Sorry There Are No Users</h3><div>--------------------------------------------------------------</div><div>";
    }
    tableBody.innerHTML = "";
    users.forEach((user) => {
      if (user.company.role !== "super-admin") {
        const userRow = `<tr>
                              <td>${user.id}</td>
                              <td>${user.first_name + " " + user.last_name}</td>
                              <td>${user.email}</td>
                              <td>+91-${user.phone}</td>
                              <td>${user.address.hnumber +
          "," +
          user.address.street +
          "," +
          user.address.city +
          "," +
          user.address.pincode
          }</td>
                              <td>${user.company.companyname}</td>
                              <td>${user.company.role}</td>
                              <td><a href="${user.company.companywebsite
          }" target="_blank">${user.company.companywebsite
          }</a></td>
                              <td>
        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" id="edit-${user.id
          }">&#xE254;</i></a>
        <a href="#deleteEmployeeModal" class="delete deleteUserEvent" data-toggle="modal"><i class="material-icons" id="delete-${user.id
          }" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                              </td>     
                        </tr>`;
        tableBody.innerHTML += userRow;
      }
    });
    users.forEach((user) => {
      if (user.company.role !== "super-admin") {
        const editBtn = document.getElementById(`edit-${user.id}`) as HTMLAnchorElement;
        const dltBtn = document.getElementById(`delete-${user.id}`) as HTMLAnchorElement;
        editBtn.addEventListener("click", () => editUser(user.id))
        dltBtn.addEventListener("click", () => deleteID(user.id))
      }
    });
  } else {
    console.log("USERS IS UNDEFINED IN RENDER USER");
  }
};



// ADDING USER //
const adminAddSubmitBtn = document.querySelector("#addForm") as HTMLFormElement;

adminAddSubmitBtn.addEventListener("submit", (event: Event) => handleAddUser(event));
const handleAddUser = (event: Event) => {
  event.preventDefault();
  console.log("INSIDE ADMIN ADD SUBMITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
  if (validateInput()) {
    const newUser: User = {
      id: Date.now().toString(),
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
    console.log("Validation failed");
  }
};


// PROFILE MODAL JS //
const profileModal = document.querySelector(".profileModal") as HTMLAnchorElement;
profileModal.addEventListener("click", () => showProfile());
const showProfile = () => {
  console.log("INSIDE SHOW PROFILE OF ADMIN");
  const user: User | null = sessionStorage.getItem("loggedInAdmin") ? JSON.parse(sessionStorage.getItem("loggedInAdmin") as string) : null;
  console.log(user);
  if (!user) {
    alert("No user data found. Redirecting to login page.");
    window.location.href = "index.html";
    return;
  } else {
    const profileFullName = document.getElementById("profileFullName") as HTMLElement;
    profileFullName.textContent = user.first_name + " " + user.last_name;
    const profileEmail = document.getElementById("profileEmail") as HTMLElement;
    profileEmail.textContent = user.email;
    const profilePhone = document.getElementById("profilePhone") as HTMLElement;
    profilePhone.textContent = user.phone;
    const profileAddress = document.getElementById("profileAddress") as HTMLElement;
    profileAddress.textContent =
      user.address.hnumber +
      ", " +
      user.address.street +
      ", " +
      user.address.city +
      ", " +
      user.address.pincode;
    const profileCompName = document.getElementById("profileCompName") as HTMLElement;
    profileCompName.textContent = user.company.companyname;
    const profileRole = document.getElementById("profileRole") as HTMLElement;
    profileRole.textContent = user.company.role;
    const profileCompWeb = document.getElementById("profileCompWeb") as HTMLElement;
    profileCompWeb.textContent =
      user.company.companywebsite;
  }

}

// Logout functionality
const superAdminLogOut = document.querySelector(".admin-log-out") as HTMLElement;
superAdminLogOut.addEventListener("click", () => handleLogout());
function handleLogout() {
  sessionStorage.removeItem("loggedInAdmin");
  window.location.href = "index.html";
}
