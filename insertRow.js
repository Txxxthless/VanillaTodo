import { store } from "./index.js";

export const insertRow = (todo) => {
  const table = document.querySelector("table");
  const row = table.insertRow();

  const name = row.insertCell(0);
  name.innerHTML = todo.name;

  const created = row.insertCell(1);
  const date =
    todo.create instanceof Date
      ? todo.created.toDateString()
      : new Date(todo.created).toDateString();
  created.innerHTML = date;

  const category = row.insertCell(2);
  category.innerHTML = todo.category;

  const content = row.insertCell(3);
  content.innerHTML = todo.content;

  const dates = row.insertCell(4);
  dates.innerHTML = todo.dates;

  const actions = row.insertCell();
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.onclick = () => {
    store.change(({ id }) => id !== todo.id);
    row.parentNode.removeChild(row);
  };
  actions.appendChild(button);
};
