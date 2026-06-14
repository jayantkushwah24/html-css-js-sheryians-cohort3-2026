const tastList = document.querySelector(".task-list");
const addButton = document.querySelector(".add-btn");
const input = document.querySelector("input");
const taskList = document.querySelector(".task-list");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value.trim() == "") {
    return;
  }
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  li.textContent = input.value;
  taskList.append(li);

  deleteBtn.textContent = "Edit";
  deleteBtn.setAttribute("class", "delete-btn");
  taskList.append(deleteBtn);

  editBtn.textContent = "Delete";
  editBtn.setAttribute("class", "edit-btn");
  taskList.append(editBtn);
});
