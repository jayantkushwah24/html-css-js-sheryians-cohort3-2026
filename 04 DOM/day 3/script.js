// attribute and properties

const heading = document.querySelector(".heading");
const para = document.querySelector("p");
console.log(heading);

const id = heading.getAttribute("id"); //get the attribute of the element
console.log(id);

para.setAttribute("id", "testing"); //set the attribute on the element
para.setAttribute("class", "paragraph");

para.removeAttribute("id"); // remove the attribute of the element

const hasClass = para.hasAttribute("class"); // return boolean
console.log(hasClass);

// custom attribute
const head3 = document.querySelector("h3");
console.log(head3.dataset.company);

// input.value

const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", () => {
  console.log(input.value);
  input.value = "";
});

// creating inserting removing elements from dom
const footer = document.createElement("footer");
const span = document.createElement("span");
span.innerText = "hi i am span tag";
document.body.append(span, footer); // can append multiple tag at one time.
document.body.appendChild(footer); // can append only one tag at once
document.body.removeChild(footer);

/**
 * old api
 * - appendChild() -insertBefore()  -removeChild()
 *
 * new api
 * -append() - multiple node + string in one call
 * -prepend() [sabse pehle]  -before()  -after() -replaceWith()
 */

const box = document.querySelector(".box");
box.style.height = "50vh";
box.style.width = "80vw";
box.style.backgroundColor = "yellow";
box.style.display = "flex";
box.style.gap = "1rem";

const box1 = document.createElement("div");
box1.classList.add("box1");
box1.style.height = "100%";
box1.style.width = "30%";
box1.style.backgroundColor = "red";

const box2 = document.createElement("div");
box2.classList.add("box2");
box2.style.height = "100%";
box2.style.width = "30%";
box2.style.backgroundColor = "green";

const box3 = document.createElement("div");
box3.classList.add("box3");
box3.style.height = "100%";
box3.style.width = "30%";
box3.style.backgroundColor = "blue";

box.append(box3);
box3.before(box2);
box.prepend(box1);
