var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_URL_USERS } from "./api";
import { addFName, addLName, addEmail, addPhone, addHNumber, addStreet, addCity, addPincode, addCompName, addCompWeb, addRole, addPassword, tableBody, editFName, editLName, editEmail, editPhone, editHNumber, editStreet, editCity, editPinCode, editCompName, editCompWeb, editRole, editForm } from "./inputFields";
// import { validateEmptyField } from "./validations";
const LOADING_SCREEN = document.querySelector(".fullScreen");
// WINDOW RELOAD //
window.onload = () => {
    LOADING_SCREEN.style.display = "block";
    renderUser();
    LOADING_SCREEN.style.display = "none";
};
let savingID = undefined;
const deleteID = (id) => {
    savingID = id;
};
// GETTING USERS FROM API //
// Update the getUser function to return an array of User
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        LOADING_SCREEN.style.display = "block";
        const API_response = yield fetch(API_URL_USERS);
        if (API_response.ok) {
            LOADING_SCREEN.style.display = "none";
        }
        const users = yield API_response.json();
        return users;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
});
//  EDITING USER //
// Update the editUser function to use the User type
const editUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    savingID = id;
    try {
        const users = yield getUser();
        if (users) {
            users.forEach((user) => {
                if (user.UID === id) {
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
        }
        else {
            console.log("No User Found");
        }
    }
    catch (error) {
        console.error(error);
    }
});
// UPDATING USER //
editForm.addEventListener("submit", (event) => handleEditUser(event));
const handleEditUser = (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (savingID) {
        const updatedUser = {
            UID: savingID,
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
        yield patchUser(updatedUser);
        savingID = undefined;
    }
    else {
        console.log("Saving ID Is Null");
    }
});
// POSTING USER TO API //
const postUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        LOADING_SCREEN.style.display = "block";
        const API_RESPONSE = yield fetch(API_URL_USERS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (API_RESPONSE.ok) {
            LOADING_SCREEN.style.display = "none";
        }
    }
    catch (error) {
        console.error(error);
    }
    finally {
        renderUser();
    }
});
// PATCHING USER TO API //
const patchUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        LOADING_SCREEN.style.display = "block";
        const API_RESPONSE = yield fetch(`${API_URL_USERS}/${user.UID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (API_RESPONSE.ok) {
            LOADING_SCREEN.style.display = "none";
        }
    }
    catch (error) {
        console.error(error);
    }
    finally {
        renderUser();
    }
});
// DELETING USER FROM API //
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        LOADING_SCREEN.style.display = "block";
        const API_RESPONSE = yield fetch(`${API_URL_USERS}/${id}`, {
            method: "DELETE",
        });
        if (API_RESPONSE.ok) {
            LOADING_SCREEN.style.display = "none";
        }
    }
    catch (error) {
        console.error(error);
    }
    finally {
        renderUser();
    }
});
// DELETING USER //
let demo = document.querySelector("#deleteFormSubmit");
demo.addEventListener("submit", (event) => handleDelete(event));
const handleDelete = (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (savingID !== undefined) {
        deleteUser(savingID);
    }
    else {
        console.log("Saving ID is undefined");
    }
});
// RENDERING USERS FROM API //
const renderUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUser();
    if (users) {
        if (users.length === 0) {
            const wholeTable = document.querySelector(".noUser");
            wholeTable.innerHTML =
                "<div><div>--------------------------------------------------------------</div><h3>Sorry There Are No Users</h3><div>--------------------------------------------------------------</div><div>";
        }
        tableBody.innerHTML = "";
        users.forEach((user) => {
            const userRow = `<tr>
                            <td>${user.UID}</td>
                            <td>${user.first_name + " " + user.last_name}</td>
                            <td>${user.email}</td>
                            <td>+91-${user.phone}</td>
                            <td>${user.address.hnumber +
                "," +
                user.address.street +
                "," +
                user.address.city +
                "," +
                user.address.pincode}</td>
                            <td>${user.company.companyname}</td>
                            <td>${user.company.role}</td>
                            <td><a href="${user.company.companywebsite}" target="_blank">${user.company.companywebsite}</a></td>
                            <td>
      <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" id="edit-${user.UID}">&#xE254;</i></a>
      <a href="#deleteEmployeeModal" class="delete deleteUserEvent" data-toggle="modal"><i class="material-icons" id="delete-${user.UID}" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>     
                      </tr>`;
            tableBody.innerHTML += userRow;
        });
        users.forEach((user) => {
            const editBtn = document.getElementById(`edit-${user.UID}`);
            const dltBtn = document.getElementById(`delete-${user.UID}`);
            editBtn.addEventListener("click", () => editUser(user.UID));
            dltBtn.addEventListener("click", () => deleteID(user.UID));
        });
    }
    else {
        console.log("USERS IS UNDEFINED IN RENDER USER");
    }
});
// ADDING USER //
const adminAddSubmitBtn = document.querySelector(".add-admin-submit-btn");
adminAddSubmitBtn.addEventListener("submit", (event) => handleAddUser(event));
const handleAddUser = (event) => {
    event.preventDefault();
    if (savingID) {
        const newUser = {
            UID: Date.now().toString(),
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
    }
    else {
        console.log("Validation failed");
    }
};
// PROFILE MODAL JS //
const profileModal = document.querySelector("#profileModal");
profileModal.addEventListener("click", () => showProfile());
const showProfile = () => {
    const user = sessionStorage.getItem("loggedInAdmin") ? JSON.parse(sessionStorage.getItem("loggedInAdmin")) : null;
    if (!user) {
        alert("No user data found. Redirecting to login page.");
        window.location.href = "index.html";
        return;
    }
    else {
        const profileFullName = document.getElementById("profileFullName");
        profileFullName.textContent = user.first_name + " " + user.last_name;
        const profileEmail = document.getElementById("profileEmail");
        profileEmail.textContent = user.email;
        const profilePhone = document.getElementById("profilePhone");
        profilePhone.textContent = user.phone;
        const profileAddress = document.getElementById("profileAddress");
        profileAddress.textContent =
            user.address.hnumber +
                ", " +
                user.address.street +
                ", " +
                user.address.city +
                ", " +
                user.address.pincode;
        const profileCompName = document.getElementById("profileCompName");
        profileCompName.textContent = user.company.companyname;
        const profileRole = document.getElementById("profileRole");
        profileRole.textContent = user.company.role;
        const profileCompWeb = document.getElementById("profileCompWeb");
        profileCompWeb.textContent =
            user.company.companywebsite;
    }
};
// Logout functionality
const superAdminLogOut = document.querySelector(".super-admin-log-out");
superAdminLogOut.addEventListener("click", () => handleLogout());
function handleLogout() {
    sessionStorage.removeItem("loggedInAdmin");
    window.location.href = "index.html";
}
