import { insertRow } from "./insertRow.js";
import { activeTodosStore } from "./store/index.js";

const onStart = () => {
  for (let todo of activeTodosStore.value) {
    insertRow(todo);
  }

  const createButton = document.querySelector("#create-button");

  createButton.onclick = () => {
    const todo = {
      name: "Doo",
      created: Date.now(),
      category: "Task",
      content: "Bar",
      dates: "",
    };
    activeTodos.add(todo);
    insertRow(todo);
  };
};

onStart();
