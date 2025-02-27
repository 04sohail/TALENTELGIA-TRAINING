const API_URL_USERS = "http://localhost:3000/users";
const emailOrPhone = document.getElementById("emailOrPhone");
const password = document.getElementById("password");
const LOADING_SCREEN = document.querySelector(".fullScreen");

submitForm.addEventListener("submit", (event) => handleSubmit(event));
const customerName = document.querySelector(".customerName");

const handleSubmit = async (event) => {
  event.preventDefault();
  const regexForEmail = /^[a-zA-Z0-9-._+]+@[a-z]+\.[a-z]{2,3}$/;
  const regexForPhone = /^[6789]{1}\d{9}$/;
  if (regexForEmail.test(emailOrPhone.value)) {
    const API_RESPONSE = await fetch(
      `${API_URL_USERS}?email=${emailOrPhone.value}`
    );
    const user = await API_RESPONSE.json();
    if (
      user[0].email === emailOrPhone.value &&
      user[0].user_password.password === password.value
    ) {
      console.log(user[0].first_name);
      console.log(user[0].last_name);
      window.location.href =
        "http://127.0.0.1:5500/WEEK_3/DAY_3/USER-MANAGEMENT/public/CUSTOMER.html";
      console.log(customerName);
    } else {
      console.log("INVALID INPUT");
    }
  } else if (regexForPhone.test(emailOrPhone.value)) {
    console.log("INSIDE ELSE IF");
    const users = await fetch(`${API_URL_USERS}?phone=${emailOrPhone.value}`);
    const user = await users.json();
    console.log(user);
  } else {
    console.log("INSIDE ELSE");
  }
};
let myModal = new bootstrap.Modal(document.getElementById("addEmployeeModal"));
const openModal = document.getElementById("signUpBtn");
openModal.addEventListener("click", () => {
  myModal.show();
});
