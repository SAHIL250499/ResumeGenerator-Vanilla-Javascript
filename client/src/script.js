const addNewWEField = () => {
  let newNode = document.createElement("textarea");
  const list = [
    "form-control",
    "weField",
    "shadow",
    "border",
    "w-full",
    "rounded",
    "mt-2",
  ];
  newNode.classList.add(...list);
  newNode.setAttribute("rows", 3);
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
};

const addNewAQField = () => {
  let newNode = document.createElement("textarea");
  const list = [
    "form-control",
    "aqField",
    "shadow",
    "border",
    "w-full",
    "rounded",
    "mt-2",
  ];
  newNode.classList.add(...list);
  newNode.setAttribute("rows", 3);
  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("AQAddButton");
  aqOb.insertBefore(newNode, aqAddButtonOb);
};

const generateCV = () => {
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT").innerHTML = nameField;

  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;
  let section1 = document.getElementById("section1");
  let section2 = document.getElementById("section2");
  section1.classList.toggle("hidden");
  section2.classList.toggle("hidden");
};

const gobackbutton = () => {
  let section1 = document.getElementById("section1");
  let section2 = document.getElementById("section2");
  section1.classList.toggle("hidden");
  section2.classList.toggle("hidden");
};

const printCV = () => {
  window.print();
};
