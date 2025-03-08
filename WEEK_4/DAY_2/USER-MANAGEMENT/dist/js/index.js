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
const emailOrPhone = document.getElementById("emailOrPhone");
const password = document.getElementById("password");
const submitForm = document.getElementById("submitForm");
const LOADING_SCREEN = document.querySelector(".fullScreen");
submitForm.addEventListener("submit", (event) => handleSubmit(event));
const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const regexForEmail = /^[a-zA-Z0-9-._+]+@[a-z]+\.[a-z]{2,3}$/;
    const regexForPhone = /^[6789]{1}\d{9}$/;
    if (!emailOrPhone.value || !password.value) {
        alert("Please enter both email/phone and password.");
        return;
    }
    LOADING_SCREEN.style.display = "block";
    let API_RESPONSE, users, user;
    try {
        if (regexForEmail.test(emailOrPhone.value)) {
            API_RESPONSE = yield fetch(`${API_URL_USERS}?email=${emailOrPhone.value}&password=${password.value}`);
            if (API_RESPONSE.ok) {
                users = yield API_RESPONSE.json();
                user = users[0];
            }
        }
        else if (regexForPhone.test(emailOrPhone.value)) {
            API_RESPONSE = yield fetch(`${API_URL_USERS}?email=${encodeURIComponent(emailOrPhone.value)}&password=${encodeURIComponent(password.value)}}`);
            if (API_RESPONSE.ok) {
                users = yield API_RESPONSE.json();
                user = users[0];
            }
        }
        else {
            throw new Error("Invalid email or phone format.");
        }
        if (!user) {
            throw new Error("User not found!");
        }
        if (user.company.role === "customer") {
            sessionStorage.setItem("loggedInCustomer", JSON.stringify(user));
            window.location.href = "../../public/customer.html";
        }
        else if (user.company.role === "super-admin") {
            sessionStorage.setItem("loggedInSuperAdmin", JSON.stringify(user));
            window.location.href = "super-admin.html";
        }
        else if (user.company.role === "admin") {
            sessionStorage.setItem("loggedInAdmin", JSON.stringify(user));
            window.location.href = "admin.html";
        }
    }
    catch (error) {
        LOADING_SCREEN.style.display = "none";
        console.error("Error during login:", error);
        alert(error.message);
    }
});
