console.log(window);

console.log(document);

const body = document.querySelector("body");

console.log(body.childNodes); // nodelist -> point to tree and in tree everything is node

console.log(body.children); // htmlcollection -> only points to html elements -> only elements

const h1 = document.querySelector("h1");
h1.textContent = "namaste...<i>jayant</i>"; // returns all raw text (including hidden elements)

const name = document.querySelector(".name");
name.innerText = "hi...<i>jayant</i>"; // returns only the clean, human-readable text currently visible on the screen

const city = document.querySelector("#city");
city.innerHTML = "hi...<i>indore</i>"; //returns the full HTML markup,

// styling
h1.style.backgroundColor = "blue";
h1.style.fontSize = "2rem";
h1.style.padding = "3rem";

const allH1 = document.querySelectorAll("h1");
console.log(allH1);

//classList
h1.classList.add("h1");
const isClassExists = name.classList.contains("name");
console.log(isClassExists);
city.classList.remove("cityName");
city.classList.toggle("cityName");
city.classList.replace("cityName", "city");

// bulb code
const circle = document.querySelector(".circle");
const bulbButton = document.querySelector(".bulb-btn");
let isOn = true;
bulbButton.addEventListener("click", (e) => {
  if (isOn) {
    circle.style.backgroundColor = "yellow";
    isOn = false;
    bulbButton.textContent = "Off";
  } else {
    circle.style.backgroundColor = "white";
    isOn = true;
    bulbButton.textContent = "On";
  }
});
