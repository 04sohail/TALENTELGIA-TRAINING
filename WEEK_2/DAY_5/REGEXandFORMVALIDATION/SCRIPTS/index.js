let gmail = document.getElementById("gmail");
let password = document.getElementById("password");

const validate = (gmail) => {
  const gmailPattern = /[a-zA-Z0-9/._-]+[@][a-z]+[.][com]/;
  console.log(gmailPattern.test(gmail));
};


const readEmail = (event) => {
  console.log(event.target.value);
  validate(event.target.value);
};
