const API_URL = "http://localhost:3000";
const API_URL_USERS = `${API_URL}/users`;
let TABLE_BODY = document.getElementById("tableBody");
let savingID = null;

// WINDOW RELOAD //
window.onload = () => {
  renderUser();
};

// ADD INPUT FIELD
const addName = document.querySelector(".addName");
const addEmail = document.querySelector(".addEmail");
const addPhone = document.querySelector(".addPhone");
const addHNumber = document.querySelector(".addHNumber");
const addStreet = document.querySelector(".addStreet");
const addCity = document.querySelector(".addCity");
const addZipcode = document.querySelector(".addZipcode");
const addCompName = document.querySelector(".addCompName");
const addCompWeb = document.querySelector(".addCompWeb");
const addRole = document.querySelector(".addRole");

// EDIT INPUT FIELD //
const editName = document.querySelector(".editName");
const editEmail = document.querySelector(".editEmail");
const editPhone = document.querySelector(".editPhone");
const editHnumber = document.querySelector(".editHnumber");
const editStreet = document.querySelector(".editStreet");
const editCity = document.querySelector(".editCity");
const editZipcode = document.querySelector(".editZipcode");
const editCompName = document.querySelector(".editCompName");
const editCompWeb = document.querySelector(".editCompWeb");
const editRole = document.querySelector(".editRole");

// ADD FORM VALIDATION VALIDATIONS //
const validateName = (event) => {
  console.log(event.target.value);
  
  const regexForName = /^[A-Za-z\s]{1,30}$/;
  if (regexForName.test(event.target.value)) {
    document.querySelector("#nameError").style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    document.querySelector("#nameError").style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

const validateEmail = (event) => {
  const regexForEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (regexForEmail.test(event.target.value)) {
    document.querySelector("#emailError").style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    document.querySelector("#emailError").style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

const validatePhone = (event) => {
  const regexForPhone = /^[+91]+[ ][6789]+\d{9}$/;
  console.log(event.target.value);

  if (regexForPhone.test(event.target.value)) {
    document.querySelector("#numberError").style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    document.querySelector("#numberError").style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

const validateHnumber = (event) => {
  console.log(event.target.value);
  const regexForHNumber = /^[0-9]{1,6}$/;
  if (regexForHNumber.test(event.target.value)) {
    document.querySelector("#HNumberError").style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    document.querySelector("#HNumberError").style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};

const validateZipcode = (event) => {
  console.log(event.target.value);
  const regexForZipcode = /^[0-9]{6}$/;
  if (regexForZipcode.test(event.target.value)) {
    document.querySelector("#ZipCodeError").style.display = "none";
    event.target.classList.remove("is-invalid");
    event.target.classList.add("is-valid");
  } else {
    document.querySelector("#ZipCodeError").style.display = "block";
    event.target.classList.remove("is-valid");
    event.target.classList.add("is-invalid");
  }
};









// SAVING ID //
const saveId = (id) => {
  savingID = id;
};

// EDITING USER //
const editUser = async (id) => {
  savingID = id;
  try {
    const users = await getUsersFromAPI();
    users.forEach((user) => {
      savingID = id;
      if (user.id == id) {
        editName.value = user.name;
        editEmail.value = user.email;
        editPhone.value = user.phone;
        editHnumber.value = user.address.hname;
        editStreet.value = user.address.street;
        editCity.value = user.address.city;
        editZipcode.value = user.address.zipcode;
        editCompName.value = user.company.companyname;
        editCompWeb.value = user.company.companywebsite;
        editRole.value = user.company.role;
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    console.log("editing user ", savingID);
  }
};

// UPDATING USER //
const handleEditUser = async (event) => {
  event.preventDefault();
  const users = await getUsersFromAPI();
  users.forEach((user) => {
    if (user.id == savingID) {
      user.name = editName.value;
      user.email = editEmail.value;
      user.phone = editPhone.value;
      user.address.hname = editHnumber.value;
      user.address.street = editStreet.value;
      user.address.city = editCity.value;
      user.address.zipcode = editZipcode.value;
      user.company.companyname = editCompName.value;
      user.company.companywebsite = editCompWeb.value;
      user.company.role = editRole.value;
      putUserToAPI(user);
    }
  });
};
// ADDING USER //
const handleAddUser = async (event) => {
  event.preventDefault();
  const newUser = {
    id: Math.ceil(Math.random() * 1000).toString(),
    name: addName.value,
    email: addEmail.value,
    phone: addPhone.value,
    address: {
      hname: addHNumber.value,
      street: addStreet.value,
      city: addCity.value,
      zipcode: addZipcode.value,
    },
    company: {
      companyname: addCompName.value,
      role: addRole.value,
      companywebsite: addCompWeb.value,
    },
  };
  postUserToAPI(newUser);
};

// DELETING USER //
const handleDelete = async (event) => {
  event.preventDefault();
  deleteUserFromAPI(savingID);
};

// RENDERING USERS FROM API //
const renderUser = async () => {
  const users = await getUsersFromAPI();
  TABLE_BODY.innerHTML = "";
  users.forEach((user) => {
    const userRow = `<tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.phone}</td>
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
<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete" onclick="saveId(${
      user.id
    })">&#xE872;</i></a>
                            </td>     
                      </tr>`;
    TABLE_BODY.innerHTML += userRow;
  });
};

// CRUD OPERATIONS //
// GETTING USERS FROM API //
const getUsersFromAPI = async () => {
  try {
    const API_response = await fetch(API_URL_USERS);
    const users = await API_response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
};

// POSTING USER TO API //
const postUserToAPI = async (user) => {
  try {
    await fetch(API_URL_USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.error(error);
  } finally {
    renderUser();
  }
};
// PUTTING USER TO API //
const putUserToAPI = async (user) => {
  try {
    await fetch(`${API_URL_USERS}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.error(error);
  } finally {
    renderUser();
  }
};

// DELETING USER FROM API //
const deleteUserFromAPI = async (id) => {
  try {
    await fetch(`${API_URL_USERS}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  } finally {
    renderUser();
  }
};
