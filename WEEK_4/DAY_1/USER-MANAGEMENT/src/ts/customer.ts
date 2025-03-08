// document.addEventListener("DOMContentLoaded", () => {
const customerName = document.querySelector(".customer-name") as HTMLElement;
const customerEmail = document.querySelector(".customer-email") as HTMLElement;
const customerPhone = document.querySelector(".customer-phone") as HTMLElement;
const customerAddress = document.querySelector(".customer-address") as HTMLElement;
const customerCompanyName = document.querySelector(".customer-company-name") as HTMLElement;
const customerRole = document.querySelector(".customer-role") as HTMLElement;
const customerLogOut = document.querySelector(".customer-log-out-btn") as HTMLElement;
const customerCompanyWebsite = document.querySelector(
  ".customer-company-website"
) as HTMLElement;

type User = {
  UID: string;
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
  password: string;
};

const user: User | null = sessionStorage.getItem("loggedInCustomer") ? JSON.parse(sessionStorage.getItem("loggedInCustomer") as string) : null;
console.log(user);

if (!user) {
  alert("No user data found. Redirecting to login page.");
  window.location.href = "index.html";
}
else {
  customerName.innerHTML = `<strong>Name:</strong> ${user.first_name} ${user.last_name}`;
  customerEmail.innerHTML = `<strong>Email:</strong> ${user.email}`;
  customerPhone.innerHTML = `<strong>Phone:</strong> ${user.phone || "N/A"}`;
  customerAddress.innerHTML = `<strong>Address:</strong> ${user.address.city +
    "," +
    user.address.hnumber +
    "," +
    user.address.city +
    "," || "N/A"
    }`;
  customerCompanyName.innerHTML = `<strong>Company Name:</strong> ${user.company.companyname || "N/A"
    }`;
  customerRole.innerHTML = `<strong>Role:</strong> ${user.company.role || "N/A"
    }`;
  customerCompanyWebsite.innerHTML = `<strong>Website:</strong> <a target = _blank href=https://${user.company.companywebsite}>${user.company.companywebsite || "N/A"} </a>`;
  customerLogOut.addEventListener("click", () => {
    sessionStorage.removeItem("loggedInCustomer");
    window.location.href = "index.html";
  });
}
// });
