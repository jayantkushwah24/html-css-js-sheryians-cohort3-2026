// Build a mini TODO app using arrays + objects.

let todo = [];

let addTask = function (task) {
  todo.push({ id: todo.length + 1, task, isDone: false });
};

let completeTask = function (id) {
  let result = todo.find((ele) => ele.id == id);
  result.isDone = true;
};

let removeTask = function (id) {
  let result = todo.filter((ele) => ele.id != id);
  task = [...result];
};

let showTodo = function () {
  todo.forEach((ele) => {
    console.log(`Task : ${ele.task}`);
    console.log(`isDone : ${ele.isDone}`);
  });
};

addTask("go for workout");
addTask("attend live lecture");
completeTask(2);
addTask("practise programming");
completeTask(3);
addTask("build project");
removeTask(4);
showTodo();
