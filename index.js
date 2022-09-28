// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
// 加入doneList/list-area
const doneList = document.querySelector("#done-list");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

// Create
addBtn.addEventListener("click", function () {
  // 1.規格1:利用trim()，移除字串起始及結尾處的空白字元，防止產生空白 todo
  const inputValue = input.value.trim();
  if (inputValue.length > 0) {
    addItem(inputValue);
    input.value = "";
  }
});
// 2. 規格2: 當使用者在 input#newTodo 裡按下 Enter 鍵時，可以新增 to-do
input.addEventListener("keydown", (event) => {
  const inputValue = input.value.trim();
  if (event.key === "Enter") {
    addItem(inputValue);
    input.value = "";
  }
});

// Delete and check
list.addEventListener("click", (event) => {
  const target = event.target;
  let parentElement = target.parentElement;

  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    // 3.規格3-1: 讓已完成清單新增至donelist
    doneList.appendChild(parentElement);
  }
});

// 3.規格3-2: donelist也有刪除功能
// **觀摩同學: donelist裡的事項也可返回todo list 裡
doneList.addEventListener("click", (event) => {
  const target = event.target;
  let parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    // 3-3 點擊後讓donelist返回todolist
    list.appendChild(parentElement);
  }
});

// *觀摩同學: 新增reset按紐
// let resetBtn = document.querySelector('#btn-reset')
// resetBtn.addEventListener('click', (event) => {
//  let child = input.firstChild
//  while (child) {
//    input.remove(child)
//  }
//  input.value = ''
// })
