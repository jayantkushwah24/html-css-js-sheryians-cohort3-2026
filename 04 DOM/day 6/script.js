const formDiv = document.querySelector(".form");
const productsDiv = document.querySelector(".products");
const form = document.querySelector("form");
const createBtn = document.querySelector("#nav-create-btn");
const backBtn = document.querySelector("#back-btn");

let productList = [];
let updateIndex = null;

function productListRender() {
  productsDiv.innerHTML = "";
  productList.forEach((item, index) => {
    productsDiv.innerHTML += `<div class="product-card">
          <div class="img">
            <img
              src=${item.productImageURL}
              alt="img"
              height="200"
            />
          </div>
          <div class="text">
            <div class="name">${item.productName}</div>
            <div class="desc">${item.productDesc}</div>
            <div class="price">${item.productPrice}</div>
          </div>
          <div class="buttons">
            <button class="update-btn" onclick="updateProduct('${index}')">Update</button>
            <button class="delete-btn" onclick="deleteProduct(${index})" >Delete</button>
          </div>
        </div>`;
  });
}
productListRender();

function deleteProduct(index) {
  productList.splice(index, 1);
  productListRender();
}

function updateProduct(index) {
  const product = productList[index];
  updateIndex = index;
  formDiv.style.display = "flex";

  form[0].value = product.productName;
  form[1].value = product.productDesc;
  form[2].value = product.productPrice;
  form[3].value = product.productImageURL;
}

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

backBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const productName = event.target[0].value;
  const productDesc = event.target[1].value;
  const productPrice = event.target[2].value;
  const productImageURL = event.target[3].value;

  let obj = {
    id: productList.length + 1,
    productName,
    productDesc,
    productPrice,
    productImageURL,
  };
  console.log("inside form  " + updateIndex);

  if (updateIndex != null) {
    productList[updateIndex] = obj;
    updateIndex = null;
  } else {
    productList.push(obj);
  }

  productListRender();
  form.reset();
  formDiv.style.display = "none";
});
