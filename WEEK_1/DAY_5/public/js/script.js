const querySelectorDemo = document.querySelector("h1");
querySelectorDemo.innerText = "HELLO TEXT CHANGED BY querySelectorDemo";
console.log(querySelectorDemo);

const querySelectorAllDemo = document.querySelectorAll("h1");
console.log(querySelectorAllDemo);

const getElementByIdDemo = document.getElementById("getElementByIdDemo");
getElementByIdDemo.innerHTML = "Hello text changed by getElementsByIdDemo";
console.log(getElementByIdDemo);

const getElementsByClassNameDemo = document.getElementsByClassName(
  "getElementsByClassNameDemo"
);
console.log(getElementsByClassNameDemo);

const btn = document.body.appendChild(document.createElement("button"));
btn.setAttribute("class", "btn");
btn.setAttribute("disabled", true);
btn.removeAttribute("disabled", true);
btn.innerText = "Button";

// Creating Buttons Dynamically

const buttonsDetails = [
  {
    id: 1,
    name: "Menu 1",
  },
  {
    id: 2,
    name: "Menu 2",
  },
  {
    id: 3,
    name: "Menu 3",
  },
  {
    id: 4,
    name: "Menu 4",
  },
  {
    id: 5,
    name: "Menu 5",
  },
  {
    id: 6,
    name: "Menu 6",
  },
  {
    id: 7,
    name: "Menu 7",
  },
  {
    id: 8,
    name: "Menu 8",
  },
  {
    id: 9,
    name: "Menu 9",
  },
  {
    id: 10,
    name: "Menu 10",
  },
];
const parentBtn = document.body

buttonsDetails.forEach((button) => {
  const btn = createButton('button');
  const detailedBtn =  addDetailsInButton(button, btn);
  appendButton(parentBtn, detailedBtn);
});


function createButton(elementDetail){
    const btn = document.createElement(elementDetail)
    return btn
}

function addDetailsInButton(buttonsDetails, btn){
    btn.id = buttonsDetails.id
    btn.innerHTML = buttonsDetails.name
    return btn
}

function appendButton(parentBtn, childBtn){
    parentBtn.appendChild(childBtn)
}
