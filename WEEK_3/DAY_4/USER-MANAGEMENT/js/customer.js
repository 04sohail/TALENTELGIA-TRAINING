document.addEventListener("DOMContentLoaded", () => {
  const customerName = document.querySelector(".customer-name");
  const customerEmail = document.querySelector(".customer-email");
  const customerPhone = document.querySelector(".customer-phone");
  const customerAddress = document.querySelector(".customer-address");
  const customerCompanyName = document.querySelector(".customer-company-name");
  const customerRole = document.querySelector(".customer-role");
  const customerLogOut = document.querySelector(".customer-log-out-btn");
  const customerCompanyWebsite = document.querySelector(
    ".customer-company-website"
  );

  const user = JSON.parse(sessionStorage.getItem("loggedInCustomer"));
  console.log(user);

  if (!user) {
    alert("No user data found. Redirecting to login page.");
    window.location.href = "index.html";
    return;
  }

  customerName.innerHTML = `<strong>Name:</strong> ${user.first_name} ${user.last_name}`;
  customerEmail.innerHTML = `<strong>Email:</strong> ${user.email}`;
  customerPhone.innerHTML = `<strong>Phone:</strong> ${user.phone || "N/A"}`;
  customerAddress.innerHTML = `<strong>Address:</strong> ${
    user.address.city +
      "," +
      user.address.hnumber +
      "," +
      user.address.city +
      "," || "N/A"
  }`;
  customerCompanyName.innerHTML = `<strong>Company Name:</strong> ${
    user.company.companyname || "N/A"
  }`;
  customerRole.innerHTML = `<strong>Role:</strong> ${
    user.company.role || "N/A"
  }`;
  customerCompanyWebsite.innerHTML = `<strong>Website:</strong> <a target = _blank href=https://${
    user.company.companywebsite
  }>${user.company.companywebsite || "N/A"} </a>`;
  customerLogOut.addEventListener("click", () => {
    sessionStorage.removeItem("loggedInCustomer");
    window.location.href = "index.html";
  });
});
